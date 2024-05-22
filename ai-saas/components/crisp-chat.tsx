"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
export const CrispChat = () => {
    useEffect(()=> {
        Crisp.configure("edcad63e-5713-4dfa-af3e-2f4775ab6903");
    },[]);
    return null;
}