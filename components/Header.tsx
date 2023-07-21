"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { toast } from "react-hot-toast";

// import usePlayer from "@/hooks/usePlayer";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";

import { useSupabaseClient } from "@supabase/auth-helpers-react";

interface Headerprops {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<Headerprops> = ({ children, className }) => {
  const authmodal = useAuthModal();
  const router = useRouter();

  const supabaseclient = useSupabaseClient();
  const { user } = useUser();

  const handleLogOut = async () => {
    const { error } = await supabaseclient.auth.signOut();
    // reset playing songs
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

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
          {user ? (
            <div className="flex gap-x-4 items-center">
              <Button onClick={handleLogOut} className="bg-white px-6 py-2">
                Log out
              </Button>
              <Button className="bg-white" onClick={() =>router.push('/account')}>
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  className=" bg-transparent text-neutral-300 font-medium"
                  onClick={authmodal.open}
                >
                  {/* <FaUserAlt size={20} className="text-white" /> */}
                  Sign Up
                </Button>
              </div>
              <div>
                <Button
                  className=" bg-white px-6 py-2"
                  onClick={authmodal.open}
                >
                  {/* <FaUserAlt size={20} className="text-white" /> */}
                  Log In
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
