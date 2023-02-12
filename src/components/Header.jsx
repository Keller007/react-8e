import styled from "styled-components";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

import { Container } from "./Container";

import React from "react";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
`;

const Title = styled.a.attrs({
  href: "/",
})`
  text-decoration: none;
`;
const ModeSwitcher = styled.div`
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <>
      <HeaderEl>
        <Container>
          <Wrapper>
            <Title>Where is the world ?</Title>
            <ModeSwitcher onClick={toggleTheme}>
              {theme === "light" ? (
                <IoMoonOutline size="14px" />
              ) : (
                <IoMoon size="14px" />
              )}
              <span style={{ marginLeft: `0.5rem` }}> {theme} theme </span>
            </ModeSwitcher>
          </Wrapper>
        </Container>
      </HeaderEl>
    </>
  );
};
