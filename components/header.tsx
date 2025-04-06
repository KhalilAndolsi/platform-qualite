import React from "react";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import SignOutBtn from "./signout-btn";

const Header = async () => {
  const session: any = await getServerSession(authOptions);
  return (
    <>
      {session !== null && <SignOutBtn />}
      <header>
        <div className="flex flex-col lg:flex-row">
          <div className="border-2 border-foreground lg:w-[450px] flex-grow lg:flex-grow-0 grid place-content-center border-b-0 lg:border-b-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={591}
              height={180}
              className=""
            />
          </div>
          <div className="border-2 border-l-0 border-foreground p-2 flex-1 text-center flex items-center justify-center flex-col">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Plateforme Qualité Accueil
            </h1>
            <p className="text-lg lg:text-2xl xl:text-3xl">
              Direction Générale de la Comptabilité Publique et du
              <br /> Recouvrement
            </p>
          </div>
        </div>
        <nav className="hidden md:flex mb-7 *:border-t-0 *:p-2 *:flex-grow *:text-center *:border-foreground *:text-sm lg:*:text-lg *:font-medium">
          <Link
            href="/"
            className="border-2 border-l-2 text-yellow-700 hover:bg-foreground hover:text-white transition-all">
            Accueil
          </Link>
          <Link
            href="/cellule-audit-qualite"
            className="border-2 border-l-0 text-yellow-700 hover:bg-foreground hover:text-white transition-all">
            Cellule Audit Qualité
          </Link>
          <Link
            href="/systeme-documentaire"
            className="border-2 border-l-0 text-yellow-700 hover:bg-foreground hover:text-white transition-all">
            Système Documentaire
          </Link>
          <Link
            href="/nouveautes"
            className="border-2 border-l-0 text-yellow-700 hover:bg-foreground hover:text-white transition-all">
            Nouveautés
          </Link>
          <Link
            href="/contact"
            className="border-2 border-l-0 text-yellow-700 hover:bg-foreground hover:text-white transition-all">
            Contacts
          </Link>
          {session !== null && session.user.role === "ADMIN" && (
            <Link
              href="/admin"
              className="border-2 border-l-0 text-yellow-700 hover:bg-foreground hover:text-white transition-all">
              Admin
            </Link>
          )}
        </nav>
        <nav className="flex md:hidden p-2 mb-7 items-center justify-between">
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border border-foreground py-2.5 px-2 pe-10 shadow-xs sm:text-sm outline-none"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700">
                <span className="sr-only">Search</span>

                <Search size={18} />
              </button>
            </span>
          </div>
          <button>
            <Menu size={28} />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
