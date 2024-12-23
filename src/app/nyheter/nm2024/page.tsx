import React from "react";
import Image from "next/image";
import Link from "next/link";

const NM2024: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8 flex items-center justify-center">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
        {/* Bilde */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/nm2024Logo.png"
            alt="NM 2024 nærmer seg"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Overskrift */}
        <h1 className="text-4xl font-bold mb-4">
          Nå nærmer NM 2024 i Mexican Train seg!
        </h1>

        {/* Informasjonstekst */}
        <p className="text-lg text-gray-700 mb-4 text-left">
          Forberedelsene er i gang, og vi gleder oss til å ønske velkommen til
          årets største turnering i Mexican Train!
        </p>
        <p className="text-lg text-gray-700 mb-4 text-left">
          Turneringen finner sted på <strong>Spilloteket</strong> i Oslo, hvor
          96 plasser nå er fylt opp. Dette blir en spennende konkurranse med 5
          intense runder. Vi gleder oss masse til å se hvem som stikker av med
          seieren!
        </p>
        <p className="text-lg text-gray-700 mb-8 text-left">
          Vi ses <strong> 24.november 2024</strong>! Ta med venner og familie
          for en dag fylt med strategi, spenning og moro.
        </p>

        {/* Navigasjonsknapp */}
        <div className="mt-6">
          <Link href="/regler" passHref>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
              Les Turneringsreglene
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NM2024;
