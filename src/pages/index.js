import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import HomeComponent from '@/components/PageSections/Home/index.jsx';
import AboutComponent from '@/components/PageSections/About/index.jsx';

const Home = () => (
	<>
		<HeadPage>
			<title>Unne | Inicio</title>
		</HeadPage>

		<LayoutPage>
			<HomeComponent />
			<AboutComponent />
		</LayoutPage>
	</>
);

export default Home;
