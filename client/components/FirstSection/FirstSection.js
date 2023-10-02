import React from "react";
import Image from "next/image";
import Chalten from "../../public/images/chalten.png";

export default function FirstSection() {
  return (
    <section className="bg-gray-100 flex flex-col items-center justify-center h-screen ">
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/MGw2GlhmsgU?si=6FEgEcc9uXP4Rvcw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h1 class="text-2xl md:text-4xl font-bold mt-4 text-center">
        Te damos la bienvenida a los Programas Internacionales
      </h1>
      <article class="flex flex-row mt-6">
        <p class="text-sm text-left ml-4 mr-4 w-2/10">
          Cada programa cuenta con sus propios objetivos de aprendizaje, su set
          de actividades y una insignia distintiva
        </p>

        <Image
          src={Chalten}
          width={160}
          height={90}
          class="rounded-l-full rounded-r-none w-1/2"
        />
      </article>
      <article class="flex flex-row mt-6">
        <Image
          src={Chalten}
          width={160}
          height={90}
          class="rounded-tr-full rounded-br-full rounded-tl-none rounded-bl-none w-1/2"
        />
        <p class="text-sm text-left ml-4 mr-4 w-2/10">
          Formando parte del ciclo de desarrollo de la Unidad Scout, ¡Tú puedes
          elegir el equipo que desees desarrollar!
        </p>
      </article>
    </section>
  );
}
