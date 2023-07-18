"use client";

import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
// import { useSupabaseClient } from '@supabase/auth-helpers-react';
// import { toast } from "react-hot-toast";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

// import useAuthModal from "@/hooks/useAuthModal";
// import { useUser } from "@/hooks/useUser";
// import usePlayer from "@/hooks/usePlayer";

import Button from "./Button";

interface Headerprops {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Headerprops> = ({ children, className }) => {
  const router = useRouter();

  const handleLogOut = async () => {};
  return (
    <div
      className={twMerge(
        `
            h-fit
            bg-gradient-to-b
            from-emerald-800
            p-6
        `,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => {
              router.back();
            }}
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => {
              router.forward();
            }}
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2  items-center">
          <button className="rounded-full p-2 bg-white flex items-center hover:opacity-75 transition">
            <HiHome size={20} className="text-black" />
          </button>
          <button className="rounded-full p-2 bg-white flex items-center hover:opacity-75 transition">
            <BiSearch size={20} className="text-black" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button className=" bg-transparent text-neutral-300 font-medium" onClick={()=>{}}>
                {/* <FaUserAlt size={20} className="text-white" /> */}
                Sign Up
              </Button>
            </div>
            <div>
              <Button className=" bg-white px-6 py-2" onClick={()=>{}}>
                {/* <FaUserAlt size={20} className="text-white" /> */}
                Log In
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;

