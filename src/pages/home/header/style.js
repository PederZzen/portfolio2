import styled from "styled-components";
import { colors } from "../../../utils/constants";

export const Wrapper = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: fadein 3s;

  img {
    width: 35rem;
    opacity: 0.5;
  }

  .copy {
    margin-top: 13rem;
    text-align: center;

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
    }

    span {
      font-size: 4rem;
      color: ${colors.main};
    }
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
