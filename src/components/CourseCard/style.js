import styled from "styled-components";

export const CourseCard_ = styled.div`
  width: 16rem;
  height: 16rem;
  background-color: #f3f4f6;
  border-radius: 4px;
  transition: 0.5s;
  &:hover {
    -webkit-box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.18);
    box-shadow: 10px 10px 10px -3px rgba(0, 0, 0, 0.18);
  }
  p {
    max-width: 14rem;
    margin-top: 2rem;
    text-align: center;
    font-family: var(--font-inter);
    font-size: 20px;
    font-weight: 600;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
