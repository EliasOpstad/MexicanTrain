import React from "react";
import Image from "next/image";

const NMVinner2024: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Image
          src="/images/hannaHovlandBilde.png"
          alt="Hanna Hovland, vinner av NM 2024"
          width={800}
          height={500}
          className="rounded-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">
          Hanna Hovland - Vinner av NM 2024!
        </h1>
        <p className="text-lg text-gray-700">
          Hanna Hovland sikret seieren etter fem intense runder mot 95 andre
          deltakere. Turneringen ble arrangert på Spilloteket i Oslo, og vi
          gratulerer Hanna med førsteplassen!
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Takk til alle deltakerne som bidro til å gjøre NM i Mexican Train 2024
          til en uforglemmelig opplevelse. Vi gleder oss allerede til neste år!
        </p>
      </section>
    </main>
  );
};

export default NMVinner2024;
