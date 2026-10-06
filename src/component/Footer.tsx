import React from "react";
import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 justify-between max-w-6xl mx-auto px-4 mt-20 ">
        <div>
          <img src={Logo} />
          <p className="mt-3 text-gray-500 text-sm">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex items-center gap-4 pt-2 mt-3 text-sm font-medium">
            <a href="https://github.com" target="#">
              GitHub
            </a>
            <a href="https://twitter.com" target="#">
              Twitter
            </a>
            <a href="https://linkedin.com" target="#">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-sm mb-3">PRODUCT</p>
          <p className="mb-1 text-sm text-gray-500">Home</p>
          <p className="mb-1 text-sm text-gray-500">Technologies</p>
          <p className="mb-1 text-sm text-gray-500 ">Projects</p>
        </div>

        <div>
          <p className="font-bold text-sm  mb-3">COMPANY</p>
          <p className="mb-1 text-sm text-gray-500">About</p>
          <p className="mb-1 text-sm text-gray-500">Contact</p>
          <p className="mb-1  text-sm text-gray-500 ">Careers</p>
        </div>

        <div>
          <p className="font-bold text-sm mb-3">LEGAL</p>
          <p className="mb-1  text-sm text-gray-500">Privacy Policy</p>
          <p className="mb-1  text-sm text-gray-500">Terms of Service</p>
        </div>
      </div>
      <hr className=" max-w-6xl mx-auto px-4 border-gray-200 mt-16" />
      <div className=" max-w-6xl mx-auto px-4 flex justify-between mt-10 mb-5 text-gray-500 text-sm">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-5">
            <a href="#" className="mb-1  text-sm text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="mb-1  text-sm text-gray-500">
              Terms
            </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
