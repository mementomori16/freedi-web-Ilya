"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function App() {
    useEffect(() => {
        redirect("/he/home");
    }, []);

    return <></>;
}
