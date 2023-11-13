import React, { useContext, useState } from 'react';
import Section from '@/components/Section/Section';
import { UserContext } from '@/context/user/UserContext';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import RequestDemoForm from './components/RequestDemoForm';
import Modal from '@/components/Modal/Modal';
import {
  demosAdvancedData,
  demosBasicData,
  demosLandingsData,
} from '../../../data/demos';
import Demos from './components/Demos';
import AdvancedDemos from './components/AdvancedDemos';
import LandingDemos from './components/LandingDemos';

const WebDemosAuth = () => {
  const { contextData } = useContext(UserContext);
  const [state] = contextData;
  const [selectedDemo, setSelectedDemo] = useState(false);
  const [selectedAdvancedDemo, setSelectedAdvancedDemo] = useState(false);
  const [selectedLandingDemo, setSelectedLandingDemo] = useState(false);
  const [showBasicDemoModal, setShowBasicDemoModal] = useState(false);

  const renderContent = () => (
    <RequestDemoForm
      {...{
        selectedDemo,
        selectedAdvancedDemo,
        selectedLandingDemo,
        selectedLandingDemo,
        state,
      }}
    />
  );

  return (
    <Section>
      {/* RENDERED BASIC DEMOS */}
      <Demos
        {...{
          selectedDemo,
          setSelectedDemo,
          selectedAdvancedDemo,
          demos: demosBasicData,
          title: 'Web DEMOS - Páginas estandar',
          subtitle: 'Elige y cotiza tu web estandar',
        }}
      />

      <div className="w-full flex justify-center items-center my-10">
        <ButtonPrimary
          onClick={() => setShowBasicDemoModal(true)}
          disabled={!selectedDemo}
          className={`${
            selectedDemo?.length > 0
              ? 'bg-amber-500 text-white cursor-pointer'
              : 'bg-amber-300 text-white cursor-default'
          }`}
        >
          Solicitar Demos
        </ButtonPrimary>
      </div>

      {/* RENDERED ADVANCED DEMOS */}
      <AdvancedDemos
        {...{
          selectedAdvancedDemo,
          setSelectedAdvancedDemo,
          selectedDemo,
          selectedLandingDemo,
          setSelectedLandingDemo,
          demos: demosAdvancedData,
          title: 'Web DEMOS - Páginas avanzadas',
          subtitle: 'Elige y cotiza tu web avanzada',
        }}
      />

      {/* RENDERED LANDING DEMOS */}
      {selectedAdvancedDemo ? (
        <LandingDemos
          {...{
            selectedLandingDemo,
            setSelectedLandingDemo,
            demos: demosLandingsData,
            title: 'Landing Pages',
            subtitle: 'Agrega tu Landing Page',
          }}
        />
      ) : null}

      <div className="w-full flex justify-center items-center my-10">
        <ButtonPrimary
          onClick={() => {
            setShowBasicDemoModal(true);
            // getAllDemosSelected();
          }}
          disabled={!selectedLandingDemo}
          className={`${
            selectedLandingDemo?.length > 0
              ? 'bg-amber-500 text-white cursor-pointer'
              : 'bg-amber-300 text-white cursor-default'
          }`}
        >
          Solicitar Demos
        </ButtonPrimary>
      </div>

      <Modal
        renderTrigger={() => null}
        isOpenProp={showBasicDemoModal}
        renderContent={renderContent}
        contentExtraClass="max-w-2xl"
        onCloseModal={() => {
          setShowBasicDemoModal(false);
          // getAllDemosSelected();
        }}
        modalTitle="Solicitar Demos"
      />
    </Section>
  );
};

export default WebDemosAuth;
