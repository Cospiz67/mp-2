import styled from "styled-components";

export const Wrapper =styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    justify-content:center;

    @media screen and (max-width: 750px) {
        grid-template-columns: auto;
    }
}
`;