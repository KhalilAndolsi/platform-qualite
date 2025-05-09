import Image from "next/image";

const CelluleAuditQualitePage = () => {
  return (
    <section className="container">
      <h1 className="text-3xl font-medium text-yellow-700 my-4">
        Présentation de la cellule d&apos;audit et de la qualité :
      </h1>
      <p className="mb-2">
        La cellule d&apos;Audit et de Qualité (CAQ) est chargée d&apos;assurer la
        dynamique du système qualité, d&apos;optimiser les processus et d&apos;améliorer
        la qualité de l&apos;accueil au sein des postes comptables de la DGCPR.
      </p>
      <p className="mb-2">
        À cette fin, elle conçoit, met en œuvre et suit le système qualité.
      </p>
      <p className="mb-2">
        Elle veille au bon déroulement du système à travers des démarches
        d&apos;audit et des indicateurs de performance.
      </p>
      <p className="mb-2">
        La cellule d&apos;audit et de qualité travaille en étroite collaboration avec
        les correspondants qualité (CQ) au niveau régional pour garantir la
        satisfaction de ces clients au niveau de ces recettes des finances et
        municipales.
      </p>
      <h1 className="text-3xl font-medium text-yellow-700 my-4">
        Organigramme Organisationnel de la CAQ au niveau Régional et Local :
      </h1>
      <Image src="/images/organigramme.png" alt="organigramme" width={740} height={493} className="mx-auto mix-blend-multiply" />
    </section>
  );
};

export default CelluleAuditQualitePage;
