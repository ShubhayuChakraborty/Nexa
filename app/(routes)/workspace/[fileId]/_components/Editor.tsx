"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS, { type ToolConstructable } from "@editorjs/editorjs";

import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import Table from "@editorjs/table";
import Delimiter from "@editorjs/delimiter";
import Marker from "@editorjs/marker";
import Checklist from "@editorjs/checklist";
import Embed from "@editorjs/embed";
import ImageTool from "@editorjs/image";
import LinkTool from "@editorjs/link";
import InlineCode from "@editorjs/inline-code";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { FILE } from "@/app/(routes)/dashboard/_components/FileList";

const rawDocument = {
  time: Date.now(),
  blocks: [
    {
      id: "123",
      type: "header",
      data: {
        text: "Document name",
        level: 2,
      },
    },
    // Use an empty paragraph instead of an empty header to avoid validation warnings
    {
      id: "intro",
      type: "paragraph",
      data: { text: "" },
    },
  ],
  version: "2.31.0",
};

const Editor = ({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: FILE | undefined;
}) => {
  const editorRef = useRef<EditorJS | null>(null);
  const updateDocument = useMutation(api.files.updateDocument);
  const holderRef = useRef<HTMLDivElement | null>(null);
  const didMountRef = useRef(false);

  // Initialize once on mount; cleanup on unmount
  useEffect(() => {
    if (holderRef.current && !editorRef.current) {
      initEditor(holderRef.current);
    }
    return () => {
      const inst: any = editorRef.current as any;
      if (inst && typeof inst.destroy === "function") {
        inst.destroy();
      }
      editorRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-render blocks when saved document changes
  useEffect(() => {
    const rerender = async () => {
      if (editorRef.current && fileData?.document) {
        try {
          const parsed = JSON.parse(fileData.document);
          await editorRef.current.isReady;
          const anyEditor = editorRef.current as any;
          if (typeof anyEditor.render === "function") {
            await anyEditor.render(parsed);
          } else if (anyEditor?.blocks?.render) {
            await anyEditor.blocks.render(parsed);
          }
        } catch (e) {
          console.warn("Failed to render saved document", e);
        }
      }
    };
    rerender();
  }, [fileData?.document]);
  useEffect(() => {
    // Skip the initial render; then save on every toggle change (true/false)
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    console.log("trigger value:", onSaveTrigger);
    onSaveDocument();
  }, [onSaveTrigger]);

  const initEditor = (holderEl: HTMLElement) => {
    let initialData = rawDocument;
    if (fileData?.document) {
      try {
        initialData = JSON.parse(fileData.document);
      } catch (e) {
        console.warn("Invalid saved document JSON, falling back to default", e);
      }
    }

    const editor = new EditorJS({
      holder: holderEl,
      data: initialData,
      placeholder: "Start writing...",

      tools: {
        header: {
          class: Header as unknown as ToolConstructable,
          config: {
            placeholder: "Enter a header", // this appears gray
            levels: [2, 3, 4],
            defaultLevel: 2,
          },
          shortcut: "CMD+SHIFT+H",
        },

        list: {
          class: List as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+L",
          inlineToolbar: true,
        },

        code: {
          class: CodeTool as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+C",
        },

        inlineCode: {
          class: InlineCode as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+I",
        },

        quote: {
          class: Quote as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+Q",
          config: {
            quotePlaceholder: "Type a quote",
            captionPlaceholder: "Author",
          },
        },

        checklist: {
          class: Checklist as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+K",
        },

        warning: {
          class: Warning as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+W",
          config: {
            titlePlaceholder: "Note title",
            messagePlaceholder: "Message",
          },
        },

        table: { class: Table as unknown as ToolConstructable },
        delimiter: { class: Delimiter as unknown as ToolConstructable },
        marker: {
          class: Marker as unknown as ToolConstructable,
          shortcut: "CMD+SHIFT+M",
        },

        embed: {
          class: Embed as unknown as ToolConstructable,
          config: { services: { youtube: true, codepen: true } },
        },

        image: {
          class: ImageTool as unknown as ToolConstructable,
          config: {
            uploader: {
              async uploadByFile(file: File) {
                return {
                  success: 1,
                  file: { url: "https://placehold.co/600x400" },
                };
              },
            },
          },
        },

        linkTool: {
          class: LinkTool as unknown as ToolConstructable,
          config: { endpoint: "https://noembed.com/embed?url=" },
        },
      },
    });

    editorRef.current = editor;
  };

  const onSaveDocument = async () => {
    try {
      if (!editorRef.current) return;
      if (!fileId) {
        toast.error("Missing file id. Can't save.");
        return;
      }
      await editorRef.current.isReady;
      const outputData = await editorRef.current.save();
      console.log("Article data:", outputData);
      updateDocument({
        _id: fileId,
        document: JSON.stringify(outputData),
      }).then(
        (resp) => {
          toast("Document updated successfully!");
        },
        (e) => {
          toast.error("Document update failed!");
        }
      );
    } catch (error) {
      console.log("Saving failed:", error);
    }
  };

  return (
    <div className="w-full h-full">
      <div
        ref={holderRef}
        className="prose prose-invert max-w-none text-white"
      />
    </div>
  );
};

export default Editor;
