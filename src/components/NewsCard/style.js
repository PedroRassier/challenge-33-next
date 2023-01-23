import styled from "styled-components";

export const NewsCard_ = styled.article`
  width: 24rem;
  height: 22rem;
  transition: 0.5s;
  background: none;
  border-radius: 4px;
  &:hover {
    -webkit-box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.18);
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.18);
  }
  .square {
    border-radius: 4px 4px 0 0;
    background-color: #b91c1c;
    width: 100%;
    height: 55%;
  }
  .cardBody {
    background-color: #f3f4f6;
    padding: 1.4rem;
    border-radius: 0 0 4px 4px;
    h3 {
      font-family: var(--font-mukba_600);
      color: #111827;
      font-size: 24px;
      margin-bottom: 1rem;
    }
    p {
      font-family: var(--font-inter);
      color: #353436;
      font-size: 16px;
    }
  }
`;
