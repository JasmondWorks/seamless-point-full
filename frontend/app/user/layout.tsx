"use server";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DashboardNavbar from "@/app/_components/DashboardNavbar";
import { useRouter } from "next/navigation";
import SpinnerFull from "../_components/SpinnerFull";
import ProtectedRoutes from "../_components/UserProtectedRoutes";
import Navbar from "../_components/Navbar";
import { ScrollArea } from "../_components/ui/scroll-area";
// import useAuth from "@/app/_hooks/useAuth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoutes >
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="bg-neutral-50 flex-1 overflow-auto flex">
          <DashboardNavbar />
          <ScrollArea className="h-full overflow-auto flex-1">
            <main className="p-5 md:p-6 lg:p-8 overflow-auto">
              <div className="relative z-10 space-y-10 h-full">{children}</div>
              <Image
                style={{
                  height: "82vh",
                  bottom: "50%",
                }}
                className="hidden translate-y-[56%] md:block w-auto object-contain right-8 fixed"
                src="/assets/images/seamlesspoint-watermark.png"
                alt="seamless point"
                width={500}
                height={500}
              />
            </main>
          </ScrollArea>
        </div>
      </div>
    </ProtectedRoutes>
  );
}
