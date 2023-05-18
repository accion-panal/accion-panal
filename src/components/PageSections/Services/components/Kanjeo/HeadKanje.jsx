import React from 'react'
import Image from 'next/image';
import Button from '@/components/Button/Button';
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


function HeadKanje() {
    return (
        <div className='flex justify-center flex-wrap items-center gap-10'>
            <Reveal effect="fadeInUp" duration={1000} delay={500}>
                <div className='max-w-[40rem] w-full'>
                    <p className='text-3xl uppercase my-10 font-semibold  md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                        SISTEMA AVANZADO DE CANJE
                    </p>
                    <h2 className='text-panal-cyan text-2xl xl:text-5xl uppercase my-10'>
                        YO CANJEO
                    </h2>
                    <span className="my-10 text-md xl:text-xl items-center justify-center text-gray-800">
                        Búsqueda inteligente para conseguir la propiedad adecuada o al cliente interesado en comprar y arrendar
                    </span>
                    <Link to="FormCanje" spy={true} smooth={true} offset={-130} duration={1000}>
                        <div className="my-10">
                            <Button>CONOCE MÁS DE YO CANJEO</Button>
                        </div>
                    </Link>
                </div>
            </Reveal>
            <div>
                <Reveal keyframes={fadeInUp} delay={300} duration={600}>
                    <Image src='https://res.cloudinary.com/drd52d73n/image/upload/v1683216056/Panal/imageCanje.png' width="600" height="900" alt="img-yo-kanjeo" />
                </Reveal>
            </div>
        </div>



    )
}

export default HeadKanje