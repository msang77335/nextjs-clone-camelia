import styled from "@emotion/styled";
import { Reply } from "@emotion-icons/fa-solid";
import { css } from "@emotion/react";

type ModalProps = {
   isOpen?: boolean;
};

export const ReplyIcon = styled(Reply)`
   color: #d61c1f;
   width: 1.5rem;
   height: 1.5rem;
   cursor: pointer;
`;

export const Content = styled.div`
   width: 27rem;
   position: fixed;
   z-index: 200;
   top: -40rem;
   right: 1.5rem;
   background-color: #ffffff;
   transition: all 0.3s ease;
   border-radius: 5px;
   border: 1px solid #f0ebeb;
   box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
   opacity: 0;
   visibility: hidden;
`;

export const Top = styled.div`
   padding: 1rem 1.5rem;
   border-bottom: 1px solid #f0ebeb;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Title = styled.span`
   text-transform: uppercase;
   font-weight: 700;
   color: #d61c1f;
   font-size: 1.6rem;
`;

export const Text = styled.p`
   color: #666666;
   margin-bottom: 2rem;
`;

export const Link = styled.span`
   color: #d61c1f;
   transition: all 0.25s linear;
   &:hover {
      color: #e95658;
   }
`;

export const CenterEmpty = styled.div`
   margin-top: 1rem;
   padding-left: 3rem;
`;

export const Center = styled.div`
   padding: 0 1rem 1rem;
   height: 21.5rem;
   overflow: scroll;
   overflow-x: hidden;
   /* width */
   ::-webkit-scrollbar {
      width: 3px;
   }

   /* Track */
   ::-webkit-scrollbar-track {
      background: #fff;
      box-shadow: inset 0 0 4px rgb(0 0 0 / 30%);
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #d61c1f;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #d61c1f;
   }
`;

export const Actions = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const BtnAction = styled.button`
   padding: 0.9rem;
   width: calc(50% - 0.5rem);
   text-transform: uppercase;
   font-weight: 700;
   border-radius: 3px;
   border: none;
   color: #ffffff;
   font-size: 1.2rem;
   transition: all 0.25s linear;
`;

export const BtnEdit = styled(BtnAction)`
   background-color: #545457;
   &:hover {
      background-color: #666666;
   }
`;

export const BtnPay = styled(BtnAction)`
   background-color: #d61c1f;
   &:hover {
      background-color: #e95658;
   }
`;

export const Total = styled.div`
   padding: 2rem;
   text-align: right;
`;

export const Price = styled.p`
   text-transform: uppercase;
   font-size: 1.6rem;
   font-weight: 700;
   color: #666666;
`;

export const PriceValue = styled.span`
   color: #d61c1f;
`;

export const Bottom = styled.div`
   padding: 0 1.5rem 1.5rem;
`;

export const Backgroud = styled.div`
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.4);
   transition: all 0.15s ease-in-out;
   opacity: 0;
   visibility: hidden;
`;
export const Modal = styled.div`
   ${(props: ModalProps) =>
      props.isOpen
         ? css`
              ${Backgroud} {
                 opacity: 1;
                 visibility: visible;
              }
              ${Content} {
                 opacity: 1;
                 visibility: visible;
                 top: 5.5rem;
              }
           `
         : css`
              ${Backgroud} {
                 opacity: 0;
                 visibility: hidden;
              }
              ${Content} {
                 opacity: 0;
                 visibility: hidden;
              }
           `}
`;
