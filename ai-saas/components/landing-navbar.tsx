"use client";

import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { montserrat } from "@/constants";
import { Button } from "./ui/button";

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();
     return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href={"/"} className="flex items-center">
               <div className="relative h-8 w-8 mr-4">
                  <Image 
                     fill
                     alt="logo"
                     src="/logo.png"
                  />
               </div>
               <h1 className={cn("text-2xl font-bold text-white", montserrat.className)}>
                  Wizard
               </h1>
            </Link>
            <div className="flex items-center gap-x-2">
               <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                  <Button variant={"outline"} className="rounded-full">
                     Get Started
                  </Button>
               </Link>
            </div>
        </nav>
     )
}