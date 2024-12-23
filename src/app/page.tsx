import React from "react";
import Countdown from "@/components/Countdown";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <Countdown targetDate="2025-06-16T00:00:00" />
      {/* Hero Section */}
      <section className="bg-gray-50 text-gray-800 p-10 md:p-20">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <Image
            src="/images/MexicanTrainImage.png"
            alt="Mexican Train"
            width={600}
            height={400}
            className="rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="md:ml-8 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">
              Velkommen til Mexican Train Norge!
            </h1>
            <p className="text-xl mb-6">
              Oppdag gleden med Mexican Train! Vi har arrangert
              Norgesmesterskapet siden 2023. Neste NM er i 2025. Registreringen
              åpner 16. juni 2025!
            </p>
            <Link href="/regler">
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                Les mer om reglene
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Nyhetsseksjon */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Siste Nytt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Artikkel 1 */}
          <Link href="/nyheter/godjul" passHref>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-[400px] mb-4">
                <Image
                  src="/images/julenisse.png"
                  alt="Julehilsen"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                1. desember 2024
              </h3>
              <p className="text-lg text-gray-700">
                Vi ønsker alle våre spillere og entusiaster en riktig god jul og
                et godt nytt år!
              </p>
            </div>
          </Link>

          {/* Artikkel 2 */}
          <Link href="/nyheter/nm2024vinner" passHref>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-[400px] mb-4">
                <Image
                  src="/images/hannaHovlandBilde.png"
                  alt="Hanna Hovland, vinner av NM 2024"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                21. desember 2024
              </h3>
              <p className="text-lg text-gray-700">
                Vi gratulerer Hanna Hovland som vinner av NM 2024!
              </p>
            </div>
          </Link>

          {/* Artikkel 3 */}
          <Link href="/nyheter/nm2024" passHref>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
              <div className="relative w-full h-[400px] mb-4">
                <Image
                  src="/images/nm2024Logo.png"
                  alt="NM 2024 nærmer seg"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                29. oktober 2024
              </h3>
              <p className="text-lg text-gray-700">
                Nå nærmer NM 2024 i Mexican Train seg! Har du forberedt deg?
              </p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
