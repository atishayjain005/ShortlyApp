import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5% 10%;
  background-color: #eff1f7;

  @media only screen and (max-width: 414px) {
    padding: 5% 5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  text-align: center;
  padding: 0 400px;

  @media only screen and (max-width: 414px) {
    padding: 0 0px;
  }

  & > p {
    font-size: 18px;
    color: #858585;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  & > span {
    background-color: #2acfcf;
    background-size: 5px;
    background-position: center;
    height: 10px;
    width: 50%;
    position: absolute;
    margin: 0 10%;
    z-index: 0;

    @media only screen and (max-width: 414px) {
      height: 90%;
      width: 10px;
    }
  }

  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const Card1 = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 30px;
  margin: 15px;
  z-index: 1;

  @media only screen and (max-width: 414px) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & > h3 {
    margin-top: 40px;
  }

  & > p {
    color: #858585;
  }
`;

const Card2 = styled(Card1)`
  margin-top: 100px;

  @media only screen and (max-width: 414px) {
    margin-top: 50px;
  }
`;

const Card3 = styled(Card1)`
  margin-top: 200px;

  @media only screen and (max-width: 414px) {
    margin-top: 50px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #3b3054;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-top: -70px;

  @media only screen and (max-width: 414px) {
    background-position: center;
  }
`;

export default function Statistics() {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </Heading>
        <Info>
          <span></span>
          <Card1>
            <Icon>
              <img
                height={40}
                src="/_next/static/image/pages/components/images/icon-brand-recognition.c349d3b69f7442e5ac3552e4138e72e7.svg"
                width={40}
              />
            </Icon>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click.Generic links don't
              mean a thing.Branded links help instil confidence in your content
            </p>
          </Card1>
          <Card2>
            <Icon>
              <img
                height={40}
                src="/_next/static/image/pages/components/images/icon-detailed-records.265c8aea77b546e08ba3575f6a8a9f70.svg"
                width={40}
              />
            </Icon>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking youir links. Knowing when and
              where people engage with your content helps inform better
              decisions.{" "}
            </p>
          </Card2>
          <Card3>
            <Icon>
              <img
                height={40}
                src="/_next/static/image/pages/components/images/icon-fully-customizable.a1532a74fa781f6fde327313bd5ffce3.svg"
                width={40}
              />
            </Icon>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging anudience engagement
            </p>
          </Card3>
        </Info>
      </Wrapper>
    </Container>
  );
}
