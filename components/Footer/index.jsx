import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <Image
            src={"/icons/MainLogo.svg"}
            width={40}
            height={40}
            alt="logo"
          ></Image>
          <div className="font-medium text-[16px]">Deployment Hero</div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-24 xl:gap-[129px] justify-between">
          <div className="flex flex-col gap-[22px] lg:order-1 lg:min-w-[380px]">
            <div className="flex gap-4 items-center">
              <Image
                src={"/icons/icon_newsletter.svg"}
                width={26}
                height={20}
                alt="newsletter"
              ></Image>
              <p className="font-medium text-[18px]">Join our newsletter</p>
              <Image
                src={"/icons/MainLogo_white.svg"}
                width={40}
                height={40}
                alt="logo"
              ></Image>
            </div>
            <div className="w-full flex flex-col gap-4 sm:relative">
              <input
                className="form-control"
                placeholder="letuscontactyou@email.com"
                type="text"
              />
              <button className="btn btn-blue text-white text-[12px] h-[50px] w-full sm:w-fit sm:absolute sm:top-0 sm:right-0">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            <div className="flex flex-col min-w-[150px] gap-1">
              <p className="font-medium leading-[30px]">Product</p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Features
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Integration
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Pricing
              </p>
            </div>
            <div className="flex flex-col min-w-[150px] gap-1">
              <p className="font-medium leading-[30px]">Services</p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Integration
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Customizations
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Reports
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">Forms</p>
            </div>
            <div className="flex flex-col min-w-[150px] gap-1">
              <p className="font-medium leading-[30px]">Support</p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                About us
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Testamonials
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Contact
              </p>
            </div>
            <div className="flex flex-col min-w-[150px] gap-1">
              <p className="font-medium leading-[30px]">Legals</p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Terms & Conditions
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Privacy Policy
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Data Policy
              </p>
              <p className="text-gray-400 text-[14px] leading-[34px]">
                Security Policy
              </p>
            </div>
          </div>
        </div>
        <hr className="border-[#383d3a]" />
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div className="text-sm text-[#b1b5c3] p-2">
            Copyright© 2023 Deployment Hero
          </div>
          <div className="flex gap-[18px]">
            <Link href="/">
              <Image
                src={"/icons/icon_facebook.svg"}
                width={38}
                height={38}
                alt="facebook"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src={"/icons/icon_twitter.svg"}
                width={38}
                height={38}
                alt="twitter"
              ></Image>
            </Link>
            <Link href="/">
              <Image
                src={"/icons/icon_linkedin.svg"}
                width={38}
                height={38}
                alt="linkedin"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
