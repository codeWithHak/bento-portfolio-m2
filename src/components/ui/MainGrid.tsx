import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedText  from "@/components/ui/AnimatedText";
import Link from "next/link";

export default function MainGrid() {
  return (
    <div className="w-[90%] mx-auto p-2">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 md:h-[97vh] gap-6 ">
        <div className="bg-goldenYellow text-darkBrown rounded-xl p-4 md:col-span-3 md:row-span-4 font-sundry font-bold text-4xl animate-from-top delay-100">
          <div className="flex flex-row md:flex-col xl:flex-row justify-center items-center">
            <p>Heyyy</p>
            <Image
              src="/images/hand-wave.svg"
              alt="resume"
              height={180}
              width={180}
              className="animate-wave w-[9rem] 2xl:w-[12rem]"
            />
          </div>
        </div>

        <div className="inline-flex items-center justify-center bg-blue rounded-xl p-4 md:col-span-3 md:row-span-2 animate-from-bottom delay-200">
          <Link href='/contact'>
              <Button className="text-darkBrown text-3xl md:text-xl lg:text-2xl xl:text-3xl font-sundry bg-cream rounded-full py-6 px-9 md:px-3 lg:px-7 xl:px-9 hover:text-cream hover:bg-darkBrown">
                Contact Me <span className="animate-move-arrow">➔</span>
              </Button>
          </Link>
        </div>

        <div className=" font-bold bg-darkBrown rounded-xl p-4 md:col-span-6 md:row-span-6 animate-from-left ">
          <Link href="/projects"><h2 className="text-center text-5xl text-cream pb-5">PROJECTS</h2></Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 items-center justify-center">
            <div className="flex flex-col bg-cream text-darkBrown items-center rounded-xl p-2 gap-2">
              <Image
                src="/images/ecom-project.png"
                alt="ecommerce"
                height={120}
                width={120}
                className="md:w-[8.5rem]"
              ></Image>
              <h2 className="text-2xl font-sundry font-bold pt-1">SHOP.CO</h2>
              <Button
                variant={"link"}
                size={"sm"}
                className="font-sundry text-center text-sm text-darkBrown bg-goldenYellow rounded-full animate-scale-bounce-slow delay-100"
              >
               <Link href="https://shopco-nu.vercel.app/" target="_blank">Visit Now</Link>
              </Button>
            </div>
            <div className="hidden lg:flex flex-col bg-cream text-darkBrown  items-center rounded-xl p-2 gap-2">
              <Image
                src="/images/resume-project.png"
                alt="ecommerce"
                height={120}
                width={120}
                className="md:w-[8.5rem]"
              ></Image>
              <h2 className="text-2xl font-sundry font-bold pt-1">FIRST CV</h2>
              <Button
                variant={"link"}
                size={"sm"}
                className="font-sundry text-center text-sm text-darkBrown bg-goldenYellow rounded-full animate-scale-bounce-slow delay-300"
              >
               <Link href="https://resume-builder-ten-blond.vercel.app/" target="_blank"> Visit Now</Link>
              </Button>
            </div>
            <div className="hidden xl:flex flex-col bg-cream text-darkBrown items-center rounded-xl p-2 gap-2">
              <Image
                src="/images/hero-avatar.svg"
                alt="ecommerce"
                height={120}
                width={120}
                className="2xl:w-[7.7rem]"
              ></Image>
              <h2 className="text-2xl font-sundry font-bold pt-1">MATT</h2>
              <Button
                variant={"link"}
                size={"sm"}
                className="font-sundry text-center text-sm text-darkBrown bg-goldenYellow rounded-full animate-scale-bounce-slow delay-800"
              >
               <Link href="https://mattfarley-clone.vercel.app/" target="_blank">Visit Now</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col  items-center  bg-orange rounded-xl p-4 md:col-span-3 md:row-span-4 animate-from-right delay-100">
          <h2 className="text-darkBrown text-[2rem] md:text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem]  md:leading-7 xl:leading-10 font-sundry font-bold text-center uppercase">
            I will boost your sales!
          </h2>
          <Image
            src="/images/flying-coin.gif"
            alt="ecommerce"
            height={120}
            width={120}
            className="w-[6rem] xl:w-[8rem]"
          ></Image>
        </div>
        <div className="flex justify-center items-center bg-pink rounded-xl p-4 md:col-span-3 md:row-span-2 animate-from-center delay-100">
          <Link href='/about'>
              <Button className="text-cream text-3xl md:text-lg lg:text-xl xl:text-3xl font-sundry bg-darkBrown rounded-full py-6 px-9 md:px-3 lg:px-7 xl:px-9 hover:text-darkBrown hover:bg-cream ">
                About Me<span className="animate-move-arrow">➔</span>
              </Button>
          </Link>
        </div>

        <div className="flex justify-center items-center bg-darkBrown font-sundry font-bold text-4xl xl:text-[3.5rem] leading-tight uppercase text-cream rounded-xl p-4 md:col-span-3 md:row-span-6 animate-from-top ">
        <AnimatedText/>
        </div>

        <div className="transfrom flex text-center justify-center items-center bg-green rounded-xl md:col-span-6 md:row-span-6 animate-from-bottom ">
          <h2 className="py-3 sm:py-0 max-w-[17rem] md:max-w-[22rem] lg:max-w-[35rem] xl:max-w-[34rem] 2xl:max-w-[38rem] tracking-tight uppercase text-4xl md:text-5xl lg:text-6xl  2xl:text-[5rem] text-veryDarkGreen  font-bold  font-sundry">
            I de
            <span className="inline-block  animate-scale-bounce text-cream delay-800">
              v
            </span>
            elop web
            <span className="inline-block   animate-scale-bounce text-cream delay-100">
              s
            </span>
            it
            <span className="inline-block   animate-scale-bounce text-cream delay-200">
              e
            </span>
            s{" "}
            <span className="inline-block   animate-scale-bounce text-cream delay-300">
              f
            </span>
            or b
            <span className="inline-block   animate-scale-bounce text-cream delay-400">
              u
            </span>
            sine
            <span className="inline-block   animate-scale-bounce text-cream delay-600">
              s
            </span>
            se
            <span className="inline-block   animate-scale-bounce text-cream delay-900">
              s
            </span>{" "}
          </h2>
        </div>

        <div className="flex flex-col uppercase justify-center items-center bg-blue text-cream text-5xl md:text-4xl lg:text-5xl xl:text-7xl font-bold rounded-xl p-4 md:col-span-3 md:row-span-6 animate-from-right delay-200 ">
        <a href="/images/HuzairCV.pdf" download >
          <div className="flex justify-center items-center">
            <h2>My</h2>
            <Image
              src="/images/resume.gif"
              alt="resume"
              width={120}
              height={120}
              className="w-[5rem] lg:w-[7.5rem]"
            ></Image>
          </div>
          <h2>Resume</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

