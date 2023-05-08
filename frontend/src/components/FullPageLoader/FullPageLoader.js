import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import './FullPageLoader.css'
function FullPageLoader() {
  useEffect(() => {
  }, []);

  return (
    <div className="loader-container">
        <BeatLoader className="loader" color={"#36D7B7"} css={override} size={50} />
    </div>
  );
}

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default FullPageLoader;
