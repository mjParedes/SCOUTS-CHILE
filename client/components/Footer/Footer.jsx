import Image from "next/image";
import React from "react";
import MainLogo from "@/public/images/logos/logoAsociacion.png";
import SecondLogo from "@/public/images/logos/logoAmgs.png";
import ThirdLogo from "@/public/images/logos/logoWgs.png";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-white mt-4">
      <div className="flex flex-col justify-between items-center lg:flex-row lg:justify-around lg:items-center gap-6 pt-2 lg:p-6">
        {/* Seccion de logos */}
        <div className="flex flex-row w-full justify-evenly items-center gap-2">
          <Image
            src={MainLogo}
            alt="main logo"
            className="w-full object-scale-down"
          />
          <Image
            src={SecondLogo}
            alt="second logo"
            className="w-full object-scale-down"
          />
          <Image
            src={ThirdLogo}
            alt="third logo"
            className="w-full object-scale-down"
          />
        </div>

        {/* Seccion de locación */}
        <div className="flex flex-col w-full items-start gap-4">
          <div className="flex items-center justify-center w-full">
            <FiMapPin />
            <p className="text-sm ml-2">
              {" "}
              Avenida República 97, Santiago, Chile, CP: 8370040{" "}
            </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <FiPhone />
            <p className="text-sm ml-2"> Tel.: +56(2) 2630 7452 </p>
          </div>
          <div className="flex items-center justify-center w-full">
            <FiMail />
            <p className="text-sm ml-2">
              {" "}
              comunicaciones@guiasyscoutschile.cl{" "}
            </p>
          </div>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.0975805964408!2d-70.66772295642505!3d-33.45023687316256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5001693b191%3A0xf4a6725ccf926f2e!2sRep%C3%BAblica%2097%2C%208370040%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2sar!4v1696022115310!5m2!1ses!2sar"
            width="400"
            height="250"
            style={{ border: 0 }}
            // allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full "
          ></iframe>
        </div>
      </div>

      {/* Seccion estatica copyrights */}
      <div className="flex flex-col justify-center p-6 text-center bg-blue-800">
        <p className="text-sm">
          Todos los derechos reservados – ASOCIACIÓN DE GUÍAS Y SCOUTS DE CHILE
          2023 – Comisión Nacional TI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
