import React, { useContext } from 'react';
import { UserContext } from '@/context/user/UserContext';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import Section from '@/components/Section/Section';
import WebDemosAuth from '@/components/PageSections/WebDemosAuth';
import ButtonPrimary from '@/components/Button/ButtonPrimary';

const WebDemos = () => {
  const { contextData } = useContext(UserContext);
  const [state] = contextData;

  return (
    <>
      <HeadPage>
        <title>Acción Panal | Web Demos</title>
      </HeadPage>

      <LayoutPage>
      <WebDemosAuth />

        {/* {state?.authUser?.length > 0 ? (
          <WebDemosAuth />
        ) : (
          <Section>
            <div className="h-96 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-center text-xl xl:text-2xl">
                  No cuentas con los requerimientos necesarios para acceder a
                  nuestras demos
                </h3>
                <p className="text-gray-600 mt-2">
                  Para acceder primero debes completar con el formulario de
                  solicitud
                </p>

                <ButtonPrimary
                  href="servicios/paginaWeb/#form-demos"
                  className="bg-amber-500 text-white cursor-pointer mt-10"
                >
                  Ir a Formulario
                </ButtonPrimary>
              </div>
            </div>
          </Section>
        )} */}
      </LayoutPage>
    </>
  );
};

export default WebDemos;
