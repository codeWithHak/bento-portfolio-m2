import { CardContainer} from "@/components/ui/3d-card"
import LampDemo from "@/components/ui/lamp"
import { ProjectCard } from "@/components/ui/cardProps";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default function Projects() {


  const projects = [

    {
      title: "SHOP.CO",
      description: "A Functional Ecommerce Store",
      imageSrc: "/images/ecom-project.png",
      tryLink: "https://shopco-nu.vercel.app"
    },
    {
      title: "CV Builder",
      description: "A CV Builder For Building Professional CV's.",
      imageSrc: "/images/resume-project.png",
      tryLink: "https://resume-builder-ten-blond.vercel.app/"
    },
    {
      title: "Matt Farley Clone",
      description: "A Clone Of Matt Farley's Portfolio",
      imageSrc: "/images/hero-avatar.svg",
      tryLink: "https://mattfarley-clone.vercel.app"
    },
    {
      title: "BLOGO !",
      description: "A Blogging Website - This Is Under Development!",
      imageSrc: "/images/blog-project.png",
      tryLink: "https://huzair.vercel.app"
    },
    {
      title: "Pana Cloud !",
      description: "Pana Cloud's Website Clone - This Is Under Development!",
      imageSrc: "/images/panacloud1-project.png",
      tryLink: "https://huzair.vercel.app"
    },
    {
      title: "NexWallet !",
      description: "A Crypto Wallet - This Is Under Development!",
      imageSrc: "/images/nexwallet-project.jpg",
      tryLink: "https://huzair.vercel.app"
    },

  ];

  return (
    <div className="bg-slate-950">
      <Link
          className="absolute top-[3%] left-[1%] z-50 hover:underline transition text-cyan-300"
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
    <LampDemo />
    <div className="flex flex-col justify-center items-center">
    <div className="flex flex-wrap justify-center gap-8">
      {projects.map((project, index) => (
        <CardContainer key={index} className="inter-var">
          <ProjectCard {...project} />
        </CardContainer>
      ))}
    </div>
      <Link href="https://www.linkedin.com/in/huzair-ahmed-khan"><Button variant={"secondary"} className="text-center mb-6">See More On LinkeIn</Button></Link>
    </div>
    </div>
  )
}
