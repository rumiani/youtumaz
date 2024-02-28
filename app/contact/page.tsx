import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div>
      <p>You can contact me here:</p>
      <Link
        href="mailto:contact@maziar9170@gmail.com"
        className="text-blue-600"
      >
        Email
      </Link>
    </div>
  );
}
