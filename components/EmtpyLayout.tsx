import React, { ReactChild, ReactChildren } from "react";

interface Props {
   children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const EmtpyLayout: React.FC<Props> = ({ children }) => {
   return <div>{children}</div>;
};

export default EmtpyLayout;
