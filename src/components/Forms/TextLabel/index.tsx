import styled from "styled-components";

interface TextLabelProps {
  onChange: (value: string) => void;
  placeholder: string;
  label:string;
  value: string;
  required?: boolean;
}

const StyledTextLabel = styled.div`
  margin: 24px 0;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 24px;
    font-family: MonumentUltraBold;
    color: var(--whiteGray);
  }

  input {
    background-color: var(--whiteGray);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
    width: 100%;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
    &:focus {
      border-color: var(--whiteGray);
      border: 2px;
    }
  }
`;

const TextLabel = ({onChange, placeholder, label, value, required = false} :TextLabelProps) => {
  const Placeholder = `${placeholder}...`;

  const onType = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyledTextLabel>
      <label>{label}</label>
      <input
        value={value}
        onChange={onType}
        placeholder={Placeholder}
        required={required}
      />
    </StyledTextLabel>
  );
};

export default TextLabel;
