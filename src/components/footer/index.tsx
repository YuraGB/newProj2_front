import { ReactNode } from "react";

const Footer = (): ReactNode => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full flex-column px-4">
      <nav className={"grid grid-cols-3 gap-4 mb-4 container m-auto"}>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">About Us</h3>
          <ul>
            <li>
              <a href="/about" className="hover:text-gray-400">
                Our Story
              </a>
            </li>
            <li>
              <a href="/team" className="hover:text-gray-400">
                Meet the Team
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Services</h3>
          <ul>
            <li>
              <a href="/services" className="hover:text-gray-400">
                What We Offer
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-gray-400">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Get in Touch
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-gray-400">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto text-center w-full">
        <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        <p className="text-sm">Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
