import styled from "styled-components"

export const Messages = styled.div`
    background: var(--color-white);
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    i {
      font-size: 1.4rem;
    }
`;

export const Search = styled.div`
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
`;

export const Category = styled.div`
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
`;

export const Message = styled.div`
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
    .profile-photo {
        position: relative;
        overflow: visible;
        border-radius: 50%;
        image {
            border-radius: 50%;
        }
        .active {
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            border: 3px solid var(--color-white);
            background-color: var(--color-success);
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
`;