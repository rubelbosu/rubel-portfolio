import React from "react";
import { Chip } from "@nextui-org/react";
import { FaBookOpen } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TbFileSettings } from "react-icons/tb";
import { HiMiniDocumentText } from "react-icons/hi2";
const Resume = () => {
  return (
    <section className=" m-5 lg:w-7/12 lg:m-auto mt-10 lg:mt-10 mb-20 lg:mb-20">
      <div className="flex gap-5 justify-between flex-col lg:flex-row">
        <div>
          <div className=" rounded-lg max-w-md">
            <div className="flex items-center mb-10">
              <div className="bg-green-600 p-2 rounded-full">
                <FaBookOpen className="text-3xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white ml-4 border-b-8 rounded-lg border-green-500 pb-1">
                EDUCATION
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                  <div className="h-full w-[2px] bg-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">Graduation</h3>
                  <p className="">Bachelor of Physiotherapy(BPT)</p>
                  <p className="">
                    Bundelkhand University, Jhansi, U.P. , India
                  </p>
                  <p className="text-green-400">2020 — 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                  <div className="h-full w-[2px] bg-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">Diploma</h3>
                  <p className="">
                    Diploma in Medical Technology (PHYSIOTHERAPY)
                  </p>
                  <p className="">
                    Institute of Health Technology (IHT), Barisal
                  </p>
                  <p className="text-green-400">2015 — 2018</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Secondary School Certificate Examination (10<sup>th</sup>)
                  </h3>
                  <p className="">
                    Saptopolli Zowaria High School, Zowaria, Tungipara
                  </p>
                  <p className="text-green-400">2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-10 lg:mt-0 rounded-lg max-w-md">
            <div className="flex items-center mb-10">
              <div className="bg-green-600 p-2 rounded-full">
                <FaUserDoctor className="text-3xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white ml-4 border-b-8 rounded-lg border-green-500 pb-1">
                EXPERIENCE
              </h2>
            </div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                  <div className="h-full w-[2px] bg-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Internship (BPT)
                  </h3>
                  <p className="text-black dark:text-white">
                  Physical Medicine  and Rehabilitation Department
                  </p>
                  <p className="text-black dark:text-white">
                    Fortis Hospital, Anadapur, Kolkata
                  </p>
                  <p className="text-green-400">Aug 2024 - Feb 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                  <div className="h-full w-[2px] bg-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Internship (Diploma)
                  </h3>
                  <p className="text-black dark:text-white">
                  Physical Medicine and Rehabilitation Department
                  </p>
                  <p className="text-black dark:text-white">
                    Shaheed Suhrawardy Medical College and Hospital, Dhaka,
                    Bangladesh
                  </p>
                  <p className="text-green-400">April 2017 - July 2017</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                  <div className="h-full w-[2px] bg-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Sarkar Physiotherapy and Rehabilitation Center, Barisal,
                    Bangladesh
                  </h3>
                  <p className="text-green-400">March 2018 - July 2020</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Sports Therapist
                  </h3>
                  <p className="text-black dark:text-white">
                    1 st State Level Madan Mohan Mishra League Cum Knockout T-20
                    Cricket Tournament by Jhansi DSA
                  </p>
                  <p className="text-green-400">15 Nov 2022 - 22 Nov 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center items-center mb-10">
          <div className="bg-green-600 p-2 rounded-full">
            <TbFileSettings className="text-3xl text-white" />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-white ml-4 border-b-8 rounded-lg border-green-500 pb-1">
            SKILLS
          </h2>
        </div>
        <div className="flex justify-center gap-5 flex-wrap ">
          <Chip
            className="text-white font-bold bg-green-600"
            size="lg"
            variant="solid"
          >
            Patient Assessment
          </Chip>
          <Chip
            className="text-white font-bold bg-green-600"
            size="lg"
            variant="solid"
          >
            Orthopedic Rehabilitation
          </Chip>
          <Chip
            className="text-white font-bold bg-green-600"
            size="lg"
            variant="solid"
          >
            Sport Rehabilitation
          </Chip>
          <Chip
            className="text-white font-bold bg-green-600"
            size="lg"
            variant="solid"
          >
            Typing
          </Chip>
          <Chip
            className="text-white font-bold bg-green-600"
            size="lg"
            variant="solid"
          >
            MS Word
          </Chip>
          <Chip
            className="text-white font-bold bg-green-600"
            size="lg"
            variant="solid"
          >
            MS Excel
          </Chip>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center items-center mb-10">
          <div className="bg-green-600 p-2 rounded-full">
            <HiMiniDocumentText className="text-3xl text-white" />
          </div>
          <h2 className="text-2xl font-bold text-black dark:text-white ml-4 border-b-8 rounded-lg border-green-500 pb-1">
            REFERENCES
          </h2>
        </div>
        <div className="flex justify-between flex-col lg:flex-row gap-5  ">
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
              <div className="h-full w-[2px] bg-gray-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-black dark:text-white">
                John Tilock Sarkar (BPT, MPH)
              </h3>
              <p className="text-black dark:text-white">
                Physiotherapist at Police Line Hospital, Barisal
              </p>
              <p className="text-black dark:text-white">Guest Lecturer IHT Barisal</p>
              <p className="text-black dark:text-white">
                MD Sarkar Physiotherapy and Rehabilitation Center, Barisal
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 h-4 w-4 rounded-full mb-2" />
              <div className="h-full w-[2px] bg-gray-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-black dark:text-white">
              Dr. Brajendra Singh Yadav

              </h3>
              <p className="text-black dark:text-white">
              Assistent Professor
              </p>
              <p className="text-black dark:text-white">
               Bundelkhand University, Jhansi
              </p>
              <p className="text-black dark:text-white">
              BPT, Bundelkhand University, Jhansi
              </p>
              <p className="text-black dark:text-white">
              MPT (Sports Physiotherapy) GNDU, Amritsar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
