import Image from "next/image";
import React from "react";

// render hero section
export default function HeroSection() {
  return (
    <section className="relative flex flex-col  md:flex-row items-center justify-center gap-4 md:gap-20 p-4 sm:px-6 lg:px-8 mb-10 md:mb-20">
      <div className="w-full md:w-[60%] max-w-[720px]">
        <h4 className="text-primary font-semibold text-left text-sm sm:text-base">
          LOREM EPSUM
        </h4>
        <h1 className="text-2xl sm:text-4xl md:text-[64px] font-bold text-[#00C728] mb-4 text-left">
          Lorem ipsum dolor{' '}
          <span className="text-2xl sm:text-4xl md:text-[64px] text-white inline">
            sit amet, consectetur
          </span>
        </h1>
        <p className="text-white text-left text-sm sm:text-base max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
          Sit amet commodo nulla facilisi nullam vehicula.
          Arcu risus quis varius quam quisque id diam.
        </p>
      </div>
      <div className="w-full md:w-[40%] max-w-[422px]">
        <Image
          src="/images/hero.png"
          alt="Hero background"
          width={422}
          height={528}
          className="w-full h-auto mt-[-40px] md:mt-[-80px]"
          style={{ aspectRatio: "422/528" }}
          quality={85}
        />
      </div>
    </section>
  );
}