import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

export default function Loading() {
  return (
    <Load>
      <ReactLoading
        type="spinningBubbles"
        color="#ee9d08"
        height={200}
        width={100}
      />
    </Load>
  );
}

const Load = styled.div`
    display: flex;
    justify-content: center;
    align-itens:center;
    margin: 250px auto;
`