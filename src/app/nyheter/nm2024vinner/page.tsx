import React from "react";
import Image from "next/image";

const NMVinner2024: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8 flex items-center justify-center">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        {/* Overskrift */}
        <h1 className="text-4xl font-bold mb-4">
          Hanna Hovland - Vinner av NM 2024!
        </h1>

        {/* Bilde av vinneren */}
        <div className="flex justify-center items-center flex-col mb-6">
          <Image
            src="/images/hannaHovlandBilde.png"
            alt="Hanna Hovland, vinner av NM 2024"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Bildet er tilsendt av Hanna Hovland.
          </p>
        </div>

        {/* Tekst om vinneren */}
        <p className="text-lg text-gray-700 mb-8 text-left">
          Hanna Hovland sikret seieren etter fem intense runder mot 95 andre
          deltakere. Premien inkluderer en Mexican Train stasjonbrikke som kan
          anvendes i eget spill hjemme. I tillegg får vinneren tilsendt blomster
          rundt juletider. Turneringen ble arrangert på Spilloteket i Oslo, og
          vi gratulerer Hanna med førsteplassen!
        </p>

        {/* Tekst om premien */}
        <p className="text-lg text-gray-700 text-left mb-6"></p>

        {/* Bilde av premien */}
        <div className="flex justify-center items-center flex-col mb-6">
          <Image
            src="/images/modell.png"
            alt="Premien vunnet av Hanna Hovland"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-left">
            Vinnerpremienen kan hentes på Spilloteket i Oslo fra 3 januar.
          </p>
        </div>

        {/* Avslutning */}
        <p className="text-lg text-gray-700 mt-4 text-left">
          Takk til alle deltakerne som bidro til å gjøre NM i Mexican Train 2024
          til en uforglemmelig opplevelse. Vi gleder oss allerede til neste år!
        </p>
      </section>
    </main>
  );
};

export default NMVinner2024;
