import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

export const ModalCard = styled(Modal)`
  cursor: default;
  .modal-content {
    background-color: transparent;
    border: none;
  }
`;

export const Style = styled.div`
  .modal-carousel-item {
    height: 80vh;
    flex-direction: column;
    display: flex;
    justify-content: center;
  }
  .modal-carousel-wrapper {
    img,
    .gatsby-image-wrapper {
      object-fit: contain;
      object-position: center center;
    }
    .caption {
      font-size: 10px !important;
    }
  }

  .dots {
    height: 12px;
    width: 12px;
    border: 1px solid white;
    padding: 0;
    margin: 2rem 0.5rem;
    transform: translateY(-40px);
    &.active {
      background-color: white;
    }
  }
  /* @media only screen and (max-width: 1399px) {
    .bio-carousel-wrapper {
      width: 448px !important;
      height: 600px !important;
      padding-top: 100px;
      margin-left: 90px;
      img {
        width: 448px !important;
        height: 600px !important;
      }
      .dots {
        transform: translateY(-200px);
      }
    }
  } */
  /* @media only screen and (max-width: 1199px) {
    .bio-carousel-wrapper {
      width: 413px !important;
      padding-top: 100px;
      margin-left: 40px;
      img {
        width: 413px !important;
      }
    }
  } */
  /* 
  @media only screen and (max-width: 992px) {
    .bio-carousel-wrapper {
      padding-top: 00px;
      width: 100% !important;
      height: 760px !important;
      margin-left: 0px;

      .dots {
        transform: translateY(-40px);
      }
      .gatsby-image-wrapper {
        width: 100% !important;
      }
      img {
        width: 100% !important;
        height: 760px !important;
      }
    }
  } */
  /* 
  @media only screen and (max-width: 575px) {
    .bio-carousel-wrapper {
      height: 92vh !important;
      .dots {
        transform: translateY(-10px);
      }

      img {
        height: 92vh !important;
      }
    }
  } */
`;
