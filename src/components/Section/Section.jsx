import { SectionWrapper, SectionTitle } from "./Section.styled.js";

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionWrapper>
  );
};
