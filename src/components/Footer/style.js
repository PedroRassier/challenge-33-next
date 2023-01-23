import styled from "styled-components";

export const Footer_ = styled.footer`
  background-color: #b91c1c;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    font-family: var(--font-mukba_600);
    color: #ffffff;
    font-size: 18px;
  }
  p {
    color: #f3f4f6;
    font-family: var(--font-inter);
    font-size: 12px;
  }
  button {
    margin-right: 1rem;
    display: grid;
    place-items: center;
    background: #ffffff;
    border: 0;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 100%;
    transition: 0.5s;
  }
  button:hover {
    background-color: #111827;
  }

  .contactInfos {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  .aboutInfo {
    p {
      width: 20rem;
      margin-bottom: 1rem;
    }
    .socialMediaButtons {
      display: flex;
      align-items: center;
    }
  }
  .footer {
    width: 100%;
    display: grid;
    place-items: center;
  }
`;
