import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Contact() {
  return (
    <div>
      <div className="p-8">
        <Link
          className=" hover:underline transition"
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
      <div className="w-[70%] mx-auto flex items-center h-[50vh] md:h-[70vh]">
        <div className="flex flex-col gap-6  max-w-[28rem]">
          <h1 className="font-sundry text-8xl md:text-9xl">Hello .</h1>
          <p>
            Need a modern and professional website for your business which can
            boost your sales? Get in touch.
          </p>
          <p>
            Email: <span className="">huzairahmedkhan@gmail.com</span>
          </p>
          <p>
            Socials:{" "}
            <a
              href="www.linkedin.com/in/huzair-ahmed-khan"
              className="underline px-1"
            >
              LinkedIn
            </a>{" "}
            <a href="https://github.com/codeWithHak" className="underline">
              GitHub
            </a>{" "}
            <a
              href="https://www.instagram.com/huzair.01/"
              className="underline px-1"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
