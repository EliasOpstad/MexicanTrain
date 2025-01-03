import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Turneringer() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      {/* Turneringsoppsett */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Turneringsoppsett</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Maksimalt 96 deltakere fordelt på 12 bord.</li>
          <li>5 runder med "swiss-format" for rettferdig poengfordeling.</li>
          <li>Hver runde varer i 45 minutter.</li>
          <li>Finale med de 8 beste spillerne fra hovedrundene.</li>
          <li>Spillene starter med dobbel 12 og spilles ned til dobbel 7.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4">
          Alle deltakere må møte opp senest 16:45 for registrering. Turneringen
          starter kl. 17:15 og avsluttes med premieutdeling kl. 22:00.
        </p>
        <div className="text-center mt-6">
          <Link
            href="/regler"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
          >
            Les mer om reglene
          </Link>
        </div>
      </section>

      {/* Plassering */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Plassering</h2>
        <p className="text-lg text-gray-700 text-center">
          Turneringen finner sted på <strong>Spilloteket</strong> i Oslo, en
          moderne og koselig arena for brettspillentusiaster.
        </p>
        <p className="text-lg text-gray-700 text-center mt-4">
          Adresse: Øvre Slottsgate 3, 0157 Oslo. Stedet er lett tilgjengelig med
          offentlig transport og har flere parkeringsmuligheter i nærheten.
        </p>

        {/* Google Maps */}
        <div className="mt-6 border-2 border-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.7185683185582!2d10.740072216057358!3d59.91149108187495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e610a60b907%3A0x5b9f0dd8c582ad8c!2s%C3%98vre%20Slottsgate%203%2C%200157%20Oslo!5e0!3m2!1sen!2sno!4v1681472842841!5m2!1sen!2sno"
            width="100%"
            height="400"
            className="rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </section>
      {/* Årets vinner */}
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Vinner av NM 2024
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
          {/* Bilde */}
          <div className="flex-shrink-0">
            <Image
              src="/images/hannaHovlandBilde.png"
              alt="Hanna Hovland, vinner av NM 2024"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Bildet er tilsendt av Hanna Hovland.
            </p>
          </div>
          {/* Tekst */}
          <div className="md:text-left">
            <p className="text-lg text-gray-700">
              Vi gratulerer <strong>Hanna Hovland</strong> som vinner av
              Norgesmesterskapet i Mexican Train 2024! Hanna sikret seieren
              etter fem intense runder mot 95 andre deltakere på Spilloteket i
              Oslo.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Etter å ha utspilt sine motstandere i både strategi og presisjon,
              gikk Hanna ut med den laveste poengsummen i finalen og tok
              førsteplassen.
            </p>
            {/* Les mer-knapp */}
            <div className="mt-6">
              <Link
                href="/nyheter/nm2024vinner"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
              >
                Les mer...
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Vinner av NM 2023
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
          {/* Bilde */}
          <div className="flex-shrink-0">
            <Image
              src="/images/theodor.jpg"
              alt="Hanna Hovland, vinner av NM 2024"
              width={300}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Bildet er tilsendt av Theodor Schei
            </p>
          </div>
          {/* Tekst */}
          <div className="md:text-left">
            <p className="text-lg text-gray-700">
              Vi gratulerer <strong>Theodor Schei</strong> som vinner av
              Norgesmesterskapet i Mexican Train 2023! Av 32 deltagere gikk
              Theodor ut med seieren etter en lang og spennende dag.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Theodor viste seg som en dyktig spiller og klarte å holde hodet
              kaldt gjennom hele turneringen. Vi gratulerer med seieren!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
