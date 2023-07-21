"use client"

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";

const ModalProvider  = () =>{
    
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(()=>{
        setIsMounted(true);
    }, [])
    
    
    if(!isMounted) return null;
    
    return(
        <>
            <AuthModal />
       </>

);
}


export default ModalProvider;

//make sure none if the scnes or modals are used during server side rendering