import React, { useState } from 'react';
import PropertiesComp from '@/components/Properties/Properties';

const Properties = () => {
    const [isGrid, setIsGrid] = useState(true);
    const [isList, setIsList] = useState(false);
    return (
        <div id='propiedades-section'>
            <h2 className='mt-20'>Mis propiedades</h2>
            <PropertiesComp  {...{ isGrid, isList, setIsGrid, setIsList }} />
        </div>
    )

};

export default Properties;