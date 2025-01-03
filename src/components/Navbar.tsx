import Link from "next/link";
import Image from "next/image";  // Import Image component
import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between xs:flex-row py-2 border-b-2 border-accentDarkSecondary sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
      <nav className="flex md:flex md:items-center md:justify-center md:gap-x-24 font-bold uppercase">
        <Link href={"/"} className="flex items-center text-3xl text-dark dark:text-light">
          <Image 
            src="/gametime.png" // Path to the logo image
            alt="GameTime Logo"
            width={30} // Adjust the width to match the text size
            height={30} // Adjust the height accordingly
            className="mr-2" // Adds margin-right to space out the logo and text
          />
          GameTime <span className="text-3xl text-accentDarkSecondary">Insights</span>
        </Link>
        {/* <Link href={"/blogs"} className="bg-accentDarkSecondary px-4 py-1 rounded-lg text-dark ">Blogs</Link> */}
      </nav>
      <SocialMedia />
      <ThemeToggle />
    </header>
  );
}
