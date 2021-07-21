import styled from "@emotion/styled";
import Container from "./StyleContainer";
import Wrapper from "./StyleWrapper";
import { Phone, MapMarkerAlt, Envelope } from "@emotion-icons/fa-solid";

export const FooterWrapper = styled(Wrapper)`
   background-color: #212121;
`;

export const FooterContainer = styled(Container)`
   padding-top: 1.5rem;
   padding-bottom: 3rem;
   display: flex;
   flex-wrap: wrap;
`;

export const Title = styled.p`
   font-size: 1.6rem;
   text-transform: uppercase;
   margin-bottom: 0.5rem;
   font-weight: 700;
   color: #c7572b;
   line-height: 3;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const Link = styled.span`
   line-height: 1.6;
   color: #999999;
   transition: all 0.25s linear;
   &:hover {
      color: #c7572b;
   }
`;

export const List = styled.ul``;

export const Item = styled.li`
   margin-bottom: 1rem;
   display: flex;
   align-items: center;
`;

export const PhoneIcon = styled(Phone)`
   margin-right: 1rem;
   width: 1.5rem;
   color: #c7572b;
   vertical-align: sub;
`;

export const MapMarkerAltIcon = styled(MapMarkerAlt)`
   margin-right: 1rem;
   width: 1.5rem;
   color: #c7572b;
   margin-bottom: 0.1rem;
   vertical-align: sub;
`;

export const EnvelopeIcon = styled(Envelope)`
   margin-right: 1rem;
   width: 1.5rem;
   color: #c7572b;
   margin-bottom: 0.1rem;
   vertical-align: sub;
`;

export const Icon = styled.span`
   font-size: 1.8rem;
   padding: 1rem;
   width: 3rem;
   height: 3rem;
   margin-bottom: 0.1rem;
   color: #c7572b;
`;

export const Media = styled.ul`
   margin-top: 1.5rem;
   justify-content: center;
   display: flex;
   font-size: 2rem;
`;

export const MediaItem = styled.li`
   margin: 1rem;
`;

export const FaceBookMedia = styled.span`
   color: rgb(59, 89, 152);
`;

export const YouTuBeMedia = styled.span`
   color: rgb(255, 0, 0);
`;

export const InstagramMedia = styled.span`
   color: rgb(195, 42, 163);
`;

export const Center = styled.div`
   color: #999999;
   text-align: center;
`;

export const RightCenter = styled.div`
   ${Title} {
      color: #999999;
   }
   @media (max-width: 650px) {
      ${Item} {
         display: inline-block;
         width: 50%;
      }
   }
`;

export const LeftCenter = styled.div``;

export const Bottom = styled.div`
   padding: 5px 0px;
   border-top: 1px solid #484848;
   color: #999999;
   text-align: center;
`;

export const Col = styled.div`
   &:nth-of-type(2) {
      width: 50%;
   }
   &:nth-of-type(1),
   &:nth-of-type(3) {
      width: 25%;
   }
   @media (max-width: 860px) {
      &:nth-of-type(1),
      &:nth-of-type(3) {
         width: 50%;
      }
      &:nth-of-type(1) {
         order: 3;
      }
      &:nth-of-type(3) {
         order: 2;
      }
      &:nth-of-type(2) {
         width: 100%;
         order: 1;
         margin-bottom: 2rem;
      }
   }
   @media (max-width: 650px) {
      &:nth-of-type(1),
      &:nth-of-type(3) {
         width: 100%;
      }
   }
`;
