import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div >
      <FallingLines
      
        color="#FF6600"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

export default Loader;
