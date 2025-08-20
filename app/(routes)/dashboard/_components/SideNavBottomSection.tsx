import { Button } from "@/components/ui/button";
import { Archive, Flag, Github } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/ui/input";
import Constant from "@/app/_constant/Constant";
import PricingDialog from "./PricingDialog";
const SideNavBottomSection = ({ onFileCreate,totalFiles }:any) => {
  const menuList = [
    {
      id: 1,
      name: "Getting Started",
      icon: Flag,
      path: "",
    },
    {
      id: 2,
      name: "Github",
      icon: Github,
      path: "",
    },
    {
      id: 3,
      name: "Archive",
      icon: Archive,
      path: "",
    },
  ];
   const [fileInput,setFileInput]=useState('');
  return (
    <div className="bg-black text-white p-2 rounded-lg space-y-3">
      {/* Menu List */}
      <div className="space-y-1">
        {menuList.map((menu, index) => (
          <h2
            key={index}
            className="flex items-center gap-3 p-2 text-sm cursor-pointer rounded-md 
                       hover:bg-teal-500/20 transition-all duration-300 hover:pl-4"
          >
            <menu.icon className="h-5 w-5 text-teal-400" />
            <span className="hover:text-teal-300 transition-colors">{menu.name}</span>
          </h2>
        ))}
      </div>

      {/* Add New File Button */}
     <Dialog>
  <DialogTrigger asChild>
    <Button
      variant="outline"
      className="justify-start w-full bg-[#041E21] border border-gray-800 
                 text-gray-300 rounded-xl shadow-md
                 hover:bg-teal-500 hover:text-black hover:shadow-lg hover:scale-[1.02] 
                 transition-all duration-300 ease-in-out"
    >
      New File
    </Button>
  </DialogTrigger>

  {totalFiles < Constant.MAX_FREE_FILE ? (
    <DialogContent className="bg-[#041E21] border border-gray-800 text-white rounded-xl shadow-2xl">
      <DialogHeader>
        <DialogTitle className="text-lg font-bold text-teal-400">
          Create New File
        </DialogTitle>
        <DialogDescription className="text-gray-400">
        <Input
          onChange={(e) => setFileInput(e.target.value)}
          placeholder="Enter file name"
          className="mt-4 bg-[#0B2B2F] border border-gray-700 text-white 
                     placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-teal-500"
        />
      </DialogDescription>
    </DialogHeader>

    <DialogFooter className=" mt-4">
      <DialogClose asChild>
        <Button
          onClick={() => onFileCreate(fileInput)}
          disabled={!(fileInput && fileInput.length > 3)}
          type="button"
          className=" cursor-pointer bg-teal-500 text-black font-semibold rounded-lg 
                     hover:bg-teal-400 transition-all duration-300 ease-in-out"
        >
          Create
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
  ) :  <PricingDialog />}
</Dialog>

    

      {/* Progress Bar */}
      <div className="mt-3">
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-teal-500 to-teal-300 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(totalFiles/5)*100}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          <strong>{totalFiles}</strong> out of <strong>{Constant.MAX_FREE_FILE}</strong> files used
        </p>
        <p className="text-xs text-gray-500">
          Upgrade your plan for unlimited access
        </p>
      </div>
    </div>
  );
};

export default SideNavBottomSection;
