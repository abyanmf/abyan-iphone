import Link from "next/link";
import { BsApple } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <BsApple size={32} className="text-black" />
          <Link href="/" className="text-lg md:text-2xl pr-5 font-bold text-black">
            iPhone
          </Link>
        </div>
        <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4">
          <Link href="/home" className="text-sm md:text-lg font-medium hover:text-gray-500">
            Home
          </Link>
          <Link href="/aboutUs" className="text-sm md:text-lg font-medium hover:text-gray-500">
            About Us
          </Link>
          <Link href="/ourProduct" className="text-sm md:text-lg font-medium hover:text-gray-500">
            Our Product
          </Link>
          <Link href="/ourTeam" className="text-sm md:text-lg font-medium hover:text-gray-500">
            Our Team
          </Link>
          <Link href="/contact" className="text-sm md:text-lg font-medium hover:text-gray-500">
            Contact
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
