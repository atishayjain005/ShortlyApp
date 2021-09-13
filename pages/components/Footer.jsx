import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const GetStarted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0 60px 0;
  background-image: url(_next/static/image/pages/components/images/bg-boost-desktop.772154c9b0e451733f5ef5a737ffe720.svg);
  background-color: #3b3054;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 414px) {
    padding: 70px 40px;
    text-align: center;
    font-size: 12px;
  }

  & > h1 {
    color: white;
  }

  & > button {
    font-size: 18px;
    font-weight: 700;
    color: white;
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

const FooterContainer = styled.div`
  padding: 80px 10%;
  background-color: #232127;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media only screen and (max-width: 414px) {
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 414px) {
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

  @media only screen and (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Link = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 50px;
  color: white;
  cursor: pointer;

  & > a {
    transition: all 0.3s ease;
  }

  & > a:hover {
    color: #2acfcf;
  }

  @media only screen and (max-width: 414px) {
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
  & > a > img {
    cursor: pointer;
  }

  @media only screen and (max-width: 414px) {
    padding: 25% 20% 10% 20%;
  }
`;

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <GetStarted>
          <h1>Boost your links today</h1>
          <button>Get Started</button>
        </GetStarted>
        <FooterContainer>
          <Logo>
            <img
              height={33}
              src="/_next/static/image/pages/components/images/logoWhite.341d8b7d00635e01a661f535fb3453d7.svg"
              width={121}
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
                <img
                  height={24}
                  src="/_next/static/image/pages/components/images/icon-facebook.229c75a01827343aef31ae916e2ec18a.svg"
                  width={24}
                />
              </a>
              <a>
                <img
                  height={20}
                  src="/_next/static/image/pages/components/images/icon-twitter.1d5c6d5e6ab1717a500af2df0a87959a.svg"
                  width={24}
                />
              </a>
              <a>
                <img
                  height={24}
                  src="/_next/static/image/pages/components/images/icon-pinterest.a2d25ab4c70b78c4028f25323009cc58.svg"
                  width={24}
                />
              </a>
              <a>
                <img
                  height={24}
                  src="/_next/static/image/pages/components/images/icon-instagram.df5873287e1c06a0fe74440f6ccd8394.svg"
                  width={24}
                />
              </a>
            </LinkIcons>
          </LinkWrapper>
        </FooterContainer>
      </Wrapper>
    </Container>
  );
}
