import styled from "styled-components";
import { ISoldier } from "../../shared/interfaces/ISoldier";
import Soldier from "../Soldier";

interface PatentProps{
  primaryColor: string;
  secondaryColor: string;
  name: string;
  soldiers: ISoldier[];
}

const PatentSection = styled.section`
  text-align: center;
  padding: 32px;

  h3 {
    font-size: 32px;
    border-bottom: 4px solid;
    display: inline-block;
    padding-bottom: 8px;
  }
`;

const SoldiersDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  flex-wrap: wrap;
`;

const Patent = (props: PatentProps) => {
  const css = { backgroundColor: props.secondaryColor };

  return props.soldiers.length > 0 ? (
    <PatentSection style={css}>
      {" "}
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <SoldiersDiv>
        {props.soldiers.map((soldier) => (
          <Soldier
            bgColor={props.primaryColor}
            key={soldier.name}
            name={soldier.name}
            bloodType={soldier.bloodType}
            picture={soldier.picture}
          />
        ))}
      </SoldiersDiv>
    </PatentSection>
  ) : <></>
};

export default Patent;
