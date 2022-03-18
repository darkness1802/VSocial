import styled from "styled-components"

export const Requests = styled.div`
  margin-top: 1rem;
`;

export const Title = styled.h4`
  color: var(--color-gray);
  margin: 1rem 0;
`;

export const Request = styled.div`
  background: var(--color-white);
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
  margin-bottom: 0.7rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;
  .profile-photo {
    width: 3rem;
    height: 3rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  button {
    margin-top: 8px;
  }
`;

// 1:35