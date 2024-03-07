import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 p-4 m-2 rounded-lg text-white">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mt-2">
            <Link
              href="https://linkedin.com/in/rumiani"
              target="_blank"
              rel="noopener noreferrer"
              className="gen_link"
              title="LinkedIn"
            >
              LinkedIn
            </Link>
            <Link
              href="https://twitter.com/rumianist"
              target="_blank"
              rel="noopener noreferrer"
              className="gen_link"
              title="X"
            >
              X
            </Link>
          </div>
          <p className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} YouTuMaz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
