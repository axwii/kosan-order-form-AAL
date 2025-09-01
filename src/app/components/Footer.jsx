"use client";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-slate-900 text-white mt-10 text-center"
    >
      <figure className="flex justify-center my-2 p-2 bg-kosan-orange">
        <Image
          src={"/static/images/KosanGascenterLogoAlt.png"}
          width={125}
          height={125}
          alt="Kosan Gascenter Logo"
        />
      </figure>
      <div className="p-4">
        <p>
          <a
            href="https://maps.app.goo.gl/Kyi22y5DrJjCvSg87"
            target="_blank"
            className="hover:underline"
          >
            Gugvej 136, 9210 Aalborg SØ
          </a>
        </p>
        <p>
          <a
            href="mailto:morten.nielsen@kosangas.dk"
            className="hover:underline"
          >
            morten.nielsen@kosangas.dk
          </a>
        </p>
        <p>
          <a href="tel:+4598149966" className="hover:underline">
            98149966
          </a>
        </p>
      </div>
      <div className="flex justify-center space-x-4 pb-10">
        {/* <a
          href="https://www.linkedin.com/company/kosan-gascenter-k%C3%B8benhavn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-700 text-2xl" />
        </a> */}
        <a
          href="https://www.facebook.com/kosanaalborg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-blue-600 text-2xl" />
        </a>
        {/* <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 text-2xl" />
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
