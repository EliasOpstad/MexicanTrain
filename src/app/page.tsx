import React from "react";
import Countdown from "@/components/Countdown";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Countdown targetDate="2025-06-16T00:00:00" />
      <section className="bg-white text-white p-10 flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <Image
          src="/images/MexicanTrainImage.png"
          alt="Mexican Train"
          width={600} // Øker bredde for desktop
          height={400} // Justerer høyde proporsjonalt
          className="rounded-lg shadow-lg mb-6 md:mb-0" // Legger til skygge og avrunding
        />
        <div className="md:ml-8 text-center md:text-left">
          <h1 className="text-5xl font-bold text-black mb-4">
            Mexican Train Norge
          </h1>
          <p className="text-xl text-black">
            Mexican Train for alle! Vi har arrangert NM i Mexican Train siden
            2023. Bli med og delta i 2025! Dato: Registreringen åpner 16. juni
            2025.
          </p>
        </div>
      </section>

      {/* Nyhetsseksjon */}
      <section className="p-10 bg-blue-900">
        <h2 className="text-3xl font-bold text-white mb-6">Siste Nytt</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Artikkel 1: God jul */}
          <div className="bg-red-600 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-96 mb-4">
              <Image
                src="/images/julenisse.png" // Sett inn riktig julebilde
                alt="Julehilsen"
                layout="fill"
                objectFit="cover"
                objectPosition="top" // Justerer bildet slik at toppen vises
                className="rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              24. desember 2024
            </h3>
            <p className="text-lg text-white">
              God jul fra oss i Mexican Train Norge!
            </p>
          </div>

          {/* Artikkel 2: NM 2024 Vinner */}
          <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-96 mb-4">
              <Image
                src="/images/hannaHovlandBilde.png"
                alt="Hanna Hovland, vinner av NM 2024"
                layout="fill"
                objectFit="cover"
                objectPosition="center top" // Justerer fokuset til ansiktet
                className="rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              21. desember 2024
            </h3>
            <p className="text-lg text-white">
              Vi gratulerer Hanna Hovland som vinner av NM 2024!
            </p>
          </div>

          {/* Artikkel 3: Nyttig informasjon */}
          <div className="bg-green-400 p-6 rounded-lg shadow-lg">
            <div className="relative w-full h-70 mb-4">
              <Image
                src="/images/information.png" // Eksempelbilde
                alt="Påmelding til NM 2025"
                layout="fill"
                objectFit="cover"
                objectPosition="top" // Justerer fokuset
                className="rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              19. desember 2024
            </h3>
            <p className="text-lg text-black">
              Påmelding til NM 2025 er nå åpen!
            </p>
          </div>
        </div>
      </section>

      {/* Gratulasjonseksjon */}
      <section className="text-center p-10 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">
          Gratulerer til Vinneren av NM 2024!
        </h1>
        <p className="mb-6">
          Vi gratulerer Hanna Hovland med førsteplassen i Norgesmesterskapet i
          Mexican Train 2024!
        </p>
        <Image
          src="/images/hannaHovlandBilde.png"
          alt="Hanna Hovland vinner NM 2024"
          width={500}
          height={300}
          className="rounded-lg shadow-lg mx-auto"
        />
        <p className="mt-4">
          Hanna sikret seieren etter fem intense runder med 96 deltakere.
        </p>
      </section>
    </main>
  );
}
