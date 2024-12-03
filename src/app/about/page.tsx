import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import WordRotate from "@/components/ui/word-rotate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Items = {
  quote: string;
  name: string;
  title: string;
};

function About() {
  const items: Items[] = [
    {
      quote: "Since he developed our website, our sales have gone up a lot. He is truly an expert and easy to work with!",
      name: "Waseem Akram",
      title: "Owner, Bang Tours"
    },
    {
      quote: "The website he made for us looks great and works well. It has really helped our brand stand out.",
      name: "Khizar Ahmed",
      title: "CEO, Codestic Solutions"
    },
    {
      quote: "He’s amazing at what he does! The site he built is both beautiful and easy to use. We will definitely work with him again.",
      name: "Uzair Ahmed Khan",
      title: "Owner, IU Collection"
    },
    {
      quote: "Very skilled and reliable. The website he delivered has helped us reach more people and grow our business.",
      name: "Kashif",
      title: "Founder, NexNoor"
    }
  ]
  
    
  ;

  return (
    <div className="min-h-screen">
      <div className="pt-8 pl-8">
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
      <div className="w-[80%] mx-auto pt-4 pl-4">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-around pt-6 text-center md:text-start">
          <div className="flex flex-col gap-2">
            <h1 className="font-sundry text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-flex items-center">
                I Can{"  "}
                <WordRotate
                  words={[" Think", " Design", " Develop", " Deploy"]}
                  className="ml-2"
                />
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-sundry">
              Hello, I&apos;m Huzair.
            </h2>
            <div className="flex items-center gap-2">
              <h2 className="text-xl md:text-4xl font-sundry">
                A Frontend Developer From Karachi
              </h2>
              <Image
                src="/images/mazaar.png"
                alt="mazaar"
                width={50}
                height={50}
                className="animate-scale-bounce hidden 2xl:block"
              />
            </div>
          </div>
          <div>
            <Image src="/images/me-round-border.png" alt="huzair" height={500} width={500} />
          </div>
        </div>
        <h1 className="mt-16 mb-6 bg-gradient-to-br from-gray-600 to-gray-950 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          TESTIMONIALS
        </h1>
        <div className="mt-8 overflow-hidden">
          <InfiniteMovingCards className="mb-6" items={items} direction="right" speed="normal" pauseOnHover={true} />
        
        </div>
      </div>
    </div>
  );
}

export default About;