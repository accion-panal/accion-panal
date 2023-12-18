import React from 'react'
import { iconsList } from '@/assets/icons'

const InfoSection = ({ data }) => {
  const {
    RiPencilRulerLine,
    FaBed,
    FaBath,
    BsFillCalendarCheckFill,
    GiHomeGarage,
    BsCheckCircle,
  } = iconsList;
  return (
    <div className='w-full lg:w-2/3 p-4 xl:p-8'>
      <div className="">
        <p className="text-lg font-medium">Código de la Propiedad:{' '}<span className='text-primary'>{data.id}</span> </p>
      </div>
      <hr className='my-4' />
      <div className="">
        <h2 className="text-lg font-bold">Título</h2>
        <p className="text-gray-600 mt-2">
          {data.title}
        </p>
      </div>
      <div className="my-7">
        <h2 className="text-lg font-bold">Descripción</h2>
        <p className="text-gray-600 mt-2">
          {data.description}
        </p>
      </div>
      <h2 className='text-lg font-bold'>Características</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2'>
        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-1">
          <span className="text-primary mr-1">
            <RiPencilRulerLine className='xl:w-[38px]' />
          </span>
          <div>
            Superficie útil: {data.surface_m2}m<sup>2</sup> útiles
          </div>

        </div>

        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-2">
          <span className="text-primary mr-1">
            <FaBath className='xl:w-[38px]' />
          </span>
          Baños: {data.bathrooms}
        </div>

        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-6 lg:order-3">
          <span className="text-primary mr-1">
            <BsFillCalendarCheckFill className='xl:w-[38px]' />
          </span>
          Fecha de entrega: {'Pendiente'}
        </div>

        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-4">
          <span className="text-primary mr-1">
            <FaBed className='xl:w-[38px]' />
          </span>
          Dormitorios: {data.bedrooms}
        </div>

        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-5">
          <span className="text-primary mr-1">
            <GiHomeGarage className='xl:w-[38px]' />
          </span>
          Estacionamientos: {data.coveredParkingLots}
        </div>

        <div className="flex items-center w-full my-1 text-gray-700 text-base font-medium order-6">
          <span className="text-primary mr-1">
            <BsCheckCircle className='xl:w-[38px]' />
          </span>
          Estado del proyecto: Activa
        </div>

      </div>
    </div>
  )
}

export default InfoSection
