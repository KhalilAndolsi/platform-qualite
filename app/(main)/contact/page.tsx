import { Mail, MapPin, Phone, SendHorizonal } from "lucide-react";
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
      <form className="space-y-4 col-span-full lg:col-span-7">
      <h1 className="text-3xl font-bold my-4">Laissez votre message ici</h1>
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border-2 border-foreground outline-none p-3 text-sm"
            placeholder="Name"
            type="text"
            id="name"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border-2 border-foreground outline-none p-3 text-sm"
              placeholder="Email address"
              type="email"
              id="email"
            />
          </div>

          <div className="flex-1">
            <label className="sr-only" htmlFor="phone">
              Phone
            </label>
            <input
              className="w-full rounded-lg border-2 border-foreground outline-none p-3 text-sm"
              placeholder="Phone Number"
              type="tel"
              id="phone"
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>

          <textarea
            className="w-full rounded-lg border-2 border-foreground outline-none p-3 text-sm"
            placeholder="Message"
            rows={8}
            id="message"></textarea>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="flex items-center w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
            Envoyer <SendHorizonal size={18} />
          </button>
        </div>
      </form>
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
    title: "Centre d&apos;appel",
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
