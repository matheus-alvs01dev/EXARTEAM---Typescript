import styled from "styled-components";
import TextLabel from "./TextLabel";
import { useState } from "react";
import DropDownList from "./DropDownList";
import Button from "../Button";
import { ISoldier } from "../../shared/interfaces/ISoldier";

interface FormsProps{
  onSoldierRegistred: (soldier: ISoldier) => void;
  patents: string[];
  bloodTypes: string[];
}

const SyledForms = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 4rem;
`;

const Forms = (props: FormsProps) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [patent, setPatent] = useState("");
  const [bloodType, setBloodType] = useState("");

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSoldierRegistred({
      name,
      bloodType,
      picture,
      patent,
    });
    setName("");
    setBloodType("");
    setPicture("");
    setPatent("");
  };

  return (
    <SyledForms onSubmit={onSave}>
      <TextLabel
        required={true}
        label="Nome"
        placeholder="Nome do Guerreiro"
        value={name}
        onChange={(value) => setName(value)}
      />

      <DropDownList
        required={true}
        label="Tipo Sanguineo"
        value={bloodType}
        items={props.bloodTypes}
        onChange={(value) => setBloodType(value)}
      />

      <TextLabel
        label="Foto"
        placeholder="Url da imagem do combatente"
        value={picture}
        onChange={(value) => setPicture(value)}
      />

      <DropDownList
        required={true}
        label="Patente"
        value={patent}
        items={props.patents}
        onChange={(value) => setPatent(value)}
      />

      <Button>Criar Card</Button>
    </SyledForms>
  );
};

export default Forms;
