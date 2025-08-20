"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/ui/input";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

function CreateTeam() {
  const [teamName, setTeamName] = useState("");
  const createTeam = useMutation(api.teams.createTeam);
  const { user }: any = useKindeBrowserClient();
  const router = useRouter();

  const createNewTeam = () => {
    createTeam({
      teamName: teamName,
      createdBy: user?.email,
    }).then((resp) => {
      if (resp) {
        router.push("/dashboard");
        toast("Team created successfully!!!");
      }
    });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-2 group">
          <Image
            src="/logo-er.png"
            alt="Nexa Logo"
            width={36}
            height={36}
            className="rounded transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-xl font-semibold group-hover:text-teal-400 transition-colors">
            Nexa
          </span>
        </div>
        <LogoutLink>
          <Button className="bg-gray-800 hover:bg-teal-500 hover:text-black transition-colors duration-300">
            Logout
          </Button>
        </LogoutLink>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="max-w-lg w-full bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-teal-500/50 transition-colors duration-300 animate-fadeIn">
          <h2 className="font-bold text-2xl text-center">
            What should we call your team?
          </h2>
          <p className="text-gray-400 text-center mt-2">
            You can always change this later from settings.
          </p>

          <div className="mt-6">
            <label className="text-gray-300 block mb-2">Team Name</label>
            <Input
              placeholder="Enter your team name"
              className="bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <Button
            className="w-full mt-6 bg-teal-500 hover:bg-teal-400 text-black font-semibold transition-transform duration-300 hover:scale-105"
            disabled={!(teamName && teamName?.length > 0)}
            onClick={() => createNewTeam()}
          >
            Create Team
          </Button>
        </div>
      </main>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default CreateTeam;
