"use client";
import Image from "next/image";
import { useState } from "react";

const SystemeDocumentairePage = () => {
  const [tab, setTab] = useState(1);
  return (
    <section className="container">
      <div className="flex *:flex-1 *:p-4 *:border-foreground *:font-medium">
        <button
          onClick={() => setTab(1)}
          type="button"
          className={`border-2 ${tab == 1 ? "bg-foreground text-white" : ""}`}>
          POLITIQUE QUALITE
        </button>
        <button
          onClick={() => setTab(2)}
          type="button"
          className={`border-2 border-x-0 ${
            tab == 2 ? "bg-foreground text-white" : ""
          }`}>
          ENGAGEMENTS
        </button>
        <button
          onClick={() => setTab(3)}
          type="button"
          className={`border-2 ${tab == 3 ? "bg-foreground text-white" : ""}`}>
          PROCEDURES
        </button>
      </div>
      {tab == 1 && (
        <>
          <h2 className="text-2xl font-medium text-yellow-700 my-4">
            Présentation de la DGCPR :
          </h2>
          <p className="mb-2">
            La Direction Générale de la Comptabilité Publique et du Recouvrement
            (DGCPR), a pour missions principales le recouvrement des recettes
            revenant à l&apos;Etat, aux établissements publics et aux
            collectivités locales, le contrôle et le paiement des dépenses
            publiques, la tenue des comptes publics ainsi que la production de
            l&apos;information financière et comptable relative à
            l&apos;exécution des opérations budgétaires et de trésorerie des
            structures publiques régies par le code de la comptabilité publique.
          </p>
          <br />
          <h2 className="text-2xl font-medium text-yellow-700 my-4">
            Stratégie Qualité DGCPR :
          </h2>
          <h1 className="text-4xl text-center font-bold text-yellow-700 my-4">
            POLITIQUE QUALITE
          </h1>
          <p className="mb-2">
            Conscients de l&apos;impact majeur du programme « Qualité
            d&apos;accueil » sur l&apos;amélioration de l&apos;environnement de
            travail, tant pour notre administration que pour les usagers, la
            Direction Générale de la Comptabilité Publique et de Recouvrement
            s&apos;engage à développer un système d&apos;accueil optimal au sein
            des recettes des finances et municipales.
          </p>
          <p className="mb-2">
            Convaincus de l&apos;importance d&apos;un accueil à la fois
            professionnel, chaleureux et confidentiel, nous avons défini une
            politique axée sur quatre priorités essentielles :
          </p>
          <ul className="pl-14 list-disc mb-2">
            <li>Faciliter l&apos;accès et l&apos;orientation des usagers,</li>
            <li>
              Optimiser les conditions d&apos;accueil et la prise en charge des
              usagers
            </li>
            <li>Renforcer la communication avec les usagers</li>
            <li>
              Mettre en place des dispositifs d&apos;écoute active pour garantir
              leur satisfaction
            </li>
          </ul>
          <p className="mb-2">
            Pour atteindre ces objectifs, nous nous engageons à mettre en œuvre
            les actions nécessaires, en fournissant aux services les moyens
            humains et matériels indispensables.
          </p>
          <p className="mb-2">
            Cette démarche s&apos;inscrit dans notre volonté continue
            d&apos;améliorer la qualité de l&apos;accueil et de répondre aux
            exigences les plus élevées, dans le respect des attentes des
            usagers.
          </p>
          <h4 className="text-xl font-medium my-4">
            Champ d&apos;application du système qualité « MARHBA »
          </h4>
          <p className="mb-2">
            Le système qualité MARHBA couvre la relation client au sein des
            recettes des finances et des recettes municipales. Le système suit
            les exigences du référentiel MARHBA portant sur les chapitres :
          </p>
          <ol className="pl-14 list-decimal mb-2">
            <li>Accueil physique</li>
            <li>Accueil téléphonique</li>
            <li>Gestion courriers </li>
            <li>Gestion courriels</li>
            <li>Gestion du site web</li>
            <li>Système de management</li>
          </ol>
          <p className="mb-2">
            L&apos;obtention de ce label atteste de la mise en place d&apos;un
            système de management de la qualité solide, garantissant la
            satisfaction client et la conformité aux normes en vigueur.
          </p>
          <br />
        </>
      )}
      {tab == 2 && (
        <>
          <h1 className="text-4xl text-center font-bold text-yellow-700 my-4">
            ENGAGEMENTS
          </h1>
          <p className="mb-2">
            La{" "}
            <b>
              Direction Générale de la Comptabilité Publique et du Recouvrement
              (DGCPR)
            </b>{" "}
            s&apos;est engagée dans un processus de modernisation de ses outils
            de travail.
          </p>
          <p className="mb-2">
            La mise en place de ce nouveau système s&apos;inscrit pleinement
            dans la volonté d&apos;améliorer continuellement la qualité des
            services rendus aux usagers. En optimisant les processus internes,
            nous souhaitons faciliter leurs démarches et répondre au mieux à
            leurs attentes.
          </p>
          <h4 className="text-xl font-medium my-4">
            1.Faciliter l&apos;accès et l&apos;orientation des usagers
          </h4>
          <ul className="pl-14 list-disc mb-2">
            <li>
              Simplifier les démarches administratives et les rendre plus
              intuitives
            </li>
            <li>
              Mettre en place un système d&apos;accueil personnalisé et efficace
            </li>
            <li>
              Développer des outils d&apos;orientation clairs et accessibles
            </li>
            <li>
              Proposer des horaires d&apos;ouverture élargis et des créneaux
              dédiés.
            </li>
          </ul>
          <h4 className="text-xl font-medium my-4">
            2.Optimiser les conditions d&apos;accueil et la prise en charge des
            usagers
          </h4>
          <ul className="pl-14 list-disc mb-2">
            <li>
              Former le personnel à l&apos;accueil et à l&apos;écoute active.
            </li>
            <li>
              Aménager des espaces d&apos;accueil confortables et adaptés aux
              besoins des usagers.
            </li>
            <li>
              Réduire les délais d&apos;attente et garantir une prise en charge
              rapide des demandes.
            </li>
            <li>
              Personnaliser l&apos;accompagnement des usagers en fonction de
              leurs besoins spécifiques.
            </li>
          </ul>
          <h4 className="text-xl font-medium my-4">
            3.Renforcer la communication avec les usagers
          </h4>
          <ul className="pl-14 list-disc mb-2">
            <li>Mettre en place des canaux de communication variés</li>
            <li>
              Diffuser une information claire et transparente sur les services
              proposés.{" "}
            </li>
            <li>Envoyer des enquêtes de satisfaction régulières.</li>
            <li>Organiser des réunions d&apos;information avec les usagers.</li>
          </ul>
          <h4 className="text-xl font-medium my-4">
            4.Mettre en place des dispositifs d&apos;écoute active pour garantir
            leur satisfaction
          </h4>
          <ul className="pl-14 list-disc mb-2">
            <li>Créer un moyen de collecte des suggestions des usagers. </li>
            <li>Mettre en place un système de réclamation clients.</li>
          </ul>
          <p className="mb-2">
            Analyser les retours des usagers pour améliorer les services
          </p>
          <br />
        </>
      )}
      {tab == 3 && (
        <>
          <h1 className="text-4xl text-center font-bold text-yellow-700 my-4">
            PROCEDURES
          </h1>
          <p className="mb-2">
            Les procédures de management traduit la stratégie de la DGCPR pour
            la mise en place du système de management qualité ….
          </p>
          <ul className="pl-14 list-disc mb-2">
            <li>Procédure audit interne PRD.16 (lien)</li>
            <li>Procédure revue de direction PRD.17 (lien)</li>
            <li>
              Procédure maîtrise des documents et des enregistrements relatifs à
              la qualité PRD.01 (lien)
            </li>
          </ul>
          {/* TODO: image PDCA */}
          <Image
            src="/images/graph.jpg"
            width={740}
            height={493}
            alt="image"
            className="mx-auto mix-blend-multiply"
          />
          <h4 className="text-xl font-medium my-4">
            1.Organisation du système qualité « MARHBA »
          </h4>
          <p className="mb-2">
            Afin d&apos;assurer le bon fonctionnement du système, une
            répartition claire des rôles et des responsabilités a été définie
            pour chaque acteur intégré dans la mise en œuvre des activités
            relatives à la qualité :
          </p>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-start border-2 border-foreground">Code</th>
                <th className="text-start border-2 border-foreground">
                  Procédure{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {procedureEtCode.map((d, i) => (
                <tr key={i}>
                  <td className="border-2 border-foreground">{d.code}</td>
                  <td className="border-2 border-foreground">{d.procedure}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="my-4 text-lg font-medium text-red-800">
            Dépliants (sous onglet) ( voir site Jibaya la même template)
          </h4>
          <ul className="pl-14 list-disc mb-2 text-red-800">
            <li>Accueil des PMR et PBS</li>
            <li>Coordonnées recettes</li>
            <li>Distributeur de tickets GFA-DGCPR</li>
          </ul>
        </>
      )}
    </section>
  );
};


const procedureEtCode = [
  {
    code: "PRD.02",
    procedure: "Procédure gestion de l&apos;accueil physique",
  },
  {
    code: "PRD.03",
    procedure: "Procédure gestion des incidents",
  },
  {
    code: "PRD.04",
    procedure:
      "Procédure gestion de l&apos;accueil des personnes à mobilité réduite ou à besoins spécifiques",
  },
  {
    code: "PRD.05",
    procedure: "Procédure de gestion des moyens généraux ",
  },
  {
    code: "PRD.06",
    procedure: "Procédure gestion du centre d&apos;appel ",
  },
  {
    code: "PRD.07",
    procedure: "Procédure gestion de courriers",
  },
  {
    code: "PRD.08",
    procedure: "Procédure gestion de courriels",
  },
  {
    code: "PRD.09",
    procedure: "Procédure gestion du contenu du site web",
  },
  {
    code: "PRD.10",
    procedure: "Procédure appels téléphoniques",
  },
  {
    code: "PRD.11",
    procedure: "Procédure gestion de la formation et de la sensibilisation",
  },
  {
    code: "PRD.12",
    procedure: "Procédure recueil des attentes du personnel",
  },
  {
    code: "PRD.13",
    procedure:
      "Procédure gestion des suggestions et des réclamations des clients",
  },
  {
    code: "PRD.14",
    procedure:
      "Procédure collecte et suivi des indicateurs clés de performances",
  },
  {
    code: "PRD.15",
    procedure:
      "Procédure mesure et suivi de la satisfaction et des suggestions des clients",
  },
  {
    code: "PRD.18",
    procedure: "Procédure traitement des non-conformités",
  },
];

export default SystemeDocumentairePage;
