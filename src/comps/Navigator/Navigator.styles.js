import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 100%;
  background: var(--color-white);
  padding: 0.7rem 0;
  position: fixed;
  top: 0;
  z-index: 10;
  .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
  .search-bar {
      background: var(--color-secondary);
      border-radius: var(--border-radius);
      padding: var(--search-padding);

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
`;

export const Creator = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Avatar = styled.div`
  width: 2.7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
`;

