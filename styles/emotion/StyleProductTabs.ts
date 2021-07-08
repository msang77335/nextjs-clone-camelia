import styled from "@emotion/styled";

type TabProps = {
   isActive?: boolean;
};

export const Tabs = styled.div``;

export const TabsList = styled.ul`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
   margin: 3rem 0;
`;

export const Tab = styled.li`
   width: calc(50% - 0.5rem);
   @media (max-width: 413px) {
      width: 100%;
      margin-bottom: 1rem;
   }
`;

export const TabBtn = styled.button`
   cursor: pointer;
   width: 100%;
   padding: 1.5rem;
   text-align: center;
   border: 1px solid transparent;
   border-radius: 5px;
   font-weight: 700;
   text-transform: uppercase;
   font-size: 1.2rem;
   transition: all 0.25s linear;
   color: ${(props: TabProps) => (props.isActive ? "#333333" : "#bbb9b9")};
   border-color: ${(props: TabProps) =>
      props.isActive ? "#333333" : "#bbb9b9"};
`;

export const TabContents = styled.div`
   position: relative;
   width: 100%;
`;

export const TabContent = styled.div`
   width: 100%;
   transition: all 0.35s linear;
`;

export const TextContent = styled.p`
   margin-bottom: 1.5rem;
`;

export const ImageContent = styled.div`
   margin-bottom: 3.5rem;
`;

export const Video = styled.div`
   margin: 2rem auto 0;
   width: 100%;
   height: 0;
   position: relative;
   padding-bottom: 56.25%;
   @media (max-width: 960px) {
      margin-bottom: 8rem;
      padding-bottom: 56.25%;
   }
   @media (max-width: 600px) {
      margin-bottom: 2rem;
      padding-bottom: 56.25%;
   }
`;

export const Iframe = styled.iframe`
   position: absolute;
   left: 50%;
   transform: translateX(-50%);
   transition: all.35s linear;
   @media (max-width: 1200px) {
      width: 100%;
      height: 100%;
   }
`;
