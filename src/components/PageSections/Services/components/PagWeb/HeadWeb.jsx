import React from 'react'
import Button from '@/components/Button/Button'
import Image from 'next/image'
import { Link } from 'react-scroll';
import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';


const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;



function HeadWeb() {
    return (

        <div className='flex justify-center flex-wrap items-center gap-10'>
            <Reveal effect="fadeInUp" duration={1000} delay={500}>
                <div className='max-w-[40rem] w-full'>
                    <p className='text-3xl uppercase my-10 font-semibold  md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                        DESARROLLO WEB
                    </p>
                    <h2 className='text-panal-cyan text-2xl xl:text-5xl uppercase my-10'>
                        PÁGINAS WEB INMOBILIARIAS
                    </h2>
                    <span className="my-10 text-md xl:text-xl items-center justify-center text-gray-800">
                        Impulsa tu negocio inmobiliario, aumentando la presencia en internet con tu página web personalizada.
                    </span>
                    <Link to="FormWeb" spy={true} smooth={true} offset={-130} duration={1000}>
                        <div className="my-10">
                            <Button>CONOCE NUESTROS MODELOS</Button>
                        </div>
                    </Link>
                </div>
            </Reveal>

            <div>
                <Reveal keyframes={fadeInUp} delay={400} duration={1000}>
                    <Image src='https://res.cloudinary.com/dvdb33uyj/image/upload/v1684163844/Projects/accion-panal/img/services/png/pantalla_jz7spd.png' width="600" height="900" alt="img-models" />
                </Reveal>
            </div>

        </div>




    )
}

export default HeadWeb