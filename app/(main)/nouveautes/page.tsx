import Image from "next/image";
import React from "react";

const NouveautesPage = async () => {
  return (
    <section className="container">
      <h1 className="text-3xl font-medium text-yellow-700 my-4">
        Liste des sites concernées par le label « MARHBA »
      </h1>
      <p className="mb-2">
        La cellule d&apos;Audit et de Qualité (CAQ) est chargée d&apos;assurer la
        dynamique du système qualité, d&apos;optimiser les processus et d&apos;améliorer
        la qualité de l&apos;accueil au sein des postes comptables de la DGCPR.
      </p>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-start border-2 border-foreground">Site</th>
            <th className="text-start border-2 border-foreground">
              Gouvernorat{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {sites.map((d, i) => (
            <tr key={i}>
              <td className="border-2 border-foreground">{d.site}</td>
              <td className="border-2 border-foreground">{d.gouvernorat}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="text-xl font-medium text-yellow-700 my-4">
        Supports et formations :
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {support.map((s, i) => (
          <a href={s.link} target="_blank" key={i} className="h-[150px] md:h-[250px] overflow-hidden border-2 border-foreground rounded-lg bg-white hover:shadow-lg transition-all">
            <Image src={s.image} alt={`image-${i}`} width={450} height={250} className="size-full object-cover mix-blend-multiply" />
          </a>
        ))}
      </div>
    </section>
  );
};

const sites = [
  {
    site: "Centre d&apos;appel de la DGCPR",
    gouvernorat: "Tunis 1",
  },
  {
    site: "RF de Mjez El Beb",
    gouvernorat: "Béjà",
  },
  {
    site: "RF de Menzah 6 ",
    gouvernorat: "Ariana",
  },
  {
    site: "RF de Kairouan",
    gouvernorat: "Kairouan",
  },
  {
    site: "RF de Ksar Helal",
    gouvernorat: "Monastir",
  },
  {
    site: "RF de Kalaa Kebira",
    gouvernorat: "Sousse",
  },
  {
    site: "RF de Médina Jedida",
    gouvernorat: "Ben Arous 1",
  },
  {
    site: "RF de Cité El Mahrajène",
    gouvernorat: "Tunis 2",
  },
  {
    site: "RF de Tarek Ibn Ziad",
    gouvernorat: "Bizerte",
  },
  {
    site: "RF de Denden",
    gouvernorat: "Manouba",
  },
  {
    site: "RF de Lac 1",
    gouvernorat: "Tunis 3",
  },
];

const support = [
  {
    image: "/images/s1.jpg",
    link: "https://e-services.innorpi.tn/formation-detail/23",
  },
  {
    image: "/images/s2.jpg",
    link: "https://www.innorpi.tn/fr/label-marhba",
  },
  {
    image: "/images/s3.jpg",
    link: "/",
  },
  {
    image: "/images/s4.jpg",
    link: "/",
  },
];

export default NouveautesPage;
