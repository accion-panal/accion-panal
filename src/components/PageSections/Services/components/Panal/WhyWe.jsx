import React from 'react';
import Image from 'next/image'
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import { iconsList } from '@/components/icons';
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

const WhyWe = () => {
    /* Iconos a ocupar */
    const {
        MdWeb,
        BsPersonCircle,
        MdDevices,
        FaCogs,
        GiProgression,
        IoIosPeople,

    } = iconsList;

    return (
        <div className='justify-center items-center mt-20'>
            <div className='flex justify-center items-center'>
                <Reveal effect="fadeInUp" duration={1000} delay={500}>
                    <div className='max-w-[1300px] w-full'>

                        <HeadingSection
                            title="¿Por Qué unirte a nuestra plataforma?"
                            subtitle=""
                            alignment="center"
                            color="violet"
                        />
                    </div>
                </Reveal>
            </div>



            <div className='flex justify-center items-center w-full'>
                <div className='grid gap-8 max-w-[1300px]'>
                    <Reveal effect="fadeInUp" duration={1000} delay={500}>
                        <div className='flex justify-center items-center gap-8 flex-wrap'>

                            <div className='flex flex-auto items-center justify-center'>

                                <Image src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1684163558/Projects/accion-panal/img/services/png/laptop_ror73c.png" alt="Displays" width="550" height="600" />

                            </div>



                            <div className="xl:w-[50%] w-full mx-4 h-50 bg-white shadow-2xl rounded-3xl overflow-hidden hover:scale-105 transition duration-500">

                                <div className="px-5 py-4 flex items-center justify-center">
                                    <h2 className="text-lg font-bold text-center">Diseño</h2>
                                </div>
                                <div className="px-4 py-2 flex ">
                                    <div className="flex items-center ml-2 ">
                                        <div className="text-2xl ">
                                            <MdWeb size="4rem" color='#489F94' />
                                        </div>
                                    </div>
                                    <div className="ml-6 px-4 py-4">
                                        <p className="text-gray-700 whitespace-pre-line">Te ofrecemos una experiencia al usuario única,
                                            ya que contamos con una interfaz intuitiva y fácil de usar para que no pierdas tiempo publicando.</p>
                                    </div>
                                </div>

                                <div className="px-4 py-2 flex">
                                    <div className="flex items-center ml-2">
                                        <div className="text-2xl">
                                            <BsPersonCircle size="4rem" color='#489F94' />
                                        </div>
                                    </div>
                                    <div className="ml-6 px-4 py-4">
                                        <p className="text-gray-700 whitespace-pre-line">Contarás con un usuario para que puedas ingresar a nuestra plataforma
                                            Y un vendedor que permitirá el contacto directo entre los clientes potenciales y tú.</p>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className='flex justify-center items-center gap-4 flex-wrap'>
                            <div className="xl:w-[50%] w-full mx-4 h-50 bg-white shadow-2xl rounded-3xl overflow-hidden order-2 md:order-1 hover:scale-105 transition duration-500">
                                <div className="px-5 py-4 flex items-center justify-center">
                                    <h2 className="text-lg font-bold text-center">Funcionalidad</h2>
                                </div>
                                <div className="px-4 py-2 flex">
                                    <div className="flex items-center ml-2">
                                        <div className="text-2xl">
                                            <MdDevices size="4rem" color='#489F94' />
                                        </div>
                                    </div>
                                    <div className="ml-6 px-4 py-4">
                                        <p className="text-gray-700 whitespace-pre-line">¡Administra tu cartera y clientes desde cualquier lugar! Nuestra plataforma es compatible
                                            con todos los dispositivos</p>
                                    </div>
                                </div>

                                <div className="px-4 py-2 flex">
                                    <div className="flex items-center ml-2">
                                        <div className="text-2xl">
                                            <FaCogs size="4rem" color='#489F94' />
                                        </div>
                                    </div>
                                    <div className="ml-6 px-4 py-4">
                                        <p className="text-gray-700 whitespace-pre-line">Automatiza tus tareas y mejora tu rendimiento para poder dedicar más tiempo al cierre de negocios.</p>
                                    </div>
                                </div>


                                <div className="px-4 py-2 flex">
                                    <div className="flex items-center ml-2">
                                        <div className="text-2xl">
                                            <GiProgression size="4rem" color='#489F94' />
                                        </div>
                                    </div>
                                    <div className="ml-6 px-4 py-4">
                                        <p className="text-gray-700 whitespace-pre-line">Nuestro sistema te permitirá obtener estadísticas en tiempo real
                                            de tus publicaciones, para medir el rendimiento.</p>
                                    </div>
                                </div>

                                <div className="px-4 py-2 flex">
                                    <div className="flex items-center ml-2">
                                        <div className="text-2xl">
                                            <IoIosPeople size="4rem" color='#489F94' />
                                        </div>
                                    </div>
                                    <div className="ml-6 px-4 py-4">
                                        <p className="text-gray-700 whitespace-pre-line">Aumenta tu cartera y las consultas de clientes potenciales con nuestro software inmobiliario desarrollado
                                            con inteligencia artificial y análisis de datos, para conseguir clientes similares a los de tu publicación.</p>
                                    </div>
                                </div>

                            </div>


                            <div className='flex flex-auto items-center justify-center order-1 md:order-2'>
                                <Image src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1684163558/Projects/accion-panal/img/services/png/laptop_ror73c.png" alt="Displays" width="600" height="600" />
                            </div>


                        </div>
                    </Reveal>
                </div>
            </div >


        </div >
    )
}

export default WhyWe