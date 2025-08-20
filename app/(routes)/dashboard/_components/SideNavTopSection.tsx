import { ChevronDown, LayoutGrid, LogOut, Settings, Users } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Separator } from "@/components/ui/separator";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export interface TEAM {
  createdBy: string;
  teamName: string;
  _id: string;
}

const SideNavTopSection = ({ user, setActiveTeamInfo }: any) => {
  const menu = [
    {
      id: 1,
      name: "Create Team",
      path: "/teams/create",
      icon: Users,
    },
    {
      id: 2,
      name: "Settings",
      path: "",
      icon: Settings,
    },
  ];

  const router = useRouter();
  const convex = useConvex();
  const [activeTeam, setActiveTeam] = useState<TEAM>();
  const [teamList, setTeamList] = useState<TEAM[]>([]);

  useEffect(() => {
    if (user) getTeamList();
  }, [user]);

  useEffect(()=>{
    activeTeam&&setActiveTeamInfo(activeTeam)
  },[activeTeam])

  const getTeamList = async () => {
    const result = await convex.query(api.teams.getTeam, {
      email: user?.email,
    });
    setTeamList(result);
    setActiveTeam(result[0]);
  };

  const onMenuItemClick = (item: any) => {
    if (item.path) router.push(item.path);
  };

  return (
    <div>
    <Popover>
      <PopoverTrigger>
        <div className="group flex items-center gap-3 rounded-xl px-4 py-3 
          bg-gradient-to-r from-teal-500/10 to-teal-300/5 
          hover:from-teal-500/20 hover:to-teal-300/10 
          backdrop-blur-md border border-teal-400/20 shadow-sm 
          hover:shadow-lg cursor-pointer transition-all duration-300 ease-out
          hover:scale-[1.02]">
          <Image
            src="/logo-er.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <h2 className="font-semibold text-base flex items-center gap-1 text-gray-200 group-hover:text-teal-400 transition-colors">
            {activeTeam?.teamName || "Select Team"}
            <ChevronDown className="inline ml-1 w-4 h-4" />
          </h2>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="ml-12 p-4 bg-gradient-to-br from-[#0a161a] to-[#0e1f23]
          backdrop-blur-lg border border-teal-400/20 shadow-lg shadow-black/40
          rounded-xl transition-all duration-300 ease-in-out w-64"
      >
        {/* Team Section */}
        <div className="space-y-2">
          {teamList?.map((team) => (
            <h2
              key={team._id}
              className={`text-sm font-medium px-3 py-2 rounded-md cursor-pointer 
                transition-all duration-200 
                ${activeTeam?._id === team._id
                  ? "bg-teal-600/30 text-teal-300"
                  : "text-gray-300 hover:bg-teal-500/20 hover:text-teal-200"
                }`}
              onClick={() => setActiveTeam(team)}
            >
              {team.teamName}
            </h2>
          ))}
        </div>

        <Separator className="my-3 bg-gray-700/40" />

        {/* Menu Section */}
        <div className="space-y-1">
          {menu.map((item) => (
            <h2
              key={item.id}
              className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer 
                text-sm font-medium text-gray-300 transition-all duration-200
                hover:bg-teal-500/20 hover:text-teal-200 hover:scale-[1.02]"
              onClick={() => onMenuItemClick(item)}
            >
              <item.icon className="h-4 w-4 text-teal-300" />
              {item.name}
            </h2>
          ))}

          <LogoutLink>
            <h2
              className="flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer 
                text-sm font-medium text-gray-300 transition-all duration-200
                hover:bg-red-500/20 hover:text-red-300 hover:scale-[1.02]"
            >
              <LogOut className="h-4 w-4 text-red-400" />
              Logout
            </h2>
          </LogoutLink>
        </div>

        <Separator className="my-3 bg-gray-700/40" />

        {/* User Info Section */}
        {user && (
          <div className="flex items-center gap-3">
            <Image
              src={user.picture}
              alt="User Picture"
              width={44}
              height={44}
              className="rounded-full border border-teal-500/30"
            />
            <div>
              <h2 className="text-sm font-semibold text-gray-200">
                {user.given_name} {user.family_name}
              </h2>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
{/* All File Button */}
<Button
  variant="outline"
  className="w-full bg-[#051D20] text-white font-bold mt-8 justify-start gap-2 rounded-xl shadow-md 
             hover:bg-[#083135] hover:shadow-lg hover:scale-[1.02] 
             transition-all duration-300 ease-in-out cursor-pointer"
>
  <LayoutGrid className="h-4 w-4 mr-2 text-teal-400" />
  All Files
</Button>





    </div>
  );
};

export default SideNavTopSection;
