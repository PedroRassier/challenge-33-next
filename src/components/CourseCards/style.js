import styled from "styled-components";

export const CourseCards_ = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem 9.5rem;
  h2 {
    font-family: var(--font-mukba_600);
    margin-bottom: 3rem;
  }
  .coursesCards {
    width: 100%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 1rem;
  }
`;
