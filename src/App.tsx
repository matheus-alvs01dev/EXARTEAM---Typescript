import Banner from "./components/Banner";
import styled from "styled-components";
import imageBanner from "/src/assets/banner.jpg";
import Forms from "./components/Forms";
import { useState } from "react";
import Patent from "./components/Patent";
import { ISoldier } from "./shared/interfaces/ISoldier";

const GradientBg = styled.div`
  background: linear-gradient(
    174.61deg,
    #0f0f10 4.16%,
    #1a1a1b 48%,
    #111111 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1920px;
  margin: 0;
  max-width: 100%;
`;
const BodyContainer = styled.div`
  width: 1920px;
  margin: 0 auto;
  max-width: 100%;
`;

const App = () => {
  const BloodType = [
      {name: "A+"},
      {name: "A-"},
      {name: "B+"},
      {name: "B-"},
      {name: "AB+"},
      {name: "AB-"},
      {name: "O+"},
      {name: "O-"},
    
  ];

  const patents = [
    {
      name: "Subtenente(s)",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Primeiro(s) Sargento(s)",
      primaryColor: "#094418",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Segundo(s) Sargento(s)",
      primaryColor: "#284930",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Terceiro(s) Sargento(s)",
      primaryColor: "#37453b",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Cabo(s)",
      primaryColor: "#2a2f2c",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Soldado(s)",
      primaryColor: "#2b2b2b",
      secondaryColor: "#D9F7E9",
    },
  ];

  const [soldiers, setSoldiers] = useState<ISoldier[]>([]);

  const onNewSoldierAdded = (soldier: ISoldier) => {
    setSoldiers([...soldiers, soldier])
  }

  return (
    
    <GradientBg>
      <AppContainer>
        <Banner
          imageBanner={imageBanner}
          titleBanner="ExarTeam"
          subtitleBanner="Os Melhores Esquadões do Exêrcito Brasileiro"
        />

        <BodyContainer>
          <Forms patents={patents.map((patent) => patent.name)} bloodTypes={BloodType.map((type) => type.name)} onSoldierRegistred={soldier  => onNewSoldierAdded(soldier)}/>
          {patents.map(patent => <Patent
            key={patent.name}
            name={patent.name}
            primaryColor={patent.primaryColor}
            secondaryColor={patent.secondaryColor}
            soldiers={soldiers.filter(soldier => soldier.patent === patent.name)}/>)}
        </BodyContainer>
      </AppContainer>
    </GradientBg>
  );
};

export default App;
