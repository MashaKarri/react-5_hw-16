import styled from "styled-components";

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  padding: 8px 0;
  font-family: "Iosevka Charon", monospace;
  font-size: 18px;
  color: #444;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;
