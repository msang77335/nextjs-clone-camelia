import React from "react";
import * as s from "../styles/emotion/StyleProductTabs";

interface PropsVideo {
   src?: string;
}

const ProductTabVideo: React.FC<PropsVideo> = ({ src }) => {
   return (
      <s.Video>
         <s.Iframe
            width="720"
            height="405"
            src={`${src}?rel=0&autoplay=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
         />
      </s.Video>
   );
};

export default ProductTabVideo;
