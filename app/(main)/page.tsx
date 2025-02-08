"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container">
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          "1024": {
            slidesPerView: 2,
            spaceBetween: 10,
          }
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
              <h1 className="text-xl font-medium mb-4">{d.title}</h1>
              <p className="font-light">{d.text}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mb-7"/>
      <div className="grid gap-4 lg:grid-cols-3">
        {support.map((s, i) => (
          <a href={s.link} target="_blank" key={i} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg p-2">
            <Image src={s.image} alt={s.link} width={300} height={150} className="h-20 lg:w-full" style={{aspectRatio: "5/2"}} />
            <p className="group-hover:underline py-2">{s.link}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

const espace = [
  {
    title: "Espace particulier",
    text: "Bienvenue dans votre espace particulier ! En quelques clics : trouvez facilement les informations fiscales que vous cherchez, téléchargez les imprimés dont vous avez besoin et effectuez d&apos;autres démarches administratives en ligne. Explorez cet espace et découvrez comment nous pouvons simplifier l&apos;accomplissement de votre devoir fiscal.  A vous de gérer vos obligations fiscales et de bénéficier de notre accompagnement.",
    color: "#403c5f",
  },
  {
    title: "Espace professionnel",
    text: "Bienvenue dans votre espace professionnel ! Déclarez vos revenus, gérez vos obligations fiscales, bénéficiez des services de téléliquidation et consultez une documentation fiscale assez riche. Nous sommes là pour vous offrir une assistance personnalisée et vous accompagner vers le succès. Explorez cet espace et découvrez comment nous pouvons vous aider à optimiser vos activités professionnelles.",
    color: "#b6824e",
  },
];

const support = [
  {
    image: "/images/jibaya.png",
    link: "https://jibaya.tn/"
  },
  {
    image: "/images/finances.png",
    link: "http://www.finances.gov.tn/fr"
  },
  {
    image: "/images/cimf.png",
    link: "http://www.cimf.tn/"
  },
]