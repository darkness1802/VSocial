
import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  padding: var(--btn-padding);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 300ms ease;
  font-size: 0.9rem;
  background: var(--color-primary);
  color: white;
  &:hover {
    opacity: 0.8;
  }
`;