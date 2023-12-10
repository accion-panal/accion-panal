import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';

import PropsComponent from '@/components/PageSections/Properties/index.jsx';

const propiedades = () => {
  return (
    <>
      <HeadPage>
        <title>Acción Panal | Propiedades</title>
      </HeadPage>
      <LayoutPage>
        <PropsComponent />
      </LayoutPage>
    </>
  );
};

export default propiedades;
