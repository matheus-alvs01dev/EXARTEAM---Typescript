import styled from "styled-components";

interface DropDownListProps{
  onChange: (value: string) => void;
  label: string;
  required: boolean;
  value:string;
  items: string[];
}

const StyledDropDown = styled.div`
  margin: 24px 0;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    font-family: MonumentUltraBold;
    color: var(--whiteGray);
  }

  select {
    background-color: var(--whiteGray);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    color: var(--blackGray);
    &:focus {
      border-color: var(--whiteGray);
      border: 2px;
    }
  }
`;

const DropDownList = (props: DropDownListProps) => {
    
    const onSelect = (event:  React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange(event.target.value)
    }

  return (
    <StyledDropDown>
      <label>{props.label}</label>
      <select
        onChange={onSelect}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </StyledDropDown>
  );
};

export default DropDownList;
