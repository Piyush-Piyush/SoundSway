"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Music, Headphones, Radio, Users } from "lucide-react";
import { useRouter } from 'next/navigation';

export function Appbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut({ redirect: false }); 
    router.push('/'); 
  };
  return (
    <div className="bg-gradient-to-r from-blue-900 to-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-teal-300" />
            <span className="text-2xl font-bold text-white">StreamSync</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="flex items-center text-blue-100 hover:text-teal-300 transition-colors"
            >
              <Headphones className="h-5 w-5 mr-1" />
              <span>Discover</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-blue-100 hover:text-teal-300 transition-colors"
            >
              <Radio className="h-5 w-5 mr-1" />
              <span>Live</span>
            </Link>
            <Link
              href="#"
              className="flex items-center text-blue-100 hover:text-teal-300 transition-colors"
            >
              <Users className="h-5 w-5 mr-1" />
              <span>Community</span>
            </Link>
          </nav>
          <div className="flex-col items-center space-x-4 ">
            {session?.user ? (
              <div className=" flex flex-col items-center gap-5 md:flex-row">
                <span className="text-blue-100">Hi, {session.user.name}</span>
                <Button
                  className="bg-teal-600 text-white hover:bg-teal-500 shadow-lg shadow-teal-500/30"
                  onClick={handleSignOut}
                >
                  Logout
                </Button>
              </div>
            ) : (
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/30"
                  onClick={() => signIn()}
                >
                  Sign In
                </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
