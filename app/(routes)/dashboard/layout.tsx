"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SideNav from "./_components/SideNav";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { FileListContext } from "@/app/_context/FileListContext";

const Dashboardlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user }: any = useKindeBrowserClient();
  const  [fileList_,setFileList_] = useState([]);
  const convex = useConvex();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      checkTeam();
    }
  }, [user]);

  const checkTeam = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });

    if (!result?.length) {
      router.push("teams/create");
    }
    // handle result
  };

  return (<div className="min-h-screen bg-[#041114] text-white">
    <FileListContext.Provider value={{fileList_,setFileList_}}>
    <div className="grid ">
        <div className="h-screen w-72 fixed">
            <SideNav />
        </div>
        <div className="col-span-3 mt-8 ml-72">
             {children}
        </div>
    </div>
    </FileListContext.Provider>
  </div>
  )
};

export default Dashboardlayout;
