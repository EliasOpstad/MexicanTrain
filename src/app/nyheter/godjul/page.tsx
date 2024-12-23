import React from "react";
import Image from "next/image";

const GodJul: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Image
          src="/images/julenisse.png"
          alt="Julehilsen"
          width={800}
          height={500}
          className="rounded-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">
          God Jul fra Mexican Train Norge!
        </h1>
        <p className="text-lg text-gray-700">
          Vi ønsker alle våre spillere og entusiaster en riktig god jul og et
          godt nytt år! Takk for et fantastisk år med mange spennende
          turneringer, god stemning og mye moro. Vi gleder oss til å se dere
          igjen i 2025!
        </p>
      </section>
    </main>
  );
};

export default GodJul;
