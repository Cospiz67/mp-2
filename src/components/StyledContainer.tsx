import styled from "styled-components";

export const StyledContainer =styled.div`
    background-color: #B91C1C;
    border: 20px solid transparent;
    border-image: url("src/assets/damier.png") 100 round;
    width: 100%;
    min-height:100vh;
    background-image: repeating-linear-gradient(
        30deg,
        rgba(255,255,255,0.03),
        rgba(255,255,255,0.03) 3px,
        transparent 3px,
        transparent 12px
    );
`
/* repeating linear gradient will create a repeating pattern for the background,
the pattern is made of lines oriented at 30degrees, we specified the color, their width 3px,
after 3px we set transparent for 12px so 9px of nothing and then we repeat the line.*/  