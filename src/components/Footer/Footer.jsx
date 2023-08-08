import React from 'react';
import Link from 'next/link';
import Section from '../Section/Section';
import Image from 'next/image';
import AccionPanalLogo from '../../assets/img/logo/accion-panal-logo.webp';
import { iconsList } from '../icons';

const Footer = () => {
  const { BsFacebook, BsYoutube, BsInstagram } = iconsList;

  const iconColor = '#4e2772';

  return (
    <footer className="flex justify-center bg-white">
      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-start gap-5 p-8">
        <Link href="/">
          <div className="w-full xl:p-10">
            <Image
              src={AccionPanalLogo}
              alt="unne-logo"
              width={115}
              height={200}
              className="h-auto w-full  max-w-[150px] xl:max-w-[330px]"
            />
          </div>
        </Link>


        <div className="w-full">
          <h3 className="text-panal-purple text-xl">Encuentrános</h3>
          <div className="flex flex-col gap-4 my-3">
            <div className="text-[#6b6b6b]">
              <p>Dirección</p>
              <p>Asturias #171, Of.101, Las Condes, Santiago.</p>
            </div>
            <div className="text-[#6b6b6b]">
              <p>Teléfono</p>
              <p>+56 9 1234 5678</p>
            </div>
            <div className="text-[#6b6b6b]">
              <p>E-mail</p>
              <p>contacto@panal.cl</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className="text-panal-purple text-xl">Terminos y condiciones</h3>
          <div className="flex flex-col gap-4 my-3">
            <div className="text-[#6b6b6b]">
              <p>
                Haz{' '}
                <a href="" className="text-panal-orange">
                  {' '}
                  click aqui
                </a>{' '}
                para saber mas sobre nuestros terminos y condiciones.
              </p>
            </div>
          </div>
          <h3 className="text-panal-purple text-xl my-3">Síguenos en:</h3>
          <div className="flex gap-4 justify-around">
            <a href='' target='_blank' className=" hover:scale-105">
              <BsFacebook size="2rem" color={iconColor} />
            </a>
            <a href='https://www.instagram.com/accionpanal/' target='_blank' className="hover:scale-105">
              <BsInstagram size="2rem" color={iconColor} />
            </a>
            <a href='https://www.youtube.com/@AccionPanal' target='_blank' className="hover:scale-105">
              <BsYoutube size="2rem" color={iconColor} />
            </a>
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-panal-purple text-xl">Menú</h3>
          <div className="mb-5">
            <ul className="text-md mt-5 text-[#6b6b6b]">
              <li className="my-2">
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Nosotros
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Servicios
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Contáctanos
                </a>
              </li>
              <li className="my-2">
                <a
                  href="#"
                  className="hover:underline underline-offset-4 decoration-orange-500"
                >
                  Intranet
                </a>
              </li>
            </ul>
          </div>
          {/* <h3 className="text-panal-purple text-xl my-3">Síguenos</h3>
          <div className="flex gap-4">
            <p className="">
              <BsFacebook size="2rem" color={iconColor} />
            </p>
            <p className="">
              <BsInstagram size="2rem" color={iconColor} />
            </p>
            <p className="">
              <BsLinkedin size="2rem" color={iconColor} />
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
