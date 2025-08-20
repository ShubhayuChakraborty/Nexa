import { Button } from "@/components/ui/button";
import { Link, Save } from "lucide-react";
import Image from "next/image";
import React from "react";

type Mode = "document" | "both" | "canvas";

interface WorkspaceHeaderProps {
  onSave: () => void;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  fileName?: string;
}

const WorkspaceHeader = ({
  onSave,
  mode,
  onModeChange,
  fileName,
}: WorkspaceHeaderProps) => {
  const ModeButton = ({ id, label }: { id: Mode; label: string }) => (
    <Button
      size="sm"
      variant={mode === id ? "secondary" : "ghost"}
      className={`rounded-full text-xs h-8 px-3 ${mode === id ? "bg-white/10 text-white" : "text-gray-300"}`}
      onClick={() => onModeChange(id)}
    >
      {label}
    </Button>
  );

  return (
    <div className="p-2 md:p-3 border-b border-white/10 bg-[#041114]/80 backdrop-blur-lg flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <Image src="/logo-er.png" alt="logo" width={50} height={50} priority />
        <h2 className="font-semibold text-lg text-gray-200 truncate max-w-[40vw]">
          {fileName || "File Name"}
        </h2>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex bg-[#0B2B2F]/70 backdrop-blur-md border border-white/10 rounded-full p-1">
          <ModeButton id="document" label="Document" />
          <ModeButton id="both" label="Both" />
          <ModeButton id="canvas" label="Canvas" />
        </div>
        <Button
          onClick={() => onSave()}
          className="flex items-center gap-1 rounded-full text-xs h-8 bg-gradient-to-r from-teal-500 to-teal-400 text-black hover:from-teal-400 hover:to-teal-300 transition"
        >
          <Save className="h-4 w-4" />
          Save
        </Button>
        <Button className="flex items-center gap-1 rounded-full text-xs h-8 bg-gray-800 text-white hover:bg-gray-700 transition">
          Share <Link className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default WorkspaceHeader;
