import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 5% 10%;
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(white, #eff1f7);
  background-size: 50%;

  @media only screen and (max-width: 414px) {
    padding: 5% 5%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 55px 60px;
  background-color: #3b3054;
  background-image: url("_next/static/image/pages/components/images/bgShortenDesktop.0d9742f433f4b0d8752b40ccf28727af.svg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`;

const Inputarea = styled.div`
  width: 100%;
`;

const Input = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "3em",
}))`
  height: 60px;
  color: palevioletred;
  font-size: 18px;
  border: 2px solid palevioletred;
  border-radius: 10px;
  width: 100%;
  padding: 10px 20px;
  margin: 0;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

const Alert = styled.blockquote`
  display: none;
  position: absolute;
  margin: 0.5% 0.5%;
  color: red;
  font-family: "Poppins", sans-serif;

  @media only screen and (max-width: 414px) {
    font-size: 12px;
  }
`;

const Button = styled.button`
  background: #2acfcf;
  color: white;
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  margin: 0 0 0 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #b2e7e7;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
    margin: 30px 0px 0 0;
  }
`;

const Card = styled.div`
  display: none;
  background-color: white;
  padding: 20px 20px;
  margin: 20px 0px;
  border-radius: 10px;
  transition: all 0.2 ease-in-out;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 414px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`;

const Originallink = styled.a`
  @media only screen and (max-width: 414px) {
    text-align: left;
    border-bottom: solid 1px #bfbfbf;
    font-size: 14px;
    padding-bottom: 10px;
    word-break: break-all;
  }
`;

const Copy = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: #2acfcf;
  border: none;
  margin: 0;
  outline: none;
  border-radius: 10px;
  font-size: 16px;
  padding: 12px 40px;
  color: white;
  font-weight: 700;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: #b2e7e7;
  }

  @media only screen and (max-width: 414px) {
    width: 100%;
    justify-content: stretch;
  }
`;

const Shortlink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 414px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: stretch;
    text-align: left;
  }
`;

const Short = styled.a`
  color: #2acfcf;
  margin-right: 15px;

  @media only screen and (max-width: 414px) {
    font-size: 14px;
    padding-bottom: 5px;
  }
`;

export default function Searchbar() {
  //
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "text/plain" },
  };
  async function my_async_fn(url) {
    let data = await fetch(url, requestOptions)
      .then((resp) => {
        console.log("Data fetched", resp), (error) => console.log(error);
        return resp.json();
      })
      .then((data) => {
        console.log(data);

        const card = document.getElementById("card");
        card.style.display = "block";

        const short = document.getElementById("short");
        short.innerHTML = data.result.full_short_link;

        const ourLink = document.getElementById("ourLink");
        ourLink.innerHTML = data.result.original_link;

        console.log(JSON.stringify(data, null, 2));
      });
    return data;
  }

  const validate = () => {
    const input = document.getElementById("textInput");
    const alert = document.getElementById("alert");
    console.log(input);
    if (input.value.length < 5) {
      alert.style.display = "block";
      console.log("yoyo");
    } else {
      alert.style.display = "none";
      my_async_fn(`https://api.shrtco.de/v2/shorten?url=${input.value}`);
    }
  };

  const copyFunc = () => {
    const copy = document.getElementById("copy");
    copy.style.backgroundColor = "#35323e";
    copy.innerText = "Copied!";
    setTimeout(() => {
      copy.innerText = "Copy";
      copy.style.backgroundColor = "#2acfcf";
    }, 10000);
    const short = document.getElementById("short");
    navigator.clipboard.writeText(short.innerText);
  };

  return (
    <Container>
      <Wrapper>
        <Inputarea>
          <Input id="textInput" placeholder="Shorten a link here..." />
          <Alert id="alert">
            <em>Please add a link</em>
          </Alert>
        </Inputarea>
        <Button onClick={validate}>Shorten it!</Button>
      </Wrapper>
      <Card id="card">
        <LinksContainer>
          <Originallink id="ourLink">our link</Originallink>
          <Shortlink>
            <Short id="short">short link</Short>
            <Copy id="copy" onClick={copyFunc}>
              Copy
            </Copy>
          </Shortlink>
        </LinksContainer>
      </Card>
    </Container>
  );
}
