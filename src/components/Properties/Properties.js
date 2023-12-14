import React, { useContext, useState } from 'react';
import { Link } from 'next/link';
import { PropertiesContext } from '../../context/properties/PropertiesContext';
import PropertiesTop from '../../components/Navigation/PropertiesTop';
import PropertyCard from './components/PropertyCard';
import Pagination from '../paginations';
import AdvancedSearch from '../../components/Form/AdvancedSearch';
// import Spinner from '../../../Spinner/Spinner';
/* import NotFound from '../../../Message/NotFound'; */
import { iconsList } from '../../components/icons';
// import styles from '../../../../styles/components/OutstandingProject/OutstandingProject.module.css';
import { truncateStringSmall } from '../../utils/index';
import { company } from '../../constants/consts/company';

const PropertiesComp = ({ isList, setIsList, isGrid, setIsGrid }) => {
  const { contextData } = useContext(PropertiesContext);
  const {
    properties,
    allProperties,
    setProperties,
    propertiesToShow,
    setPropertiesToShow,
    page,
    totalPages,
    totalItems,
    handlePageChange,
    isLoading,
    notFoundMsg,
  } = contextData;
  const { RiArrowDownSLine } = iconsList;
  const [showMore, setShowMore] = useState(false);
  const [isOpenForm, setIsOpenForm] = useState(true);
  const { MdOutlineFilterList, MdOutlineFilterListOff } = iconsList;

  const showMoreProperties = () => {
    const propiedadesActuales = propertiesToShow.length;
    const nuevasPropiedades = allProperties.slice(
      propiedadesActuales,
      propiedadesActuales + 10
    );
    setPropertiesToShow([...propertiesToShow, ...nuevasPropiedades]);

    if (propiedadesActuales + 10 >= allProperties.length) {
      setShowMore(false);
    }
  };

  const handleToggleForm = () => setIsOpenForm(!isOpenForm);

  const seeLessProperties = () => {
    setPropertiesToShow(allProperties.slice(0, 10));
    setShowMore(true);
  };

  const outstandingProperties = propertiesToShow.filter(
    (property) => property.highlighted === true
  );

  return (
    <React.Fragment>
      <div className="flex relative flex-col w-[100%] max-w-[1460px] mx-auto my-14">
        <PropertiesTop
          {...{
            totalItems,
            page,
            isGrid,
            setIsGrid,
            isList,
            setIsList,
            properties,
          }}
        />
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-4/5 bg-white mb-48">

            <ul
              className={`${isGrid
                ? 'grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-2'
                : 'flex flex-col gap-3'
                }`}
            >
              {properties.map((character) => (
                <PropertyCard
                  key={character.id}
                  data={character}
                  isList={isList}
                />
              ))}
            </ul>

            <div>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          <div className="w-full md:w-1/5 bg-white border ml-0 xl:ml-2">
            <button
              onClick={handleToggleForm}
              className="bg-gray-100 w-full mx-auto p-2 hover:bg-gray-200 border-b"
            >
              {/* {isOpenForm ? (
                <span className="flex items-center justify-center text-sm">
                  <MdOutlineFilterListOff className="pr-1 text-xl" />
                  Ocultar filtros
                </span>
              ) : (
                <span className="flex items-center justify-center text-sm">
                  <MdOutlineFilterList className="pr-1 text-xl" />
                  Mostrar filtros
                </span>
              )} */}
            </button>
            {/* <AdvancedSearch {...{ setProperties }} /> */}
            {/* {isOpenForm && <AdvancedSearch {...{ setProperties }} />} */}

            {/*  <div className="p-5 mb-20">
              <h3 className="bg-gray-50 p-2 text-gray-800">
                Proyectos destacados
              </h3>

              <ul className="flex w-[100%] flex-wrap relative">
                {outstandingProperties?.map((propiedad) => (
                  <a
                    key={propiedad.id}
                    href={`/propiedades/${propiedad?.id}?statusId=${company.statusId}&companyId=${company.companyId}`}
                    className={`relative h-[145px] text-white text-xs w-[45%] sm:w-[47.5%] lg:w-[45%] xl:w-[45%] m-1`}
                  >
                    <img
                      src={
                        'https://http2.mlstatic.com/D_NQ_NP_911655-MLC69020961065_042023-O.webp'
                      }
                      alt={`imagen-${propiedad?.title}`}
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        height: '100px',
                        width: '100%',
                      }}
                    />
                    <p >
                      {truncateStringSmall(
                        propiedad.title || 'Propiedad sin titulo registrado'
                      ) || ''}
                    </p>
                    <span className="bg-primary mt-[40px] absolute p-[1.5px] px-3 -top-[25px] w-auto rounded-full">
                      Cod: {propiedad.id}
                    </span>
                  </a>
                ))}
              </ul>

              <div className="flex items-center bg-white mt-4">
                <div className="flex-1 border-b bg-white border-gray-200"></div>
                <button onClick={showMoreProperties} className="relative">
                  {showMore && (
                    <div className="h-11 w-11 rounded-full bg-white border border-gray-200 text-gray-400 hover:text-white hover:bg-primary cursor-pointer flex items-center justify-center">
                      <RiArrowDownSLine className="text-2xl" />
                    </div>
                  )} 
                </button>
                <button onClick={seeLessProperties} className="relative">
                  {!showMore && propertiesToShow.length >= 10 && (
                    <div className="h-11 w-11 rounded-full bg-bg-transparent border border-gray-200 text-gray-400 hover:text-white hover:bg-primary cursor-pointer flex items-center justify-center">
                      <RiArrowDownSLine className="text-2xl rotate-180" />
                    </div>
                  )}
                </button>
                <div className="flex-1 border-b border-gray-200"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PropertiesComp;
