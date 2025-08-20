"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import WorkspaceHeader from "./_components/WorkspaceHeader";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { FILE } from "../../dashboard/_components/FileList";

const Canvas = dynamic(() => import("./_components/Canvas"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center text-white/70">
      Loading canvas…
    </div>
  ),
});

const Editor = dynamic(() => import("./_components/Editor"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center text-white/70">
      Loading editor…
    </div>
  ),
});

const WorkSpace = () => {
  const [triggerSave, setTriggerSave] = useState(false);
  const [mode, setMode] = useState<"document" | "both" | "canvas">("both");
  const convex = useConvex();
  const [fileData, setFileData] = useState<FILE>();
  const params = useParams<{ fileId: string }>();
  const fileId = params?.fileId;

  useEffect(() => {
    if (fileId) {
      getFileData();
    }
  }, [fileId]);

  const getFileData = async () => {
    const result = await convex.query(api.files.getFileById, { _id: fileId });
    setFileData(result);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-[#041114] text-white flex flex-col">
      {/* Sticky Workspace Header */}
      <div className="sticky top-0 z-50">
        <WorkspaceHeader
          onSave={() => setTriggerSave(!triggerSave)}
          mode={mode}
          onModeChange={setMode}
          fileName={fileData?.fileName}
        />
      </div>

      {/* Content area: conditionally render depending on mode */}
      {mode === "both" && (
        <div className="flex flex-grow divide-x divide-[#0E2930]">
          <div className="w-1/2 h-full overflow-y-auto p-4 bg-[#041E21]/60 backdrop-blur-lg">
            {fileId && (
              <Editor
                onSaveTrigger={triggerSave}
                fileId={fileId}
                fileData={fileData}
              />
            )}
          </div>
          <div className="w-1/2 h-full overflow-y-auto p-4 bg-[#041E21]/60 backdrop-blur-lg">
            <Canvas
              onSaveTrigger={triggerSave}
              fileId={params.fileId}
              fileData={fileData!}
            />
          </div>
        </div>
      )}

      {mode === "document" && (
        <div className="flex-grow h-full overflow-y-auto p-4 bg-[#041E21]/60 backdrop-blur-lg">
          {fileId && (
            <Editor
              onSaveTrigger={triggerSave}
              fileId={fileId}
              fileData={fileData}
            />
          )}
        </div>
      )}

      {mode === "canvas" && (
        <div className="flex-grow h-full overflow-y-auto p-4 bg-[#041E21]/60 backdrop-blur-lg">
          <Canvas
            onSaveTrigger={triggerSave}
            fileId={fileId}
            fileData={fileData!}
          />
        </div>
      )}
    </div>
  );
};

export default WorkSpace;
