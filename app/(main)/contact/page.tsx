import Contactui from "@/components/contact-ui";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <section className="container grid grid-cols-12 gap-4">
      <div className="col-span-full lg:col-span-5 space-y-4">
        <h1 className="text-center text-3xl font-bold my-4">Contacts et Adresses</h1>
        {constacts.map((c, i) => (
          <div key={i} className="p-2 rounded-lg bg-white border-2 border-foreground">
            <h3 className="text-center text-lg font-medium p-2 pb-4">{c.title}</h3>
            <p className="flex gap-2 items-center"><Mail size={18}/>{c.email}</p>
            <p className="flex gap-2 items-center"><Phone size={18}/>{c.phone}</p>
            <p className="flex gap-2 items-center"><MapPin size={18}/>{c.addresse}</p>
          </div>
        ))}
      </div>
      <Contactui />
    </section>
  );
};

const constacts = [
  {
    title: "Cellule Audit Qualité",
    email: "cellule.qualite@finances.gov.tn",
    phone: "71 257 301",
    addresse: "36 Rue de Marseille,1002 Tunis",
  },
  {
    title: "Centre d'appel",
    email: "cellule.qualite@finances.gov.tn",
    phone: "71 257 301",
    addresse: "36 Rue de Marseille,1002 Tunis",
  },
  {
    title: "Siège DGCPR",
    email: "cellule.qualite@finances.gov.tn",
    phone: "71 257 301",
    addresse: "36 Rue de Marseille,1002 Tunis",
  },
]

export default ContactPage;
