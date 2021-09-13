import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2% 10%;

  @media only screen and (max-width: 414px) {
    padding: 2% 5%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media only screen and (max-width: 414px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const Info = styled.div`

  @media only screen and (max-width: 414px) {
    text-align: center;
  }

  & > h1 {
    font-size: 72px;
    margin: 0;

    @media only screen and (max-width: 414px) {
      font-size: 40px;
      text-align: center;
    }
  }

  & > p {
    padding-right: 150px;
    font-size: 18px;
    margin-top: 5px;
    color: #858585;

    @media only screen and (max-width: 414px) {
      padding: 0;
    }
  }

  & > button {
    font-size: 18px;
    font-weight: 700;
    color: white;
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

const Image = styled.div`

  & > img {

    @media only screen and (max-width: 414px) {
      height: 350px;
      width: 550px;
      margin-right: -150px;
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
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get started</button>
        </Info>
        <Image>
          <img
            height={482}
            src="/_next/static/image/pages/components/images/illustration-working.c9b5ef5452363d8be3df709375d50bd0.svg"
            width={733}
            alt="a person working icon"
          />
        </Image>
      </Wrapper>
    </Container>
  );
}
