import Link from "next/link";
import React from "react";
import FooterContactForm from "./FooterContactForm";
import FooterLearn from "./FooterLearn";
import SocialMedia from "./SocialMedia";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="  bg-slate-900 mt-12 py-4">
      <section className="flex flex-col md:flex-row">
        <FooterLearn />
        <FooterContactForm />
      </section>
      <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 flex flex-col md:grid md:grid-cols-[50%_87%_17%_16%]">
        {/* Left Column: Image Section */}
        <div className="flex justify-center items-center md:w-1/2">
          <Image
            className="h-auto w-auto max-w-full object-contain"
            src="/gametime.png"
            alt="Footer image"
            width={100} // Example width - adjust accordingly
            height={80} // Example height - adjust accordingly
          />
        </div>

        {/* Right Column: Three equally divided columns */}
        <div className="md:w-1/2 mt-4 md:mt-0 flex justify-between gap-4">
          {/* First Column */}
          <div className="w-1/3">
            <ul className="text-xs text-light space-y-2">
              <li><Link href="#">GameTime Insights</Link></li>
              <li><Link href="#">Staff</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Advertise</Link></li>
              <li><Link href="#">Crunchboard Jobs</Link></li>
              <li><Link href="#">Site Map</Link></li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="w-1/3">
            <ul className="text-xs text-light space-y-2">
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">RSS Terms of Use</Link></li>
              <li><Link href="#">Code of Conduct</Link></li>
              <li><Link href="#">About Our Ads</Link></li>
              <li><Link href="#">CES 2025</Link></li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="w-1/3">
            <ul className="text-xs text-light space-y-2 ml-8">
              <li><Link href="#">OpenAI o3 model</Link></li>
              <li><Link href="#">Onyx Motorbikes</Link></li>
              <li><Link href="#">Anthropic</Link></li>
              <li><Link href="#">Most Disruptive Startups</Link></li>
              <li><Link href="#">Tech Layoffs</Link></li>
              <li><Link href="#">ChatGPT</Link></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="px-6 xs:px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 flex justify-between items-center">
        <div className="text-right">
          <p className="text-xs text-light">
            © 2024 <span className="text-light font-bold">GmeTime</span>
            <span className="text-accentDarkPrimary font-bold"> Insights </span>
            All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
