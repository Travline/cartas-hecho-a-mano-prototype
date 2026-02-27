interface Card {
  slug: string
  reason: string
  img: string
  alt:string
}

export const cardsData: Card[] = [
  {
    slug: "pareja-familiares",
    reason: "Para tu pareja o familiares",
    img: "/assets/carta-pareja.webp",
    alt: "Carta para expresar cariño a tus amigos o pareja"
  },
  {
    slug: "matrimonio",
    reason: "Invitaciones de boda / aniversario",
    img: "/assets/carta-matrimonio.webp",
    alt: "Carta de invitación a tu boda"
  },
  {
    slug: "cumpleanos",
    reason: "Felicitación de cumpleaños",
    img: "/assets/carta-cumple.webp",
    alt: "Carta de invitacion a cumpleaños"
  },
  {
    slug: "empleados",
    reason: "Para felicitar a tus trabajadores",
    img: "/assets/carta-empleados.webp",
    alt: "Carta para felicitar a tus empleados"
  },
  {
    slug: "guia-transicion",
    reason: "Cartas de guía (ánimo, propósito, transición vital)",
    img: "/assets/carta-liberacion.webp",
    alt: "Persona alzando los brazos en un campo verde"
  },
  {
    slug: "condolencias",
    reason: "Duelo para dar condolencias",
    img: "/assets/carta-condolencias.webp",
    alt: "Carta para expresar condolencias"
  },
  {
    slug: "nacimiento",
    reason: "Felicitación por el nacimiento de un hijo(a).",
    img: "/assets/carta-nacimiento.webp",
    alt: "Carta de felicitaciones por nmacimiento"
  },
  {
    slug: "perdon",
    reason: "Para pedir perdón",
    img: "/assets/carta-perdon.webp",
    alt: "Personas abrazándose"
  },
  {
    slug: "navidad-ano-nuevo",
    reason: "Para felicitar en Navidad & Año nuevo",
    img: "/assets/carta-navidad.webp",
    alt: "Carta para felicitaciones de año nuevo o navidad"
  }
];