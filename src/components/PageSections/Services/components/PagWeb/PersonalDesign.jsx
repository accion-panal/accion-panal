import React from 'react'
import HeadingSection from '@/components/HeadingSection/HeadingSection'
import Image from 'next/image'
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

function PersonalDesign() {
    return (
        <div className='justify-center items-center mt-20'>
            <Reveal effect="fadeInUp" duration={1000} delay={500}>
                <div className='flex justify-center items-center w-full'>
                    <div className='grid gap-8 max-w-[1400px]'>
                        <div className='flex justify-center items-center gap-8 flex-wrap'>
                            <div className='flex flex-auto items-center justify-center order-2 md:order-1'>
                                <Image src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1684163966/Projects/accion-panal/img/services/png/dise%C3%B1o_lowlok.png" alt="Displays" width="600" height="700" />
                            </div>

                            <div className="xl:w-[50%] w-full mx-4 bg-white shadow-2xl rounded-3xl overflow-hidden hover:scale-105 transition duration-500 order-1 md:order-2">


                                <div className="px-10 py-10 flex items-center justify-center ">
                                    <h2 className="text-3xl font-bold text-center ">DISEÑO PERSONALIZADO</h2>
                                </div>
                                <div className="px-6 py-10 flex ">
                                    <div className="ml-6 px-4">
                                        <p className="text-gray-700 text-3xl whitespace-pre-line">Únete con nosotros a la era digital, impulsa tu marca inmobiliaria con tu sitio web personalizado.
                                            Combina tus colores favoritos y transmite a tu público objetivo el significado de tu empresa.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </Reveal>


        </div>
    )
}

export default PersonalDesign