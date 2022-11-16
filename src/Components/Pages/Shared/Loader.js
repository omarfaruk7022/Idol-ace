import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </div>
  );
};

export default Loader;
