"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Mail, Linkedin, Github, Instagram } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Contact() {
  const socialLinks = [
    {
      title: "Email",
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "mailto:huzairahmedkhan@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://www.linkedin.com/in/huzair-ahmed-khan",
    },
    {
      title: "GitHub",
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://github.com/codeWithHak",
    },
    {
      title: "Instagram",
      icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
      href: "https://www.instagram.com/huzair.01/",
    },
  ]

  return (
    <div>
      <div className="p-8">
        <Link
          className="hover:underline transition"
          href="/"
          style={{
            writingMode: "vertical-lr",
            textOrientation: "sideways",
            transform: "rotate(180deg)",
            letterSpacing: "3px",
            fontSize: "18px",
          }}
        >
          Home
        </Link>
      </div>
      <div className="w-full sm:w-[70%] mx-auto flex items-center justify-center sm:justify-start h-[50vh] md:h-[70vh]">
        <div className="flex flex-col gap-6 max-w-[74rem] text-center sm:text-left">
          <h1 className="font-sundry text-6xl sm:text-8xl md:text-9xl">Hi .</h1>
          <p className="font-sundry text-base sm:text-lg">
            Need a professional website for your business? <Link href="https://www.linkedin.com/in/huzair-ahmed-khan"><span className="hover:scale-105 transition inline-block underline">Get in touch.</span></Link>
          </p>
          <FloatingDock 
            items={socialLinks}
            className="h-14 sm:h-16"
          />
        </div>
      </div>
    </div>
  )
}