import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 10%;
  font-family: "Poppins", sans-serif;

  @media only screen and (max-width: 414px) {
    padding: 0 5%;
  }
`;

const Wrapper = styled.div``;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 40px 0;
`;

const Links = styled.div`
  @media only screen and (max-width: 414px) {
    display: none;
  }

  & > a {
    padding: 15px;
    color: #858585;
    transition: all 0.3s ease;
    &:hover {
      color: black;
      font-weight: 500;
    }
  }
`;

const Signup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  & > a {
    padding: 5px 40px;
    color: #858585;
    transition: all 0.3s ease;
    &:hover {
      color: black;
    }

    @media only screen and (max-width: 414px) {
      padding: 0 10px;
    }
  }

  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  & > button {
    font-size: 16px;
    font-weight: 700;
    color: white;
    background-color: #2acfcf;
    border: none;
    font-family: "Poppins", sans-serif;
    padding: 10px 30px;
    border-radius: 50px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      background: #b2e7e7;
    }

    @media only screen and (max-width: 414px) {
      padding: 5px 10px;
    }
  }
`;

export default function Topbar(props) {
  return (
    <Container>
      <Wrapper>
        <Navbar>
          <Navigation>
            <Logo>
              <img
                height={33}
                src="/_next/static/image/pages/components/images/logo.834643034343520f3b4d7e43111ed4d8.svg"
                width={121}
              />
            </Logo>
            <Links>
              <a href="">Features</a>
              <a href="">Pricing</a>
              <a href="">Resources</a>
            </Links>
          </Navigation>
          <Signup>
            <Login>
              <a href="">Login</a>
              <button>Sign Up</button>
            </Login>
          </Signup>
        </Navbar>
      </Wrapper>
    </Container>
  );
}
