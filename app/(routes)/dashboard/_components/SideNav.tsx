'use client';
import React, { use, useContext, useEffect, useState } from "react";
import SideNavTopSection, { TEAM } from "./SideNavTopSection";
import SideNavBottomSection from "./SideNavBottomSection";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Archive, Flag, Github } from "lucide-react";
import { on } from "events";
import { useConvex, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { arch } from "os";
import { get } from "http";
import { FileListContext } from "@/app/_context/FileListContext";

const SideNav = () => {
  const { user } = useKindeBrowserClient();

const createFile= useMutation(api.files.createFile)
const[activeTeam,setActiveTeam]=useState<TEAM>();
const convex = useConvex();
const [totalFiles,setTotalFiles]=useState<Number>();
const {fileList_,setFileList_} = useContext(FileListContext);
useEffect(() => {
  activeTeam && getFiles();
},[activeTeam])

const onFileCreate=(fileName:string)=>{
  console.log("File created:", fileName)
  if (!activeTeam?._id) {
    toast.error('Please select a team first');
    return;
  }
  createFile ({
    fileName:fileName,
    teamId:activeTeam._id,
    createdBy:user?.email || '',
    archived:false,
    document:'',
    whiteboard:''
  }).then((resp)=>{
    if(resp){
      getFiles();
    toast('File Created Successfully!');
  }


},(e)=>{
  toast.error('Error While Creating File', e);
}

);
}

const getFiles=async()=>{
  const result = await convex.query(api.files.getFiles, { teamId: activeTeam?._id });
  console.log(result);
  setFileList_(result);
  setTotalFiles(result?.length);
}

  return (






    <div className="side-nav flex flex-col bg-[#00050A] h-screen fixed w-72 text-white border-r border-teal-400/20 p-6">
      <div>
      {user && (
        <SideNavTopSection
          setActiveTeamInfo={(activeTeam:TEAM)=>setActiveTeam(activeTeam)}
          user={{
            picture: user.picture || "",
            given_name: user.given_name || "",
            family_name: user.family_name || "",
            email: user.email || "",
          }}
        />)}
        </div>
      {/* If you want a footer or bottom actions */}
      <div className="mt-auto">
         <SideNavBottomSection 
         totalFiles={totalFiles}
         onFileCreate={onFileCreate}
         />
    
      </div>
    </div>
  );
};

export default SideNav;
