import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      
    <div>
        <div className="pt-8 pl-8">
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
    <div className="w-[80%] mx-auto pt-4 pl-4">
       
        
      <div className="flex flex-col md:flex-row gap-6 items-center justify-around pt-6 text-center md:text-start">
        <div className="flex flex-col gap-2 ">
            <h1 className="font-sundry text-8xl md:text-9xl fony-bold">About</h1>
          <h2 className=" text-5xl font-sundry ">
            I&apos;m Huzair
          </h2>
          <div className="flex items-center gap-2">
          <h2 className="text-3xl md:text-4xl  font-sundry ">
            A Frontend Developer From Karachi
          </h2>
          <Image
            src="/images/mazaar.png"
            alt="mazaar"
            width={50}
            height={50}
            className="animate-scale-bounce hidden 2xl:block"
          ></Image>
          </div>
          <p></p>
        </div>
        <div className="">
            <Image src="/images/me-round-border.png" alt="huzair" height={500} width={500}></Image>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default About;
