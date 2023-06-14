import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

import "./home.scss";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen">
      <Header />
      <section className="hero-section">
        <div className="wrapper">
          <div className="flex flex-col gap-8 p-4 mb-4 xl:mb-28">
            <h1>
              Power Up Your Business, with{" "}
              <span className="text-indigo-500">Deployed</span> Custom ERP
              Solutions
            </h1>
            <div className="hero-image lg:hidden">
              <Image
                src="/images/Hero.png"
                alt="hero"
                width={500}
                height={500}
              ></Image>
            </div>
            <p className="text-grey text-base">
              Supercharge your operations with Deployment Hero. We specialize in
              seamless integrations, tailored customizations, insightful
              reporting, and user-friendly forms, all designed to align with
              your unique business needs. Dive into our innovative Customization
              Library or experience the power of Deployment Hero Premium. Ready
              to take your ERP to the next level? Let's elevate your business
              together.
            </p>
            <button className="btn btn-blue w-[216px]">
              <span>Get started</span>
              <img src="/icons/DhLogo.svg" alt="" />
            </button>
          </div>
          <div className="hero-image hidden lg:block">
            <Image
              src="/images/Hero.png"
              alt="hero"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="wrapper">
          <div className="flex flex-col gap-4 items-start">
            <button className="btn btn-lightblue">Services</button>
            <h2>Mastering Business Potential with Custom ERP Solutions</h2>
            <p className="text-normal text-base">
              Deployment Hero specializes in the development of customizations
              and integrations for Mid-Tier ERP solutions.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div className="card">
              <div className="w-fit p-2 bg-indigo-50 rounded-lg">
                <Image
                  src={"/icons/icon_integrations.svg"}
                  width={32}
                  height={32}
                  alt="icon"
                ></Image>
              </div>
              <p className="font-medium text-lg text-normal mt-4">
                Integrations
              </p>
              <p className="text-sm text-grey line-clamp-6 my-2">
                At Deployment Hero, we understand the importance of seamless ERP
                integration. Our team of experts possesses deep knowledge across
                major ERP platforms, ensuring your systems communicate
                effectively, and your data is readily accessible across
                departments. We work with systems like Netsuite, Dynamics 365,
                Acumatica, Odoo, MYOB Advanced, Microsoft Business Central,
                SapB1, and Sage Innact. With our sophisticated integration
                strategies, you can break down silos, streamline workflows, and
                increase operational efficiency.
              </p>
              <Link
                href="/"
                className="font-poppins font-medium text-indigo-500 flex items-center gap-2 mt-4"
              >
                <span className="">Learn More</span>
                <Image
                  src={"/icons/ArrowRight.svg"}
                  width={24}
                  height={24}
                  alt="Right Arrow"
                ></Image>
              </Link>
            </div>
            <div className="card">
              <div className="w-fit p-2 bg-indigo-50 rounded-lg">
                <Image
                  src={"/icons/icon_customizations.svg"}
                  width={32}
                  height={32}
                  alt="icon"
                ></Image>
              </div>
              <p className="font-medium text-lg text-normal mt-4">
                Customizations
              </p>
              <p className="text-sm text-grey line-clamp-6 my-2">
                Every business is unique, and so are its needs. Our
                customization services aim to mold your ERP system to perfectly
                fit your business operations. Whether you need custom workflows,
                user interfaces, or functionalities, our team of developers can
                enhance your system to meet your specific requirements. With
                Deployment Hero, you get a solution that's tailor-made for your
                business, improving user adoption and return on investment.
              </p>
              <Link
                href="/"
                className="font-poppins font-medium text-indigo-500 flex items-center gap-2 mt-4"
              >
                <span className="">Learn More</span>
                <Image
                  src={"/icons/ArrowRight.svg"}
                  width={24}
                  height={24}
                  alt="Right Arrow"
                ></Image>
              </Link>
            </div>
            <div className="card">
              <div className="w-fit p-2 bg-indigo-50 rounded-lg">
                <Image
                  src={"/icons/icon_reporting.svg"}
                  width={32}
                  height={32}
                  alt="icon"
                ></Image>
              </div>
              <p className="font-medium text-lg text-normal mt-4">Reporting</p>
              <p className="text-sm text-grey line-clamp-6 my-2">
                Data drives decision-making, but raw data isn't enough; you need
                meaningful insights. Our team at Deployment Hero can leverage
                your ERP data to generate comprehensive, easy-to-understand
                reports. We can customize your reports to reflect KPIs that
                matter most to your business, ensuring you have the information
                you need at your fingertips. With our enhanced reporting
                capabilities, make data-driven decisions that drive business
                growth.
              </p>
              <Link
                href="/"
                className="font-poppins font-medium text-indigo-500 flex items-center gap-2 mt-4"
              >
                <span className="">Learn More</span>
                <Image
                  src={"/icons/ArrowRight.svg"}
                  width={24}
                  height={24}
                  alt="Right Arrow"
                ></Image>
              </Link>
            </div>
            <div className="card">
              <div className="w-fit p-2 bg-indigo-50 rounded-lg">
                <Image
                  src={"/icons/icon_forms.svg"}
                  width={32}
                  height={32}
                  alt="icon"
                ></Image>
              </div>
              <p className="font-medium text-lg text-normal mt-4">Forms</p>
              <p className="text-sm text-grey line-clamp-6 my-2">
                Forms are the backbone of data entry in ERP systems. However,
                generic forms may not capture all the data your business needs.
                Our form customization services ensure your ERP system collects
                data that's relevant to your business. We can add or remove
                fields, create dropdown lists, or even automate data entry where
                possible. With Deployment Hero, your forms become more efficient
                and user-friendly, enhancing data accuracy and productivity.
              </p>
              <Link
                href="/"
                className="font-poppins font-medium text-indigo-500 flex items-center gap-2 mt-4"
              >
                <span className="">Learn More</span>
                <Image
                  src={"/icons/ArrowRight.svg"}
                  width={24}
                  height={24}
                  alt="Right Arrow"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="integration-section">
        <div className="wrapper">
          <div className="flex flex-col justify-center items-start gap-10 md:gap-8 xl:gap-6 min-h-[630px]">
            <button className="btn btn-lightblue">Systems</button>
            <h2 className="">Integrations we support</h2>
            <div className="mobile-integrations after:content-['_']"></div>
            <div className="flex flex-col gap-8">
              <p className="text-grey">
                "Unlock the full potential of your business with our
                comprehensive ERP integration services. Deployment Hero excels
                in harmonizing systems like Netsuite, Dynamics 365, Acumatica,
                Odoo, MYOB Advanced, Microsoft Business Central, SapB1, and Sage
                Intacct.
              </p>
              <p className="text-grey">
                Our goal is to streamline your business operations by leveraging
                pre-existing customizations and solutions. Whether it's
                consolidating data, automating processes, or improving
                efficiency, we're here to help. Let's discuss your setup and
                discover together how we can optimize your ERP solution to
                achieve your business objectives."
              </p>
            </div>
            <button className="btn btn-blue w-[216px]">How can we help?</button>
          </div>
          <div className="desktop-integrations after:content-['_']">
            <Image
              src={"/images/Connections.png"}
              width={546}
              height={554}
              alt="connections"
            ></Image>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="wrapper">
          <div className="grow-0 shrink-0">
            <Image
              className="mx-auto sm:w-[360px] lg:w-[420px] xl:w-[545px]"
              src={"/images/About.png"}
              width={545}
              height={588}
              alt="about"
            ></Image>
          </div>
          <div className="flex flex-col gap-8">
            <h2>About us</h2>
            <p className="text-grey">
              Deployment Hero, is your comprehensive ERP solutions partner,
              specializing in the customization and integration of Mid-Tier ERP
              systems, driving business operations with technology solutions
              that truly work. Our services include Integrations,
              Customizations, Reporting, and Forms across ERP platforms like
              Netsuite, Dynamics 365, Acumatica and more...
            </p>
            <p className="text-grey">
              Through our innovative client service portal, we guarantee quotes
              within 2 hours, not 2 days streamlining project initiation with
              automated acceptance criteria, upload features, and an easy-to-use
              project request system keeping you in the updated of your project
              and the deadlines every step of the way.
            </p>
            <button className="btn btn-blue w-[216px]">Get in touch</button>
          </div>
        </div>
      </section>
      <section className="choose-section after:content-['_']">
        <div className="wrapper">
          <div className="flex flex-col gap-8 px-4 items-start lg:px-0 lg:max-w-[320px] xl:max-w-[500px]">
            <button className="btn btn-lightblue">Services</button>
            <h2>Why chose us?</h2>
            <p className="text-grey">
              When you choose Deployment Hero, you're choosing more than an ERP
              customization and integration service provider. You're choosing a
              dedicated partner committed to delivering unmatched value. Here's
              why:
            </p>
            <p className="text-grey">
              With Deployment Hero, you're not just choosing a service—you're
              choosing a partner dedicated to empowering your business with
              bespoke, efficient, and effective ERP solutions.
            </p>
            <div className="hidden w-full lg:flex lg:flex-col lg:gap-4 xl:relative">
              <input
                className="form-control"
                placeholder="letuscontactyou@email.com"
                type="text"
              />
              <button className="btn btn-blue h-[50px] md:w-full xl:w-fit xl:absolute xl:top-0 xl:right-0">
                Contact me
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="flex flex-col p-2 gap-4 lg:w-1/2">
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex justify-center items-center">
                      <Image
                        src={"/icons/document-arrow-down.svg"}
                        width={24}
                        height={24}
                        alt="arrow-down"
                      ></Image>
                    </div>
                    <h3>Fast Effecient Service</h3>
                  </div>
                  <p className="pl-12 text-grey text-sm">
                    Get quotes within 2 hours, start your project immediately
                    after paying your deposit, and watch your project unfold in
                    real time.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex justify-center items-center">
                      <Image
                        src={"/icons/document-arrow-down.svg"}
                        width={24}
                        height={24}
                        alt="arrow-down"
                      ></Image>
                    </div>
                    <h3>Customization Library</h3>
                  </div>
                  <p className="pl-12 text-grey text-sm">
                    Explore pre-built customizations ready for immediate use.
                    Plus, benefit from a revenue share if we list your project
                    in our library.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex justify-center items-center">
                      <Image
                        src={"/icons/document-arrow-down.svg"}
                        width={24}
                        height={24}
                        alt="arrow-down"
                      ></Image>
                    </div>
                    <h3>Commitment to Your Success</h3>
                  </div>
                  <p className="pl-12 text-grey text-sm">
                    From our dedicated project success managers to our
                    attractive offers for new signups, we're committed to
                    delivering value at every step
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col p-2 gap-4 lg:w-1/2">
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex justify-center items-center">
                      <Image
                        src={"/icons/document-arrow-down.svg"}
                        width={24}
                        height={24}
                        alt="arrow-down"
                      ></Image>
                    </div>
                    <h3>Transparent, Fair Pricing</h3>
                  </div>
                  <p className="pl-12 text-grey text-sm">
                    With our fixed pricing model and 25% deposit system, you
                    know exactly what you're paying for.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex justify-center items-center">
                      <Image
                        src={"/icons/document-arrow-down.svg"}
                        width={24}
                        height={24}
                        alt="arrow-down"
                      ></Image>
                    </div>
                    <h3>Revenue Share Options</h3>
                  </div>
                  <p className="pl-12 text-grey text-sm">
                    Our unique business model allows you to opt for a revenue
                    share, turning your project expenses into potential income.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-indigo-50 rounded-lg flex justify-center items-center">
                      <Image
                        src={"/icons/document-arrow-down.svg"}
                        width={24}
                        height={24}
                        alt="arrow-down"
                      ></Image>
                    </div>
                    <h3>Intuitive Client Service Portal</h3>
                  </div>
                  <p className="pl-12 text-grey text-sm">
                    Easy project initiation and automated acceptance criteria
                    upload features ensure a hassle-free experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full py-6 flex flex-col gap-4 sm:px-6 md:px-12 lg:hidden">
              <input
                className="form-control"
                placeholder="letuscontactyou@email.com"
                type="text"
              />
              <button className="btn btn-blue h-[50px] w-full">
                Contact me
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="library-section after:content-['_']">
        <div className="wrapper">
          <div className="flex flex-col gap-6 items-start lg:order-1">
            <h2>Customization Library</h2>
            <p className="text-grey">
              Discover our Customization Library, a trove of pre-built ERP
              solutions ready for instant deployment. Skip the wait and
              development hassle with our plug-and-play solutions tailored for
              your needs.
            </p>
            <p className="text-grey">
              But there's more - our library is also a collaborative space.
              Share your customization project with us for a chance to join our
              revenue share program. Find solutions, contribute, and potentially
              profit - all with Deployment Hero's Customization Library. Explore
              today!
            </p>
            <button className="btn btn-blue w-[216px] lg:mt-[54px]">
              Earn more
            </button>
          </div>
          <div className="card-container">
            <div className="card">
              <Image
                className="shrink-0"
                src={"/images/btn-view.svg"}
                width={100}
                height={100}
                alt="button"
              ></Image>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-[18px] leading-[27px]">View</p>
                <p className="text-grey text-[14px] leading-[21px]">
                  xcepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="card">
              <Image
                className="shrink-0"
                src={"/images/btn-pick.svg"}
                width={100}
                height={100}
                alt="button"
              ></Image>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-[18px] leading-[27px]">Pick</p>
                <p className="text-grey text-[14px] leading-[21px]">
                  xcepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className="card">
              <Image
                className="shrink-0"
                src={"/images/btn-deploy.svg"}
                width={100}
                height={100}
                alt="button"
              ></Image>
              <div className="flex flex-col gap-2">
                <p className="font-medium text-[18px] leading-[27px]">Deploy</p>
                <p className="text-grey text-[14px] leading-[21px]">
                  xcepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="works-section after:content-['_']">
        <div className="wrapper">
          <div className="flex flex-col grow gap-10 lg:gap-6">
            <h2>The way it works</h2>
            <div className="lg:hidden flex justify-center">
              <Image
                className="sm:max-w-[400px]"
                src={"/images/Works.png"}
                width={589}
                height={501}
                alt="the way it works"
              ></Image>
            </div>
            <div className="card-container">
              <div className="card">
                <div className="card-number">1</div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[16px] leading-[12px]">
                    Submit your request
                  </p>
                  <p className="text-grey text-[14px] leading-[26px]">
                    Through our innovative client service portal, we guarantee
                    quotes within 2 hours, not 2 days.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-number">2</div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[16px] leading-[12px]">
                    Receive quote
                  </p>
                  <p className="text-grey text-[14px] leading-[26px]">
                    Review your project quote sent back through the service
                    portal.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-number">3</div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[16px] leading-[12px]">
                    Quote confirmation
                  </p>
                  <p className="text-grey text-[14px] leading-[26px]">
                    Confirm your quote and apply payment, against the quote.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-number">4</div>
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[16px] leading-[12px]">
                    Project begin
                  </p>
                  <p className="text-grey text-[14px] leading-[26px]">
                    Your project starts immediately after paying your deposit,
                    and watch your project unfold in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <Image
              src={"/images/Works.png"}
              width={589}
              height={501}
              alt="the way it works"
            ></Image>
          </div>
        </div>
      </section>
      <section className="client-section">
        <div className="wrapper">
          <div className="flex-none">
            <Image
              className="max-w-[226px] md:max-w-[280px] lg:max-w-[320px]"
              src={"/images/Client.png"}
              width={320}
              height={520}
              alt="Client"
            ></Image>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="leading-[54px] p-2 border-b border-[1px_#d0d4da_solid]">
              What Our <span className="text-indigo-500">Clients</span> Say
            </h2>
            <div className="flex py-6 lg:hidden">
              <div className="flex items-center gap-2 grow">
                <div className="indicator active"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
                <div className="indicator"></div>
              </div>
              <div className="flex grow-0 gap-6">
                <Image
                  src={"/icons/left_arrow.svg"}
                  width={61}
                  height={61}
                  alt="left"
                ></Image>
                <Image
                  src={"/icons/right_arrow.svg"}
                  width={61}
                  height={61}
                  alt="right"
                ></Image>
              </div>
            </div>
            <p className="lg:hidden font-medium text-[18px] leading-[40px]">
              &mdash; Jane Smith COO, XYZ Industries
            </p>
            <p className="text-grey p-2 mb-8">
              "With Deployment Hero's expertise, we transformed our siloed
              operations into a streamlined, efficient system. They guided us
              seamlessly through the ERP implementation process, tailoring a
              solution to our unique needs. Now, our data is integrated,
              enhancing decision-making and operational efficiency. Their
              training and support have been exceptional, ensuring a smooth
              transition and ongoing success. I wholeheartedly recommend
              Deployment Hero - they're not just a vendor, but a true partner in
              business transformation."
            </p>
            <div className="flex items-center">
              <div className="flex flex-col grow h-full justify-between">
                <p className="hidden lg:block font-medium text-[18px] leading-[40px]">
                  &mdash; Jane Smith COO, XYZ Industries
                </p>
                <div className="flex gap-2">
                  <div className="indicator active"></div>
                  <div className="indicator"></div>
                  <div className="indicator"></div>
                  <div className="indicator"></div>
                  <div className="indicator"></div>
                </div>
              </div>
              <div className="flex grow-0 gap-6">
                <Image
                  src={"/icons/left_arrow.svg"}
                  width={61}
                  height={61}
                  alt="left"
                ></Image>
                <Image
                  src={"/icons/right_arrow.svg"}
                  width={61}
                  height={61}
                  alt="right"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="price-section before:content-['_'] after:content-['_']">
        <div className="wrapper">
          <div className="p-2 flex flex-col gap-6">
            <h2 className="text-center">All, for the price of Launch</h2>
            <p className="text-grey text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className="px-4 lg:px-0 grid lg:grid-cols-2 gap-12 max-w-[848px]">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-start gap-6 py-8 px-10 bg-white rounded-[20px] border border-gray-200 shadow-custom">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[18px] leading-[26px]">Free</p>
                  <p className="font-medium text-grey text-[14px] leading-[26px]">
                    Free account with limited features
                  </p>
                </div>
                <p className="font-medium text-[24px] leading-[26px]">
                  Starter
                </p>
                <button className="py-[10px] w-full btn btn-lightblue text-indigo-500 text-sm">
                  Register
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Project Service Portal Access
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Project by project pricing
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    -
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]"></p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-start gap-6 py-8 px-10 bg-white rounded-[20px] border border-indigo-500 shadow-custom">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[18px] leading-[26px]">
                    $5000 USD/mo
                  </p>
                  <p className="font-medium text-grey text-[14px] leading-[26px]">
                    Take advantage of all the oportunities
                  </p>
                </div>
                <p className="font-medium text-[24px] leading-[26px]">
                  Premium
                </p>
                <button className="py-[10px] w-full btn btn-blue text-white text-sm">
                  Register
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    15% Revenue share of customised projects used
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Dedicated testing sandbox for verifying the customizations
                    on any project
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Dedicated success manager
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Two scoping sessions per month
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Two priority projects per month
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Unlimited use of automatic Acceptance Criteria generation by
                    ChatGPT
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Invitation to a Microsoft Teams channel for direct
                    communication
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Option to invite multiple users to the platform to post
                    projects
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Project Service Portal Access
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    No Deposits required
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Image
                    src={"/icons/icon_tick.svg"}
                    width={20}
                    height={20}
                    alt="tick"
                  ></Image>
                  <p className="text-grey font-outfit text-[16px] leading-[26px]">
                    Access to deployment hero deployment management software to
                    automate the release and deployments of your customisations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section before:content-['_']">
        <div className="wrapper">
          <div className="flex flex-col gap-8 py-8 px-4 xl:px-[88px]">
            <div className="flex gap-8 items-center">
              <h2 className="text-[32px] leading-[39px]">Contact us</h2>
              <Image
                className="w-8 h-8"
                src={"icons/MainLogo.svg"}
                width={40}
                height={40}
                alt="logo"
              ></Image>
            </div>
            <p className="text-grey">
              We'd <span className="font-bold">love</span> to hear from you!
              Reach out to us using the contact form below for a quote or to
              schedule a consultation. Whether you're seeking to enhance your
              current ERP system with seamless integrations, customizations,
              reporting or forms, or you're simply curious about our unique
              Customization Library, our team is ready to assist.
            </p>
            <p className="text-grey">
              At Deployment Hero, we believe in creating ERP solutions that
              truly fit your business. Let's start the conversation today and
              put your business on the path to operational excellence.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
