import Image from "next/image";
import Link from "next/link";
import React from "react";
import contactPicture from "@/public/assets/contact-pic/contact-pic.png";
export default function Contact() {
  return (
    <div>
      <div className="w-full h-auto p-8 flex flex-row">
        <p className="mr-4 text-lg">You can contact us here:</p>
        <Link
          href="mailto:contact@maziar9170@gmail.com"
          className="text-blue-600 font-bold underline"
        >
          Email
        </Link>
      </div>
      <Image
        src={contactPicture}
        width={200}
        alt="Contact us picture"
        className="text-center mx-auto w-4/5"
      />
    </div>
  );
}
