import React from "react";
import styled from "styled-components";
import Image from "next/image";
import personWorking from "./images/illustration-working.svg"

const Container = styled.div`
  padding: 2% 10%;

  @media only screen and (max-width: 900px) {
    padding: 2% 5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Info = styled.div`

  @media only screen and (max-width: 900px) {
    text-align: center;
    padding: 40px 0;
  }

  & > h1 {
    font-size: clamp(36px, 5vw, 72px);
    margin: 0;

    @media only screen and (max-width: 900px) {
      font-size: 40px;
      text-align: center;
    }
  }

  & > p {
    padding-right: 24px;
    font-size: 18px;
    margin-top: 5px;
    color: #626262;

    @media only screen and (max-width: 900px) {
      padding: 0;
    }
  }

  & > a {
    font-size: 18px;
    font-weight: 700;
    color: #232127;
    background-color: #2acfcf;
    border: none;
    font-family: "Poppins", sans-serif;
    margin-top: 10px;
    padding: 15px 35px;
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background: #b2e7e7;
    }
  }
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  min-width: 0;

  & > img {

    @media only screen and (max-width: 900px) {
      max-width: 100%;
      height: auto;
    }
  }
`;

export default function Intro() {
  return (
    <Container>
      <Wrapper>
        <Info>
          <h1>More than just shorter links</h1>
          <p>
            Try the URL shortening form below. Service availability may vary.
          </p>
          <a href="#textInput">Get started</a>
        </Info>
        <ImageWrapper>
          <Image alt=""
            src={personWorking}
          />
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}
