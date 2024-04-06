"use client";

import Image from "next/image";
import React from "react";

// Images
import heroImg from "@/assets/Images/Hero illustration.png";

import styles from "./style.module.scss";
import { English, Hebrew } from "@/types/language";

export default function Header({
    currentLang,
}: {
    currentLang: English | Hebrew;
}) {
    return (
        <header className={styles.header}>
            <div className={styles.heroTitle}>
                <h2 className={styles.heading}>
                    {currentLang["Delicol fosters community well-being"]}
                </h2>
                <h2 className={styles.heading}>
                    {currentLang["Throught compassionate deliberation"]}
                </h2>
                <p className={styles.paragraph}>
                    {currentLang["Building Bonds and Bridging Divides"]}
                </p>
            </div>
            <Image
                alt="Hero-Image"
                src={heroImg}
                quality={100}
                loading="eager"
                loader={({ src }) => src}
                sizes="50vw"
                style={{
                    width: "50vw",
                    maxWidth: "800px",
                    height: "auto",
                    marginTop: "1vw",
                }}
            />
        </header>
    );
}
