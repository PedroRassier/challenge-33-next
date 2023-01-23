import styled from "styled-components";

export const JobsDisplay_ = styled.div`
  width: 100%;
  height: 35rem;
  display: flex;
  margin-bottom: 6rem;
  h2,
  p {
    margin-bottom: 1rem;
  }
  .displayHeadline {
    width: 50%;
    height: 100%;
    background-color: #b91c1c;
    display: grid;
    place-items: center;
    h2 {
      font-family: var(--font-mukba_600);
      color: #ffffff;
      font-size: 48px;
    }
  }
  .jobsInfo {
    background-color: #f3f4f6;
    width: 50%;
    padding: 3rem;
    article {
      margin-bottom: 3rem;
    }
    h2 {
      font-family: var(--font-mukba_600);
      font-size: 24px;
      color: #111827;
    }
    p {
      font-family: var(--font-inter);
      font-size: 18px;
      color: #353436;
      font-weight: 400;
    }
    a {
      font-family: var(--font-inter);
      font-size: 18px;
      font-weight: 500;
      color: #b91c1c;
      transition: 0.2s;
    }
    a:hover {
      color: #a00000;
    }
  }
`;
