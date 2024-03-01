import Link from "next/link";
import React from "react";
import heroImage from "@/public/assets/images/homepage/hero.jpeg";
import Image from "next/image";
import ImgHoverZoom from "../imgHoverZoom/imgHoverZoom";
export default function Hero() {
  return (
    <div>
      <main className="text-gray-800 grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
        <div className="w-full h-full md:order-1 hidden sm:block ">
        <ImgHoverZoom src={heroImage} alt="Astronaut in the air"/>
        </div>
        <div>
          <h1 className="text-gray-800 text-3xl lg:text-6xl xl:text-5xl font-bold lg:tracking-tight">
            Empowering Creators to Analyze their Videos and channels
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            YouTuMaz empowers creators with powerful analytics tools and
            insights to optimize videos for maximum impact. Whether you&apos;re a
            YouTuber, content creator, or social media influencer, our platform
            provides everything you need to elevate your video content. From
            keyword analysis to personalized recommendations, VideoAnalyzer is
            your ultimate companion for channels optimization.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/login"
              rel="noopener"
              className="btn_secondary"
            >
              Get Started
            </Link>
            <Link
              rel="noopener"
              href="#"
              target="_blank"
              className="btn_primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
