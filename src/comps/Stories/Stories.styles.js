import styled from "styled-components"

export const Stories = styled.div`
    display: flex;
    justify-content: space-between;
    height: 12rem;
    gap: 0.5rem;
    background: var(--color-light);
`;
export const Item = styled.div`
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 0.75rem;
    width: 100%;
    position: relative;
    overflow: hidden;
    &:nth-child(1) {
        background: url('./images/story1.jpg') no-repeat center center/cover;
    }
    &:nth-child(2) {
        background: url('./images/story2.jpg') no-repeat center center/cover;
    }
    &:nth-child(3) {
        background: url('./images/story3.jpg') no-repeat center center/cover;
    }
    &:nth-child(4) {
        background: url('./images/story4.jpg') no-repeat center center/cover;
    }
    &:nth-child(5) {
        background: url('./images/story5.jpg') no-repeat center center/cover;
    }
    &:nth-child(6) {
        background: url('./images/story6.jpg') no-repeat center center/cover;
    }
    &::before {
        content: "";
        display: block;
        width: 100%;
        height: 5rem;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
        position: absolute;
        bottom: 0;
    }
`;
export const Avatar = styled.div`
    width: 3rem;
    height: 3rem;
    img {
        border: 3px solid var(--color-primary);
        border-radius: 50%;
    }
`;
export const Name = styled.p`
    z-index: 2;
`;