
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" bg-gray-800 p-4 m-2 rounded-lg ">
      <div className={` flex w-full p-2 sm:p-0 rounded-lg flex-col justify-between items-center text-center `}>
        <ul className="flex flex-row w-full mx-auto max-w-96 justify-around">
          <li className='mt-4 sm:mt-0'>
            <Link href="/" className="text-white hover:text-gray-400">
              LinkedIn
            </Link>
          </li>
          <li className='mt-4 sm:mt-0'>
            <Link href="/about" className="text-white hover:text-gray-400">
              YouTube
            </Link>
          </li>
          <li className='mt-4 sm:mt-0'>
            <Link href="/contact" className="text-white hover:text-gray-400">
              Twitter
            </Link>
          </li>
        </ul>
        <div className='my-2 text-gray-500'>Created by Maz ©  2024</div>
      </div>
    </footer>
  );
};

export default Footer;
