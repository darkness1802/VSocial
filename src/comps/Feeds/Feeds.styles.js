import styled from "styled-components"

export const Feeds = styled.div`
`;
    export const Item = styled.div`
        background: var(--color-white);
        border-radius: var(--card-border-radius);
        padding: var(--card-padding);
        margin: 1rem 0;
        font-size: 0.85rem;
        line-height: 1.5;
        .photo {
            border-radius: var(--card-border-radius);
            overflow: hidden;
            margin: 0.7rem 0; 
        }
        .liked-by {
            display: flex;
            align-items: center;
            span {
                width: 1.4rem;
                height: 1.4rem;
                display: block;
                border-radius: 50%;
                overflow: hidden;
                border: 2px solid var(--color-white);
                margin-left: -0.6rem;
                &:first-child {
                    margin: 0;
                }
            }
            p {
                margin-left: 0.5rem;
            }
        }
    `;
        export const Head = styled.div`
            display: flex;
            justify-content: space-between;
        `;
            export const User = styled.div`
                display: flex;
                gap: 1rem;
                .profile-photo {

                }
                .info {
                    
                }
            `;
        export const Actions = styled.div`
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.4rem;
            margin: 0.6rem;
        `;
            export const Interaction = styled.div`
                span {
                    i {
                        cursor: pointer;
                    }
                }
            `;
            export const Bookmarks = styled.div``;