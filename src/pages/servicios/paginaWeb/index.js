import React from 'react'
import HeadPage from '@/components/HeadPage/HeadPage'
import LayoutPage from '@/components/LayoutPage/LayoutPage'
import Section from '@/components/Section/Section.jsx';
import HeadWeb from '@/components/PageSections/Services/components/PagWeb/HeadWeb.jsx';
import PersonalDesign from '@/components/PageSections/Services/components/PagWeb/PersonalDesign.jsx';
import BeneficWeb from '@/components/PageSections/Services/components/PagWeb/BeneficWeb.jsx';
import WebPageQuotation from '@/components/PageSections/WebPageQuotation';

const paginaWeb = () => {
    return (
        <>
            <HeadPage>
                <title>Acción Panal | Página web</title>
                <meta name="description" content="Descubre cómo Acción Panal revoluciona el corretaje inmobiliario en Chile con herramientas inteligentes impulsadas por inteligencia artificial y análisis de datos. Nuestro software innovador y soluciones avanzadas optimizan la labor del corredor, aportando un valor único y potenciando el éxito en el cambiante mercado inmobiliario. ¡Únete a la era digital y eleva tu rendimiento profesional con Acción Panal!" />
            </HeadPage>

            <LayoutPage>
                <div id='pagina-web-services'>
                    <Section>
                        <HeadWeb></HeadWeb>
                        <PersonalDesign></PersonalDesign>
                        <BeneficWeb></BeneficWeb>

                    </Section>
                    <WebPageQuotation></WebPageQuotation>
                </div>
            </LayoutPage>
        </>
    )
}

export default paginaWeb