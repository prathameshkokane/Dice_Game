import React from "react";
import styled from "styled-components";

const NumberSelector = ({
  error,
  setError,
  selectedNumber,
  setSelectedNumber,
}) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSlelctorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <Container>
      <p className="error">{error}</p>
      <main>
        {array.map((value, index) => (
          <Box
            isSelected={value === selectedNumber}
            key={index}
            onClick={() => numberSlelctorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </main>
      <p>Select Number</p>
    </Container>
  );
};

export default NumberSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  main {
    display: flex;
    gap: 5px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
