import styled from "styled-components";
import { colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  a {
    font-weight: 600;
    color: ${colors.main};
  }

  #menu  {
    display: flex;
    gap: 1.5rem;
  }
`;
