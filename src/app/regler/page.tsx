import React from "react";

export default function TournamentRules() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Tittel */}
        <h1 className="text-4xl font-bold mb-6">
          Turneringsregler for Mexican Train
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Her finner du de oppdaterte reglene for NM i Mexican Train 2024.
          Turneringen spilles over én dag, med 5 runder og opptil 96 spillere.
        </p>

        {/* Generelle regler */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Generelle Regler</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Turneringen varer én dag.</li>
            <li>
              Spillerne må registrere seg på forhånd og møte opp til tiden.
            </li>
            <li>Oppmøte 30 minutter før turneringsstart.</li>
            <li>Turneringen starter kl. 17:15 og avsluttes kl. 22:00.</li>
            <li>Hver runde varer i ca 45 minutter.</li>
            <li>
              Ingen spillere vil bli tillatt å delta etter at spillet har
              startet.
            </li>
            <li>
              Hvert bord har maksimalt 8 spillere, og ingen reserver er tillatt.
            </li>
          </ul>
        </section>

        {/* Spilloppsett */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Spilloppsett</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Turneringen har maksimalt 96 deltakere fordelt på 12 bord (8
              spillere per bord).
            </li>
            <li>
              Det spilles totalt 5 runder med "swiss-format" for rettferdig
              poengfordeling.
            </li>
            <li>
              Hver runde starter med dobbel 12 og spilles ned til dobbel 7.
            </li>
            <li>Hver spiller trekker 12 brikker ved starten av hver runde.</li>
            <li>Spilleren med den nødvendige dobbelbrikken starter spillet.</li>
          </ul>
        </section>

        {/* Spilleprosessen */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Spilleprosessen</h2>
          <ul className="list-decimal list-inside text-gray-700 space-y-2">
            <li>
              Spilleren som starter kan åpne enten sitt eget tog eller det
              Mexicanske toget ved å spille en brikke som matcher dobbelbrikken.
            </li>
            <li>
              Hvis en spiller ikke kan legge ut en brikke, må de trekke fra
              beinbunken. Hvis de fremdeles ikke kan spille, må de åpne sitt tog
              ved å plassere en markør på det.
            </li>
            <li>
              Når en spiller har én brikke igjen, må de tappe på den for å
              indikere at de kan gå ut. Hvis de glemmer dette, må de trekke en
              ny brikke.
            </li>
          </ul>
        </section>

        {/* Poengberegning */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Poengberegning</h2>
          <p className="text-gray-700">
            Poeng tildeles basert på spillernes prestasjoner ved bordet:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>1. plass: 7 poeng</li>
            <li>2. plass: 6 poeng</li>
            <li>3. plass: 5 poeng</li>
            <li>4. plass: 4 poeng</li>
            <li>5. plass: 3 poeng</li>
            <li>6. plass: 2 poeng</li>
            <li>7. plass: 1 poeng</li>
            <li>8. plass: 0 poeng</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Etter hver runde oppdateres en leaderboard basert på totale poeng og
            sammenlagt lav poengsum. Spilleren med flest poeng etter 5 runder
            kåres til turneringsmester. Ved lik poengsum brukes lavest
            sammenlagt poengsum som tie-breaker.
          </p>
        </section>

        {/* Tidsplan */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Tidsplan (Brukt for NM 2024)
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>16:45 - 17:15: Velkomst og oppsett</li>
            <li>17:15 - 18:00: Runde 1</li>
            <li>18:15 - 19:00: Runde 2</li>
            <li>19:15 - 20:00: Runde 3</li>
            <li>20:15 - 21:00: Runde 4</li>
            <li>21:15 - 22:00: Runde 5</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
