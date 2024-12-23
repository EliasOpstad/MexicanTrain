"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-sky-100 p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={100} // Juster bredde etter behov
          height={100} // Juster høyde etter behov
          className="mr-4" // Mellomrom til høyre for logoen
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        />

        {/* Hamburgermeny knapp */}
        <button
          className="block md:hidden focus:outline-none text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-black">&#9776;</span>
        </button>

        {/* Horisontal meny for desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-mono text-black">
          <li className="md:hover:text-sky-600">
            <Link href="/">Hjem</Link>
          </li>
          <li className="md:hover:text-sky-600">
            <Link href="/turnering">Turneringer</Link>
          </li>
          <li className="md:hover:text-sky-600">
            <Link href="/regler">Regler</Link>
          </li>
          <li className="md:hover:text-sky-600">
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>

      {/* Vertikal meny for mobil */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-4 text-lg font-mono text-black text-center ">
          <li className="hover:text-sky-600">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Hjem
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link href="/turnering" onClick={() => setIsOpen(false)}>
              Turneringer
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link href="/regler" onClick={() => setIsOpen(false)}>
              Regler
            </Link>
          </li>
          <li className="hover:text-sky-600">
            <Link href="/kontakt" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
