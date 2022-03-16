import styled from "styled-components"

export const Home = styled.div`
  position: relative;
  top: 5.4rem;
  .container {
      display: grid;
      grid-template-columns: 18vw auto 20vw;
      column-gap: 2rem;
      position: relative;
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
`;

export const Profile = styled.a`
  padding: var(--card-padding);
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  display: flex;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
`;


export const Avatar = styled.div``;
export const Handle = styled.div``;

export const Middle = styled.div``;
export const Right = styled.div``;