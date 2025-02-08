"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        draggable={true}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="h-[250px] md:h-[450px] mb-7">
        {[1, 2, 3, 4].map((i) => (
          <SwiperSlide key={i}>
            <Image
              src={`/images/c${i}.jpg`}
              alt={`image-c${i}`}
              fill
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h1 className="text-xl lg:text-3xl font-semibold">
        Bienvenue dans le plateforme Qualitée
      </h1>
      <p className="lg:text-2xl font-light text-blue-600">
        Choisissez l&apos;espace qui vous convient
      </p>
      <div className="flex flex-col lg:flex-row gap-7 my-7">
        {espace.map((d, i) => (
          <div
            key={i}
            className="flex-1 p-4 text-white flex flex-col justify-between"
            style={{ backgroundColor: d.color }}>
            <div>
              <h1 className="text-xl font-medium">{d.title}</h1>
              <p className="font-light">{d.text}</p>
            </div>
            <button
              type="button"
              className="text-nowrap self-end mt-4 flex items-center gap-2 hover:underline">
              COMMENCEZ <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const espace = [
  {
    title: "Espace particulier",
    text: "Bienvenue dans votre espace particulier ! En quelques clics : trouvez facilement les informations fiscales que vous cherchez, téléchargez les imprimés dont vous avez besoin et effectuez d&apos;autres démarches administratives en ligne. Explorez cet espace et découvrez comment nous pouvons simplifier l&apos;accomplissement de votre devoir fiscal.  A vous de gérer vos obligations fiscales et de bénéficier de notre accompagnement.",
    color: "#24388a",
  },
  {
    title: "Espace professionnel",
    text: "Bienvenue dans votre espace professionnel ! Déclarez vos revenus, gérez vos obligations fiscales, bénéficiez des services de téléliquidation et consultez une documentation fiscale assez riche. Nous sommes là pour vous offrir une assistance personnalisée et vous accompagner vers le succès. Explorez cet espace et découvrez comment nous pouvons vous aider à optimiser vos activités professionnelles.",
    color: "#ed8e22",
  },
];
