import styled from "styled-components"

export const Home = styled.div`
  position: relative;
  top: 5.4rem;
  .container {
      display: grid;
      grid-template-columns: 18vw auto 20vw;
      column-gap: 2rem;
      position: relative;
      @media (max-width: 1200px) {
        grid-template-columns: 5rem auto 30vw;
      }
      @media (max-width: 992px) {
        grid-template-columns: 0 auto 5rem;
        gap: 0;
      }
  }
`;

export const Left = styled.div`
  height: max-content;
  position: sticky;
  top: var(--sticky-top-left);
  .btn {
    margin-top: 1rem;
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
  @media (max-width: 1200px) {
    width: 5rem;
    z-index: 5;
  }
  @media (max-width: 992px) {
        grid-column: 3/4;
        position: fixed;
        bottom: 0;
        right: 0;
  }
`;

export const Profile = styled.a`
  padding: var(--card-padding);
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;


export const Avatar = styled.div``;
export const Handle = styled.div``;

export const Middle = styled.div`
  @media (max-width: 992px) {
    grid-column: 1/3;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  background: var(--color-white);
  padding: 0.4rem var(--card-padding);
  border-radius: var(--border-radius);
`;
export const Photo = styled.div`
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`;
export const Input = styled.input`
  justify-self: start;
  width: 100%;
  padding-left: 1rem;
  background: transparent;
  color: var(--color-dark);
  margin-right: 1rem;
`;

export const Right = styled.div`
  height: max-content;
  position: sticky;
  top: var(--sticky-top-right);
  bottom: 0;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Messages = styled.div`
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    i {
      font-size: 1.4rem;
    }
  }
  .search-bar {
    display: flex;
    background: var(--color-light);
    border-radius: var(--border-radius);
    padding: var(--search-padding);
    margin-bottom: 1rem;
    input {
      background: transparent;
      width: 30vw;
      margin-left: 1rem;
      font-size: 0.9rem;
      color: var(--color-dark);
      &::placeholder {
        color: var(--color-gray);
      }
    }
  }
  .category {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    h6 {
      width: 100%;
      text-align: center;
      border-bottom: 4px solid var(--color-light);
      padding-bottom: 0.5rem;
      font-size: 0.85rem;
    }
    .active {
      border-color: var(--color-dark);
    }
  }
  .message {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    align-items: start;
    &:last-child {
      margin: 0;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export const Requests = styled.div``;

// 1:23:00