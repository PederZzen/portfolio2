import styled from "styled-components";
import { colors } from "../../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: ${colors.background};
  z-index: 99;

  a {
    font-weight: 600;
    color: ${colors.main};
  }

  #menu  {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    right: 0.5rem;
    text-align: center;
    background-color: ${colors.main};
    bottom: -7.5rem;
    padding: 1rem 2rem;
    box-shadow: 0 5px 10px 0 gray;

    a {
      color: ${colors.light};
      transition: all 0.3s;

      &:hover {
        filter: brightness(120%);
      }
    }
  }

  @media screen and (min-width: 550px) {
    #menu {
      flex-direction: row;
      gap: 1.5rem;
      position: relative;
      bottom: 0;
      padding: 0;
      background-color: transparent;
      box-shadow: none;

      a {
        color: ${colors.main};
      }
    }
  }
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: ${colors.main};
  font-size: 1.5rem;
`;
