import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logoWhite from "./images/logoWhite.svg";
import icon1 from "./images/icon-facebook.svg";
import icon2 from "./images/icon-twitter.svg";
import icon3 from "./images/icon-pinterest.svg";
import icon4 from "./images/icon-instagram.svg";


const Container = styled.div``;

const Wrapper = styled.div``;

const GetStarted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 60px 0;
  background-color: #3b3054;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 900px) {
    padding: 70px 40px;
    text-align: center;
    font-size: 12px;
  }

  & > h2 {
    color: white;
  }

  & > a {
    font-size: 18px;
    font-weight: 700;
    color: #232127;
    background-color: #2acfcf;
    border: none;
    font-family: "Poppins", sans-serif;
    padding: 15px 35px;
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background: #b2e7e7;
    }
  }
`;

const FooterContainer = styled.footer`
  flex-wrap: wrap;
  gap: 24px;
  padding: 80px 10%;
  background-color: #232127;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10%;
  }
`;

const Logo = styled.div`
  padding: 20px;
`;

const LinkWrapper = styled.div`
  flex-wrap: wrap;
  gap: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Link = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 20px;
  color: white;
  cursor: pointer;

  & > a {
    transition: all 0.3s ease;
  }

  & > a:hover {
    color: #2acfcf;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > a {
      color: #bfbfbf;
      transition: all 0.3s ease;
    }
    & > a:hover {
      color: #2acfcf;
    }
  }
`;

const LinkIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 25px 0px 25px 50px;
  & > a > Image {
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    padding: 25% 20% 10% 20%;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <GetStarted>
          <h2>Shorten a link</h2>
          <a href="#textInput">Get Started</a>
        </GetStarted>
        <FooterContainer>
          <Logo>
            <Image alt=""
              src={logoWhite}
            />
          </Logo>
          <LinkWrapper>
            <Links>
              <Link>
                <h4>Features</h4>
                <a>Link Shortening</a>
                <a>Branded Links</a>
                <a>Analytics</a>
              </Link>
              <Link>
                <h4>Resources</h4>
                <a>Blog</a>
                <a>Developers</a>
                <a>Support</a>
              </Link>
              <Link>
                <h4>Company</h4>
                <a>About</a>
                <a>Our Team</a>
                <a>Careers</a>
                <a>Contact</a>
              </Link>
            </Links>
            <LinkIcons>
              <a>
                <Image alt="" src={icon1}/>
              </a>
              <a>
                <Image alt="" src={icon2}/>
              </a>
              <a>
                <Image alt="" src={icon3}/>
              </a>
              <a>
                <Image alt="" src={icon4}/>
              </a>
            </LinkIcons>
          </LinkWrapper>
        </FooterContainer>
      </Wrapper>
    </Container>
  );
}
