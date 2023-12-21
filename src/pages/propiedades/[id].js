import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import PropertiesDetails from '@/components/Properties/PropertiesDetails';

const PropiedadesId = () => {
  return (
    <>
      {/* <HeadPage>
        <title>Acción Panal | Propiedades</title>
      </HeadPage> */}
      <LayoutPage>
        <PropertiesDetails />
      </LayoutPage>
    </>
  );
};

export default PropiedadesId;
