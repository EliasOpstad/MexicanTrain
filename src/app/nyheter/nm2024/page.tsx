import React from "react";
import Image from "next/image";

const NM2024: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Image
          src="/images/nm2024Logo.png"
          alt="NM 2024 nærmer seg"
          width={800}
          height={500}
          className="rounded-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">
          Nå nærmer NM 2024 i Mexican Train seg!
        </h1>
        <p className="text-lg text-gray-700">
          Forberedelsene er i gang, og vi gleder oss til å ønske velkommen til
          årets største turnering i Mexican Train! Har du alt klart for å delta
          i NM?
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Turneringen finner sted på <strong>Spilloteket</strong> i Oslo, og vi
          forventer stor konkurranse i år. Sørg for at du har registrert deg og
          gjort deg klar for 5 spennende runder!
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Vi ses den 21. desember 2024! Ta med venner og familie for en dag fylt
          med strategi, spenning og moro.
        </p>
      </section>
    </main>
  );
};

export default NM2024;
