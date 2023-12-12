import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import HomeComponent from '@/components/PageSections/Home/index.jsx';

const Home = () => (
  <>
    <HeadPage>
      <title>Acción Panal | Inicio</title>
    </HeadPage>

    <LayoutPage>
      <HomeComponent />
    </LayoutPage>
  </>
);

export default Home;
