import styled from "styled-components";

export const ContainerHome = styled.main`
display: flex;
justify-content:center;
align-items: center;
flex-direction: column;


div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
h1{
    color: #ff5b00;
    text-align: center;
    margin-top: 30px;
    font-size: 2.2em;
}
img{
    margin-top: 20px;
    width: 200px;
    border-radius: 50%;
}

.infos{
    margin-top: 20px;
}

.infos p{
    color: grey;
    max-width: 360px;
    text-align: center;
    font-size: 1.4em;
}
`