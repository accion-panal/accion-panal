import HeadPage from '@/components/HeadPage/HeadPage'
import LayoutPage from '@/components/LayoutPage/LayoutPage'
import AboutComponent from '@/components/PageSections/About/index.jsx';
import React from 'react'

const nosotros = () => {
    return (
        <>
            <HeadPage>
                <title>Acción Panal | Nosotros</title>
                <meta name="description" content="Descubre cómo Acción Panal revoluciona el corretaje inmobiliario en Chile con herramientas inteligentes impulsadas por inteligencia artificial y análisis de datos. Nuestro software innovador y soluciones avanzadas optimizan la labor del corredor, aportando un valor único y potenciando el éxito en el cambiante mercado inmobiliario. ¡Únete a la era digital y eleva tu rendimiento profesional con Acción Panal!" />
            </HeadPage>
            <LayoutPage>
                <AboutComponent />
            </LayoutPage>
        </>
    )
}

export default nosotros
