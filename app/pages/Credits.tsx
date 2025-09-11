import logo from "../assets/images/logo-long.png";
import { motion } from "motion/react";

export function Credits() {
  return (
    <section
      id="credits"
      className="snap-start min-h-dvh w-dvw bg-uaap-blue text-white px-8 py-16 md:px-12 md:py-24 xl:px-15 xl:py-30 2xl:px-20 2xl:py-40"
    >
      <div>
        <img src={logo} alt="" className="w-72" />
        <div className="overflow-hidden">
          <motion.h1
            initial={{ translateY: "100%" }}
            whileInView={{
              translateY: "0",
              transition: { ease: "easeInOut", duration: 0.70 },
            }}
            className="font-display uppercase font-bold text-4xl mt-6 sm:text-7xl md:text-8xl md:mt-8"
          >
            UAAP SEASON 88
            <br />FIRST SEMESTER PRIMER
          </motion.h1>
        </div>
      </div>
      <div className="bg-white h-[1px] font-body mb-8" />
      <div className="flex justify-between flex-col gap-7 md:flex-row md:gap-12 lg:gap-28">
        <div className="shrink-0 flex flex-col gap-7 w-fit">
          <div>
            <h3 className="uppercase text-xl font-semibold">EDITOR-IN-CHIEF</h3>
            <p className="text-lg">Azra&nbsp;Cagsawa</p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">
              ASSOCIATE EDITOR
            </h3>
            <p className="text-lg">Nicole&nbsp;Sy</p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">MANAGING EDITOR</h3>
            <p className="text-lg">Qichsia&nbsp;Paladin</p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">
              DESIGN EXECUTIVE EDITOR
            </h3>
            <p className="text-lg">Anthea&nbsp;Rey</p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div>
            <h3 className="uppercase text-xl font-semibold">SPORTS EDITORS</h3>
            <p className="text-lg">
              Caitlin&nbsp;Bernal and Gabriel&nbsp;Renee&nbsp;Quizan
            </p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">WRITERS</h3>
            <p className="text-lg">
              A.J.&nbsp;Antonio, Jules&nbsp;Aranjuez, Gabrielle&nbsp;Binguan,
              Laurence&nbsp;L.&nbsp;Fernando, David&nbsp;Enrico&nbsp;Galvez,
              Diego&nbsp;Rafael&nbsp;C.&nbsp;Josue, Matthea&nbsp;P.&nbsp;Lazo,
              Luis&nbsp;Antonio&nbsp;Licas, Ino&nbsp;Maderazo,
              Mario&nbsp;Quirino&nbsp;Manlutac, Caleb&nbsp;Oximas,
              Carmela&nbsp;Therese&nbsp;Papa, RV&nbsp;Quinto, Ani&nbsp;Santos,
              Ravi&nbsp;G.&nbsp;Tan and Edge&nbsp;Torres
            </p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">PHOTOS EDITORS</h3>
            <p className="text-lg">
              Finomena&nbsp;Chang and Patrick&nbsp;Reyes-Santos
            </p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">PHOTO CREDITS</h3>
            <p className="text-lg">Miguel&nbsp;Abad, Rhian&nbsp;Herrera, Celina&nbsp;Iñgel, Enrico&nbsp;Jocson, Ariana&nbsp;Jurisprudencia, Juls&nbsp;Leonardo, Clarence&nbsp;Masilag, CJ&nbsp;Ochoa, Bea&nbsp;Pador, Earl&nbsp;Rafael, Jillian&nbsp;Santos, Sam&nbsp;Tadeo, Chelsea&nbsp;May&nbsp;Tan, Henri&nbsp;V.&bsp;To, and Ayenne&nbsp;Torres</p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">GRAPHIC DESIGN EDITORS</h3>
            <p className="text-lg">
              Aliya&nbsp;Delos&nbsp; and Chevin&nbsp;Paul&nbsp;Gealone
            </p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">DESIGNERS</h3>
            <p className="text-lg">Devin&nbsp;Avenida and Shami&nbsp;Sawalha</p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">BRANDING</h3>
            <p className="text-lg">Jizelle&nbsp;Arollado, Gaby&nbsp;Molina, Roxcel&nbsp;Obos and, Raphael&nbsp;E.&nbsp;Polintan</p>
          </div>
          <div>
            <h3 className="uppercase text-xl font-semibold">DEVELOPERS</h3>
            <p className="text-lg">Cheska&nbsp;Huang and Waleed&nbsp;Lugod</p>
          </div>
        </div>
      </div>
    </section>
  );
}
