'use client';

import React from 'react';

import { List } from '../../common/List/List';
import { Section } from '../../common/Section/Section';
import { Background } from '../../common/Background/Background';
import { PatientInfoStyles } from './PatientInfo.styles';
import { HeartIcon } from '../../common/Icons/HeartIcon';

interface PatientInfoProps {
  id: string;
}

const PatientInfo: React.FC<PatientInfoProps> = () => {
  const name = 'Piotr';
  const surname = 'Kowalski';
  const age = 12;
  const bloodType = 'A+';
  const allergies = ['Orzechy', 'Penicylina'];
  const medications = ['Aspiryna', 'Ibuprofen'];
  const medicalHistory = ['Astma', 'Padaczka', 'Cukrzyca'];
  const contactTelephone = '+48 123 456 789';
  const story =
    'Piotr Kowalski, 12-letni chłopiec, przychodzi na wizytę kontrolną z powodu swojej astmy, padaczki oraz cukrzycy, które wymagają stałej opieki medycznej. Chłopiec przyjmuje leki takie jak aspiryna i ibuprofen, aby złagodzić objawy, jednak ostatnio miał kilka napadów padaczkowych, co niepokoi jego rodziców. Piotr ma również alergie na orzechy oraz penicylinę, co trzeba uwzględnić przy ewentualnym leczeniu. Jego grupa krwi to A+, co jest ważną informacją w razie konieczności transfuzji. Rodzice Piotra starają się regularnie monitorować jego stan zdrowia i dostosowywać leczenie do zmieniających się potrzeb.';

  return (
    <PatientInfoStyles>
      <Background />
      <Section name="patient" SectionImage={HeartIcon} align="left">
        <h2>
          {name} {surname}
        </h2>
        <p className="info-box">
          Telefon do opiekuna: <span>{contactTelephone}</span>
        </p>
        <p className="info-box">
          Wiek pacjenta: <span>{age} lat</span>
        </p>
        <p className="info-box">
          Grupa krwi <span>{bloodType}</span>
        </p>
        <p className="story-box">{story}</p>
        <p className="list-box">Alergie</p>
        <List elements={allergies} />
        <p className="list-box">Leki</p>
        <List elements={medications} />
        <p className="list-box">Choroby</p>
        <List elements={medicalHistory} />
      </Section>
    </PatientInfoStyles>
  );
};

export { PatientInfo };
