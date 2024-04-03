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
a{
    text-decoration: none;
}


@media only screen and (min-width: 1024px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;

    img{
        width: 500px;
    }

    .infos p{
        max-width: 600px;
        font-size: 2em;
    }

    .front{
        width: 500px;
        padding: 30px 0px;
        font-size: 1.5em;
    }
}
`

export const TitleHomepage = styled.h1`
        text-align: center;
        color: #ff5b00;
        font-weight: bolder;
        font-size: 2em;
        margin-top: 20px;

        @media only screen and (min-width: 1024px){
            font-size: 3em;
        }
`