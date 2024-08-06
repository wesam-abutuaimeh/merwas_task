import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  background-color: #374258; /* Dark blue background */
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  max-width: 100%;
  margin: 0 auto 100px 0;

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  img {
    object-fit: contain;
  }
`;

const TextContainer = styled.div`
  margin-left: 20px;
  color: #ffffff;
  font-family: Nobile, sans-serif;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 300px;
`;

const Title = styled.span`
  color: #ffa800;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
`;

export { CardContainer, ImageWrapper, TextContainer, Title, PlayButton };
