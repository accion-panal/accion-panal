import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import GalleryCarousel from '../Carousel/ImageGallery/GalleryCarousel';
import InfoSection from '../Modal/InfoSection';
import { company } from '@/constants/consts/company';
import PropertiesServices from '@/services/PropertiesServices';
import { HeadPageMeta } from '../HeadPage/HeadPage';

import MapBoxContainer from '../MapBox';

const PropertiesDetails = () => {
  const [dataProperty, setDataProperty] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const propertyId = parseInt(id, 10);
      if (!isNaN(propertyId)) {
        PropertiesServices.getProperty(propertyId, 1, company.companyId)
          .then(data => {
            setDataProperty(data);
            console.log('Data property:', data);
          })
          .catch(error => console.error('Error fetching property:', error));
      }
    }
  }, [id]);

  if (!id || dataProperty === '') {
    return <p>Loading...</p>;
  }

  return (
    <>
      <HeadPageMeta
        title={dataProperty?.title}
        description={dataProperty?.description}
        url={`https://accionpanal.cl/propiedades/${id}/`}
        imageUrl={dataProperty?.images[0]}
        titleMain={`Acción Panal | Propiedad: ${dataProperty?.id}`}
        descriptionMain={'Propiedad del banco de canje de Acción Panal'}
      />
      <div className="flex relative flex-col w-[100%] max-w-[1400px] mx-auto my-14">
        <div className={`text-center mx-auto w-[95%] md:w-[90%] xl:w-[80%] mb-5`}>
          <h1
            className={`text-teal-500 uppercase text-2xl xl:text-4xl font-bold my-2 py-2 border-b-4 border-amber-400`}
          >
            Detalle de la propiedad
          </h1>
        </div>
        <GalleryCarousel propertyImage={dataProperty.images} />
        <div className="mt-2 flex lg:flex-row flex-col w-full">
          <InfoSection data={dataProperty} />
          <div className='lg:w-1/3 border border-gray-200 bg-white rounded-2xl group  relative'>
            <div className={`py-8 lg:py-16 px-4 lg:px-8 mx-auto max-w-screen-md relative z-0 transition-all duration-300 ${isRegister ? '' : 'group-hover:blur-sm'}`}>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contacto</h2>
              <form action="#" className="space-y-8">
                <div>
                  <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                  <input type="email" id="nombre" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Escriba su nombre..." required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                  <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="ej: name@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 ">Asunto</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Permítenos saber en qué te podemos ayudar" required />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 ">Mensaje</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Deja un comentario..."></textarea>
                </div>
                <div className='flex justify-center'>
                  <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-opacity focus:ring-4 focus:outline-none focus:ring-primary">Enviar Mensaje</button>
                </div>
              </form>
            </div>

            {isRegister ? '' : (
              <div className='z-10 absolute h-full w-full top-0 left-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100'>
                <div className='py-12 px-8 text-center md:py-[60px] md:px-[70px]'>
                  <h3 className="text-black pb-2 text-xl font-bold sm:text-2xl">Cuenta Requerida</h3>
                  <span className="bg-primary mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
                  <p className="text-gray-600 mb-10 text-base leading-relaxed">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-primary border-primary block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-80">Iniciar Sesión</button>
                    <button className="text-black block w-full rounded-lg border border-gray-700 p-3 text-center text-base font-medium transition hover:border-primary hover:bg-primary hover:text-white">Registrarse</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-2">
          <h2 className='text-xl xl:text-2xl uppercase font-semibold my-9 mx-3 md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-primary'>
            UBICACIÓN DE LA PROPIEDAD
          </h2>
          <MapBoxContainer LngLat={dataProperty.LngLat} />
        </div>
      </div>
    </>

  )
}

export default PropertiesDetails
