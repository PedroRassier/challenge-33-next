import styled from "styled-components";

export const NewsCards_ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: var(--font-mukba_600);
    color: #111827;
    font-size: 40px;
    margin-bottom: 2.2rem;
  }
  button {
    display: grid;
    place-items: center;
    width: 292px;
    height: 61px;
    font-size: 24px;
    color: #ffffff;
    font-family: var(--font-inter);
    background: #b91c1c;
    border-radius: 4px;
    border: 0;
    margin-bottom: 6rem;
    transition: 0.5s;
  }
  button:hover {
    background: #a01c1c;
  }
  .cards {
    margin-bottom: 5rem;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
