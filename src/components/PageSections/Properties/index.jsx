import React, { useState } from 'react';
import PropertiesComp from '@/components/Properties/Properties';
import PropertiesProvider from '@/context/properties/PropertiesProvider';

const Properties = () => {
    const [isGrid, setIsGrid] = useState(true);
    const [isList, setIsList] = useState(false);
    return (
        <div id='propiedades-section'>
            <PropertiesProvider>
                <PropertiesComp  {...{ isGrid, isList, setIsGrid, setIsList }} />
            </PropertiesProvider>
        </div>
    )

};

export default Properties;