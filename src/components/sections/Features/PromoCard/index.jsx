import CustomImage from "@/components/atoms/CustomImage";
import {
  CardContainer,
  ImageWrapper,
  PlayButton,
  TextContainer,
  Title,
} from "./style";

const PromoCard = () => {
  return (
    <CardContainer>
      <ImageWrapper>
        <CustomImage
          imgSrc={"/images/Poster.png"}
          width={500}
          height={350}
          title={"Team Meeting"}
        />

        <PlayButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7L8 5z" fill="#000" />
          </svg>
        </PlayButton>
      </ImageWrapper>
      <TextContainer>
        <p>
          <Title>OurWebsite</Title>
          Your Gateway to Technological Excellence
          <br />
          Get a quick glimpse into the dynamic environment at The OurWebsite and
          the benefits that await you
        </p>
      </TextContainer>
    </CardContainer>
  );
};

export default PromoCard;
