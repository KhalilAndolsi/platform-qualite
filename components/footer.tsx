import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-14 mt-14 bg-neutral-300">
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <Image
          src="/images/logo.png"
          alt="image"
          width={591}
          height={180}
          className="max-w-[300px]"
        />
        <nav>
          <h1 className="text-xl font-medium">Les lines</h1>
          <ul>
            <li><Link href="/cellule-audit-qualite" className="hover:underline">Cellule Audit Qualité</Link></li>
            <li><Link href="/systeme-documentaire" className="hover:underline">Système Documentaire</Link></li>
            <li><Link href="/nouveautes" className="hover:underline">Nouveautés</Link></li>
            <li><Link href="/contact" className="hover:underline">Contacts</Link></li>
          </ul>
        </nav>
        <nav className="flex lg:flex-col items-center justify-center gap-4 p-4">
            <a href="https://www.facebook.com/profile.php?id=100064851723992&mibextid=wwXIfr&rdid=hJHXj1W66wj6aA7f&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19qH7VMeSm%2F%3Fmibextid%3DwwXIfr#" target="_blank" className="hover:underline"><Facebook size={30}/></a>
            <a href="https://www.linkedin.com/in/dgcpr-tunisie-a632541b8/" target="_blank" className="hover:underline"><Linkedin size={30}/></a>
            <a href="https://www.youtube.com/channel/UC2YgyONf6BIiGKEW1rTbucw" target="_blank" className="hover:underline"><Youtube size={30}/></a>
        </nav>
      </div>
      <hr />
      <p className="p-4">Copyright © 2025 Plateforme Qualité</p>
    </footer>
  );
};

export default Footer;
