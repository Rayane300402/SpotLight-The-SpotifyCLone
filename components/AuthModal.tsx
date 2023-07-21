"use client";

import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import Modal from "./Modal";
import useAuthModal from "@/hooks/useAuthModal";

import { useRouter } from "next/navigation";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect } from "react";

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { close, isOpen } = useAuthModal();

  useEffect(() =>{
    if(session){
      router.refresh
      close()
    }
  }, [session, router, close])

  const onChange = (open: boolean) => {
    if (!open) {
      close();
    }
  };

  return (
    <Modal
      title="Welcome Back"
      description="Login to your account"
      isOPen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        magicLink
        providers={[ "github"]}
        supabaseClient={supabaseClient}
        socialLayout="horizontal"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: "#22c55e",
              },
            },
          },
        }}
      />
    </Modal>
  );
};

export default AuthModal;
