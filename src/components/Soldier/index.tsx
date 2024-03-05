import styled from "styled-components";

interface SoldierProps{
  name: string;
  picture: string;
  bloodType: string;
  bgColor: string;
}

interface CardHeaderProps{
  $bgColor: string; 
}

const StyledCard = styled.div`
  width: 280px;
`;

const CardHeader = styled.div<CardHeaderProps>`
  background-color: ${(props)=>props.$bgColor};
  border-radius: 10px 10px 0px 0px;
`;

const SoldierFooter = styled.footer`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;

  h4 {
    color: #6278f7;
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  h5 {
    font-size: 18px;
    line-height: 22px;
    color: #212121;
    padding: 0 16px;
  }
`;

const SoldierImg = styled.img`
  width: 100px;
  border-radius: 50%;
  position:relative;
  bottom: -50px;
`;

const Soldier = ({ name, picture, bloodType, bgColor }: SoldierProps) => {
  return (
    <StyledCard>
      <CardHeader $bgColor={bgColor}>
        <SoldierImg src={picture} alt={name} />
      </CardHeader>
      <SoldierFooter>
        <h4>{name}</h4> <h5>{bloodType}</h5>
      </SoldierFooter>
    </StyledCard>
  );
};

export default Soldier;
