import Link from "next/link";
import { BsApple } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo dan Hak Cipta */}
        <div className="flex items-center mb-4 md:mb-0">
          <BsApple size={36} className="mr-2" />
          <p className="text-lg">&copy; {new Date().getFullYear()} Apple. All rights reserved.</p>
        </div>

        {/* Tautan Navigasi */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link href="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/aboutUs" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/ourProduct" className="hover:text-gray-400">
            Our Products
          </Link>
          <Link href="/ourTeam" className="hover:text-gray-400">
            Our Team
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>

        {/* Media Sosial */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={20} className="hover:text-gray-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="hover:text-gray-400" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} className="hover:text-gray-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} className="hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
