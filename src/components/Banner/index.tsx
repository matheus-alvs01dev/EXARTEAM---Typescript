import styled from "styled-components";

interface BannerProps {
  imageBanner: string;
  titleBanner: string;
  subtitleBanner: string;
}

interface StyledBannerProps {
    $imageBanner: string; 
  }


const StyledBanner = styled.div<StyledBannerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${(props) => `url(${props.$imageBanner})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  width: 100vw;
  min-height: 50vh;
  max-width: 1920px;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
`;
const StyledBannerTitle = styled.h1`
  font-size: 8rem;
  font-weight: auto;
  text-align: center;
  text-transform: uppercase;
  color: var(--whiteGray);
`;
const StyledBannerSubtitle = styled.h2`
  font-family: OpenSanslight;
  font-size: 2rem;
  font-weight: auto;
  text-align: center;
  letter-spacing: 0.5rem;
  color: var(--whiteGray);
`;


const Banner = ({ imageBanner, titleBanner, subtitleBanner }: BannerProps) => {
  return (
    <StyledBanner $imageBanner={imageBanner}>
      <StyledBannerTitle>{titleBanner}</StyledBannerTitle>
      <StyledBannerSubtitle>{subtitleBanner}</StyledBannerSubtitle>
    </StyledBanner>
  );
};

export default Banner;
