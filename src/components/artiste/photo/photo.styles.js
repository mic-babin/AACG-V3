import styled from "styled-components";

export const Section = styled.section`
  .push-down {
    transform: translateY(80px);
  }

  .caption.push-down {
    transform: translateY(50px);
  }

  .row {
    padding-top: 50px;
    padding-bottom: 100px;
  }

  .pink-3 {
    position: absolute;
    // top: 200px;
    right: -120px;
    z-index: 0;
  }

  .wrapper {
    width: 100vw;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 991px) {
    .push-down {
      transform: translateY(0px);
    }
    .caption.push-down {
      transform: translateY(-30px);
    }
  }
  @media only screen and (max-width: 575px) {
    .w-100 {
      width: calc(100% - 15px) !important;
    }
  }
`;
