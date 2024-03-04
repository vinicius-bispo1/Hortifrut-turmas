import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    font-weight: 200;
}
`;
export const Center = css`
display: flex;
justify-content: center;
align-items: center;
`;

export const Main = styled.main`
background-color: #F66000;
height: 100vh;
`;
export const BoxOne = styled.div`
/* border: solid 2px red; */
width: 40vw;
height: 47vh;
${Center}
flex-direction: column;
justify-content: space-around;
align-items: end;
gap: 30px;
h2{
    color: white;
    /* border: solid 2px blue; */
    font-size: 3rem;
    width: 30vw;
}
`;

export const Title = styled.h1`
color: white;
/* border: solid 2px yellow; */
font-size: 5rem;
${Center}
flex-direction: column;
span{
    font-size: 3.5rem; 
}
`;

export const BoxTwo = styled.section`
/* border: solid 2px yellow; */
height: 50vh;
`
export const BoxItem = styled.div`
/* border: solid 2px green; */
width: 54vw;
${Center}
justify-content: end;
flex-wrap: wrap;
gap: 20px;
img{
    width: 10vw;
    border-radius: 10px;
}
`

