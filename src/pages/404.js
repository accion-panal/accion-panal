import React from 'react'
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import NotFoundError from '@/components/NotFound404';

const NotFound = () => {
    return (
        <>
            <HeadPage>
                <title>Acción Panal | 404</title>
                <meta name="description" content="Descubre cómo Acción Panal revoluciona el corretaje inmobiliario en Chile con herramientas inteligentes impulsadas por inteligencia artificial y análisis de datos. Nuestro software innovador y soluciones avanzadas optimizan la labor del corredor, aportando un valor único y potenciando el éxito en el cambiante mercado inmobiliario. ¡Únete a la era digital y eleva tu rendimiento profesional con Acción Panal!" />
            </HeadPage>

            <LayoutPage>
                <NotFoundError />
            </LayoutPage>
        </>
    )
}

export default NotFound
