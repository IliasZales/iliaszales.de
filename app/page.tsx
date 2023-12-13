import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Image from "next/image";
import ilias from '../public/images/Ilias Zales_bild.jpg';
import {StackButton} from "@/app/components/stackButton";
import {StackButtonList} from "@/app/components/stackButtonList";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen lg:h-screen lg:overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl lg:text-8xl whitespace-nowrap bg-clip-text ">
        Ilias Zales
      </h1>
        <div> <Image className="duration-1000 rounded-2xl animate-title m-4" src={ilias} width={350}  height={700} alt={'ilias'}/></div>
        <h2 className="z-10 text-m text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-m md:text-2xl whitespace-nowrap bg-clip-text m-4">
            Fullstack Software-Engineer
        </h2>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <StackButtonList/>
    </div>
  );

}
