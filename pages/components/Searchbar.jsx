import React, { useEffect, useRef, useState } from "react";
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

position: relative;
  width: 100%;
  margin: 0;
  padding: 55px 60px;
  background-color: #3b3054;
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


function validUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) && !url.username && !url.password;
  } catch {
    return false;
  }
}

export default function Searchbar() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const activeRequest = useRef(null);
  useEffect(() => () => activeRequest.current?.abort(), []);
  const [copied, setCopied] = useState(false);

  async function shorten(event) {
    event.preventDefault();
    if (activeRequest.current) return;
    setResult(null);
    setError("");
    setCopied(false);
    const original = input.trim();
    if (!validUrl(original)) {
      setError("Enter a complete http:// or https:// URL without credentials.");
      return;
    }
    const controller = new AbortController();
    activeRequest.current = controller;
    setPending(true);
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(original)}`, { signal: controller.signal });
      const data = await response.json();
      if (!response.ok || !data.ok || !validUrl(data.result?.full_short_link)) {
        throw new Error("Invalid response");
      }
      setResult({ original, short: data.result.full_short_link });
    } catch {
      setError(controller.signal.aborted ? "The request timed out. Please try again." : "Unable to shorten this link. The service may be unavailable. Please try again.");
    } finally {
      clearTimeout(timer);
      activeRequest.current = null;
      setPending(false);
    }
  }

  async function copy() {
    await navigator.clipboard.writeText(result.short);
    setCopied(true);
  }

  return (
    <Container id="shorten">
      <Wrapper as="form" onSubmit={shorten} noValidate>
        <Inputarea>
          <Input id="textInput" aria-label="URL to shorten" disabled={pending} value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Shorten a link here..." />
          {error && <Alert role="alert">{error}</Alert>}
        </Inputarea>
        <Button type="submit" disabled={pending}>{pending ? "Shortening…" : "Shorten it!"}</Button>
      </Wrapper>
      <p role="status">{pending ? "Shortening your link…" : result ? "Your shortened link is ready." : ""}</p>
      {result && <Card id="card">
        <LinksContainer>
          <Originallink href={result.original}>{result.original}</Originallink>
          <Shortlink>
            <Short href={result.short}>{result.short}</Short>
            <Copy type="button" onClick={copy}>{copied ? "Copied!" : "Copy"}</Copy>
          </Shortlink>
        </LinksContainer>
      </Card>}
    </Container>
  );
}
