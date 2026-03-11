import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";

function Footer() {
  return (
    <>
      <div className="overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=23.5356507,77.839748&z=17&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <footer className="relative text-white">
        {/* Marble Background */}
        <div className="absolute inset-0 bg-[url('/assets/marble-bg.jpeg')] bg-cover bg-center"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Logo + About */}
            <div>
              <Link to="/">
                <img
                  src="/shiv-shakti-light.png"
                  alt="Shiv Shakti Granites"
                  className="h-40"
                />
              </Link>

              <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
                Shiv Shakti Granites (Rajasthan Wale) supplies high quality
                granite, marble, tiles and natural stones from Rajasthan and
                Madhya Pradesh for residential and commercial projects.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>

              <div className="mt-4 flex flex-col gap-2 text-neutral-300">
                <Link className="hover:text-primary transition" to="/">
                  Home
                </Link>

                <Link className="hover:text-primary transition" to="/about">
                  About Us
                </Link>

                <Link className="hover:text-primary transition" to="/gallery">
                  Gallery
                </Link>

                <Link className="hover:text-primary transition" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>

              <div className="mt-4 flex flex-col gap-4 text-neutral-300">
                <div className="flex gap-3 items-start">
                  <FaLocationDot className="text-primary text-xl mt-1" />
                  <p>
                    Shiv Shakti Granites
                    <br />
                    Sagar Road, Nai Galla Mandi Gate
                    <br />
                    Near Petrol Pump
                    <br />
                    Vidisha, Madhya Pradesh
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <MdCall className="text-primary text-xl" />
                  <Link to="tel:+918058938451">+91 80589 38451</Link>
                </div>

                <div className="flex gap-3 items-center">
                  <MdCall className="text-primary text-xl" />
                  <Link to="tel:+917891847811">+91 78918 47811</Link>
                </div>

                <div className="flex gap-3 items-center">
                  <IoIosMail className="text-primary text-xl" />
                  <Link to="mailto:info@shivshaktigranites.com">
                    info@shivshaktigranites.com
                  </Link>
                </div>

                <div className="flex gap-3 items-center">
                  <span className="text-primary font-semibold">GST:</span>
                  <span className="text-neutral-300">23DXTPS2539R1ZD</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>

              <p className="text-neutral-300 text-sm mt-4">
                Stay updated with our latest granite and marble collections.
              </p>

              <div className="flex gap-4 mt-6">
                <Link
                  to="#"
                  className="border border-neutral-600 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaInstagram />
                </Link>

                <Link
                  to="#"
                  className="border border-neutral-600 p-3 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-neutral-500 mt-8 pt-4 flex flex-col items-center justify-center">
            <Link to={"https://obetra.com"} target="_blank" className="flex flex-col items-center justify-center border mx-auto w-auto p-4 rounded-xl">

            <span>Designed & Developed by</span> <img src="https://obetra.com/logo/obetra%20logo.svg" alt="oneXcode" className="h-12 w-auto" srcset="" />
            </Link>
          </div>
          <div className="pt-6 text-center text-sm text-neutral-200">
            © {new Date().getFullYear()} Shiv Shakti Granites. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
