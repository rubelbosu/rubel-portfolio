import { Image, Link, Button } from "@nextui-org/react";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa6";
import "animate.css";

const AppHome = () => {
  return (
    <section className="flex flex-col md:flex-row lg:justify-center">
      <div className="lg:w-[40vw] lg:mt-[30vh] lg:ml-10 animate__animated animate__fadeInLeft m-5">
        <p className="lg:text-lg">Hello 🩺</p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "I'm Rubel Bosu",
            2000,
            "I'm a Physiotherapist",
            2000,
            "and a Sport's Therapist",
            2000,
          ]}
          speed={40}
          style={{ fontWeight: "bolder" }}
          repeat={Infinity}
          className="lg:text-4xl text-green-600"
        />
        <p className="text-lg text-left">
          I am working since 2018. I help people recover from injuries, improve
          their mobility, and enhance their performance. I have worked with
          clients from various backgrounds, including athletes, office workers,
          and elderly people. I am passionate about helping people achieve their
          health and fitness goals, and I use evidence-based methods and
          personalized plans to do so.
        </p>
        <a href="\assets\CV\RUBEL_BOSU_CV.pdf" download="RUBEL_BOSU_CV.pdf">
          <Button
            radius="sm"
            className="font-bold text-white text-lg mt-3 bg-green-600"
          >
            <FaDownload className="animate-download-bounce" /> Download CV
          </Button>
        </a>
        <div className="flex flex-row mt-3 gap-3">
          <Link
            className="transition-all ease-in-out hover:scale-125"
            href="https://www.linkedin.com/in/rubel-bosu-4684701a0/"
            target="_blank"
            color="foreground"
          >
            <IoLogoLinkedin size={30} />
          </Link>
          <Link
            className="transition-all ease-in-out hover:scale-125"
            href="https://www.instagram.com/rubelbosu"
            target="_blank"
            color="foreground"
          >
            <IoLogoInstagram size={30} />
          </Link>
          <Link
            className="transition-all ease-in-out hover:scale-125"
            href="https://www.facebook.com/profile.php?id=100091627804025&mibextid=ZbWKwL"
            target="_blank"
            color="foreground"
          >
            <FaSquareFacebook size={30} />
          </Link>
        </div>
      </div>
      <div className="">
        <Image
          isZoomed
          isBlurred
          className="lg:h-[800px] lg:w-[750px] p-2"
          alt="Rubel Bosu"
          src="\assets\images\rubel_avatar.png"
        />
      </div>
    </section>
  );
};

export default AppHome;
