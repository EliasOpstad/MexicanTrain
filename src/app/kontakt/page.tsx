import React from "react";

export default function Kontakt() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Tittel */}
        <h1 className="text-4xl font-bold mb-6">Kontakt oss</h1>
        <p className="text-lg text-gray-700 mb-6">
          Har du spørsmål om turneringen eller ønsker mer informasjon? Ta gjerne
          kontakt med oss!
        </p>

        {/* Kontaktinformasjon */}
        <div className="mb-8">
          <ul className="list-none text-lg text-gray-700 space-y-4">
            <li>
              <strong>E-post:</strong>{" "}
              <a
                href="mailto:mexicantrainnorge@gmail.com"
                className="text-blue-500 hover:underline"
              >
                mexicantrainnorge@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Kontaktskjema */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send oss en melding</h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="name"
              >
                Navn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ditt navn"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="email"
              >
                E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Din e-post"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium text-gray-700"
                htmlFor="message"
              >
                Melding
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Din melding"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Send melding
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
