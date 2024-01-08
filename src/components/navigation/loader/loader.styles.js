import styled from "styled-components";

export const Section = styled.div`
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 10000;
    background-color: var(--teal);
    color: white;
    overflow: hidden;
  }

  .spinner {
    background: conic-gradient(
      var(--pink) 25%,
      var(--orange) 0 50%,
      var(--blue) 0 100%
    );
    border-radius: 50%;
    width: 100px;
    height: 0;
    padding-top: 100px;

    -webkit-animation: spin 0.5s linear infinite;
    -moz-animation: spin 0.5s linear infinite;
    animation: spin 0.5s linear infinite;
  }

  p {
    font-size: 20px !important;
    font-weight: 400 !important;
  }
  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(359deg);
    }
  }
  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
`;
