import { Button } from "@/components/ui/button";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Search, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { user }: any = useKindeBrowserClient();
  return (
   <div className="flex gap-4 justify-end w-full items-center">
  {/* Search Box */}
  <div className="flex gap-2 items-center px-3 py-1.5 rounded-full bg-[#041E21]/40 
                  backdrop-blur-md border border-teal-500/30 shadow-inner 
                  focus-within:border-teal-400 transition-all duration-300">
    <Search className="h-4 w-4 text-teal-300" />
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent outline-none text-white placeholder-white w-40"
    />
  </div>

  {/* User Avatar */}
  {user?.picture && (
    <Image
      src={user.picture}
      alt="User Avatar"
      width={40}
      height={40}
      className="rounded-full"
    />
  )}

  {/* Invite Button */}
  <Button className="gap-2 mr-10 rounded-full text-sm flex h-8 px-4 
                     bg-gradient-to-r from-teal-500 to-emerald-400 
                     hover:from-teal-400 hover:to-emerald-300 
                     text-black shadow-lg transition-all duration-300">
    <Send className="h-4 w-4" /> Invite
  </Button>
</div>
  );
};

export default Header;
