import React, { Component } from "react";
import Portada from "./components/Portada.jsx";
import Guitarras from "./components/Guitarras.jsx";
import Footer from "./components/Footer.jsx";

// const data = {
//   menu: [
//     {
//       href: "index.html",
//       title: "Home",
//     },
//     {
//       href: "#guitarras",
//       title: "Guitarras",
//     },
//     {
//       href: "precios.html",
//       title: "Precios",
//     },
//   ],
//   logoPortada: logoPortada,
//   guitarras: [
//     {
//       image: acustica,
//       alt: "Guitarra Invie Acustica",
//       name: "Invie Acustica",
//       features: [
//         "Estilo vintage",
//         "Madera pura",
//         "Incluye estuche invisible de aluminio",
//       ],
//     },
//     {
//       image: classic,
//       alt: "Guitarra Invie Classic",
//       name: "Invie Classic",
//       features: [
//         "Estilo vintage",
//         "Liviana",
//         "Empieza tu camino como rockstar",
//       ],
//     },
//   ],
// };

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        {/* <Portada menu={data.menu} logo={data.logoPortada} /> */}
        <Portada />
        {/* Portada */}
        {/* <Guitarras guitarras={data.guitarras} /> */}
        <Guitarras />
        {/* Guitarras */}
        <Footer />
        {/* Footer */}
      </section>
    );
  }
}

export default Invie;
