import styled from "@emotion/styled";
import Container from "./StyleContainer";

export const LifeStyleContainer = styled(Container)`
   padding-top: 2rem;
`;

export const Title = styled.p`
   text-align: center;
   font-size: 3.4rem;
   margin: 3rem 0;
   color: #333333;
`;

export const Des = styled.p`
   padding: 3rem 0 1rem;
   text-align: center;
   line-height: 1.6;
   position: relative;
   &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 15rem;
      height: 0.2rem;
      background-color: #333333;
   }
`;

export const Video = styled.div`
   margin: 2rem auto 0;
   width: 100%;
   height: 0;
   position: relative;
   padding-bottom: 50.25%;
   @media only screen and (max-width: 960px) {
      margin-bottom: 8rem;
      padding-bottom: 56.25%;
   }
`;

export const Iframe = styled.iframe`
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   transition: all.35s linear;
   @media only screen and (max-width: 960px) {
      width: 100%;
      height: 100%;
   }
`;
