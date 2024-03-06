import Link from "next/link";
import React from "react";
import contactPicture from "@/public/assets/images/contact-pic/contact-pic.png";
import ImgHoverZoom from "../components/imgHoverZoom/imgHoverZoom";

export default function Contact() {
  return (
    <div>
      <div className="w-full justify-center h-auto p-8 flex flex-row">
        <p className="mr-4 text-lg">You can contact us here:</p>
        <Link
          href="mailto:contact@maziar9170@gmail.com"
          className="text-blue-600 font-bold underline"
        >
          Email
        </Link>
      </div>
      <div className="mb-8 text-center mx-auto w-4/5 md:w-3/5">
        <ImgHoverZoom src={contactPicture} alt="Contact us picture" />
      </div>
    </div>
  );
}
