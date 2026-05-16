import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 4px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  transition: 0.25s;

  background: ${(props) =>
    props.option === "good"
      ? "#51ba54ff"
      : props.option === "neutral"
        ? "#fb9a09ff"
        : props.option === "bad"
          ? "#d80000"
          : "transparent"};

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;
