import { FileListContext } from "@/app/_context/FileListContext";
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { Archive, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/dist/client/components/navigation";
export interface FILE {
  archived: boolean;
  createdAt: string;
  document: string;
  whiteboard: string;
  teamId: string;
  fileName: string;
  _id: string;
  _creationTime: string;
}

const FileList = () => {
  const { fileList_, setFileList_ } = useContext(FileListContext);
  const [fileList, setFileList] = useState<any>([]);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  useEffect(() => {
    if (fileList_) {
      setFileList(fileList_);
    }
  }, [fileList_]);

  return (
    <div className="mt-14 mx-9 relative overflow-hidden rounded-xl border border-white/10 bg-[#041E21]/70 backdrop-blur-lg shadow-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />

      <div className="overflow-x-auto relative z-10">
        <table className="min-w-full text-sm">
          <thead className="bg-[#0B2B2F]/70 backdrop-blur-sm text-gray-300">
            <tr>
              {["File Name", "Created At", "Edited", "Author", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y cursor-pointer divide-white/10">
            {(fileList || []).map((file: FILE) => (
              <tr key={file._id} className="hover:bg-white/5 transition-all duration-200" onClick={() => router.push(`/workspace/${file._id}`)}>

                <td className="px-4 py-3 text-gray-300 font-medium">{file.fileName}</td>
                <td className="px-4 py-3 text-gray-400">
                  {moment(file._creationTime).format("DD/MM/YYYY")}
                </td>
                <td className="px-4 py-3 text-gray-400">
                  {moment(file._creationTime).format("DD/MM/YYYY")}
                </td>
                <td className="px-4 py-3">
                  <Image src={user?.picture} alt="User" width={30} height={30} className="rounded-full border border-white/10" />
                </td>

                {/* Action Dropdown */}
                <td className="px-4 py-3 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-gray-400 hover:text-teal-400 transition-colors">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="bg-[#041E21]/80 backdrop-blur-lg border border-white/10 text-gray-300 rounded-md shadow-xl">
                      <DropdownMenuItem className="gap-2 hover:bg-white/10 transition-all">
                        <Archive className="h-4 w-4 text-teal-400" /> Archive
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileList;
