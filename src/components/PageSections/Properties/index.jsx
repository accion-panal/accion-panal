import React, { useState } from 'react';
import PropertiesComp from '@/components/Properties/Properties';
import PropertiesProvider from '@/context/properties/PropertiesProvider';
import SelectsProvider from '@/context/selects/SelectProvider';

const Properties = () => {
    const [isGrid, setIsGrid] = useState(true);
    const [isList, setIsList] = useState(false);
    return (
        <div id='propiedades-section'>
            <SelectsProvider>
                <PropertiesProvider>
                    <PropertiesComp  {...{ isGrid, isList, setIsGrid, setIsList }} />
                </PropertiesProvider>
            </SelectsProvider>

        </div>
    )

};

export default Properties;