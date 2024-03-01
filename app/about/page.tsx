"use client";
import Link from "next/link";
import React, { useState } from "react";
import ImgHoverZoom from "../components/imgHoverZoom/imgHoverZoom";
import aboutImage from "@/public/assets/images/about/about.jpeg";
export default function About() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <>
      <div className="flex flex-col lg:flex-row text-gray-800">
        <div className="my-8 w-full lg:w-1/2 md:w-4/5 mx-auto">
          <h1 className="text-gray-800 lg:text-5xl xl:text-5xl lg:tracking-tight text-3xl font-bold mb-4">
            About Us
          </h1>
          <div className="flex flex-row">
            <p className="text-lg md:text-xl mt-4 text-slate-600 max-w-2xl">
              Welcome to our YouTube Channel Analyzer platform! We&apos;re
              dedicated to helping creators like you analyze and optimize your
              YouTube channels for success
              <span className={`${seeMore ? "inline" : "hidden"}`}>
                Our platform provides comprehensive analytics and insights to
                help you understand your audience, track your channel&apos;s
                performance, and identify opportunities for growth. Our team of
                experts is passionate about data analysis and digital marketing.
                We&apos;re here to support you on your journey to YouTube
                success. Whether you&apos;re a seasoned YouTuber or just
                starting out, our platform offers the tools and resources you
                need to take your channel to the next level. Thank you for
                choosing our platform. We&apos;re excited to help you achieve
                your goals and unlock the full potential of your YouTube
                channel!{" "}
              </span>
            <button
              onClick={() => setSeeMore(!seeMore)}
              className={` text-blue-600 cursor-pointer`}
            >
              ...{seeMore?  'show less':'see more'}
            </button>
            </p>
          </div>
          <div className="mt-6 mx-auto flex justify-center">
            <Link href="/contact" className="btn_primary mx-auto">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-full max-w-96 lg:w-1/3 my-8 mx-auto">
          <ImgHoverZoom src={aboutImage} alt="Astronaut in the air" />
        </div>
      </div>
    </>
  );
}
