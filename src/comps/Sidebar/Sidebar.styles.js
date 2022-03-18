import styled from "styled-components"

export const Sidebar = styled.div`
  margin-top: 1rem;
  background: var(--color-white);
  border-radius: var(--card-border-radius);
  .menu-item {
      display: flex;
      align-items: center;
      height: 4rem;
      cursor: pointer;
      transition: all 300ms ease;
      position: relative;
      &:hover {
          background: var(--color-light);
      }
      &:first-child.active {
          border-top-left-radius: var(--card-border-radius);
          overflow: hidden;
      }
      &:last-child.active {
          border-top-left-radius: var(--card-border-radius);
          overflow: hidden;
      }
  }
  .active {
      background: var(--color-light);
      span i, h3 {
          color: var(--color-primary);
      }
      &::before {
            content: "";
            display: block;
            width: 0.5rem;
            height: 100%;
            position: absolute;
            background: var(--color-primary);
      }
  }
`;

export const MenuItem = styled.div`

`;

export const Popup = styled.div`
    position: absolute;
    top: 0;
    left: 110%;
    width: 30rem;
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    box-shadow: 0 0 2rem hsl(var(--color-primary), 75%, 60% 25%);
    z-index: 9;
    &::before {
        content: "";
        width: 1.2rem;
        height: 1.2rem;
        display: block;
        background: var(--color-white);
        position: absolute;
        left: -0.6rem;
        transform: rotate(45deg);
    }
    > div {
        display: flex;
        align-items: start;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 992px) {
        position: absolute;
        left: -20rem;
        width: 20rem;
        &::before {
            position: absolute;
            top: 1.3rem;
            left: calc(20rem - 0.6rem);
            display: block;
        }
    }
`;

export const Time = styled.small`
    display: block;
`;

export const Title = styled.h3`
  margin-left: 1.5rem;
  font-size: 1rem;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Icon = styled.i`
    font-size: 1.4rem;
    color: var(--color-gray);
    margin-left: 2rem;
    position: relative;
`

export const Count = styled.small`
    background: var(--color-danger);
    color: white;
    font-size: 0.7rem;
    width: fit-content;
    border-radius: 0.8rem;
    padding: 0.1rem 0.4rem;
    position: absolute;
    top: -0.2rem;
    right: -0.3rem;
`;

export const Notifications = styled.div`
    cursor: pointer;
    color: var(--color-dark);
`;