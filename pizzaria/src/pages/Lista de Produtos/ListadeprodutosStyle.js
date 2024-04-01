import styled from "styled-components";

export const ContainerProdutos = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    margin-top: 20px;
    font-size: 2.5em;
    padding-bottom: 40px;
}
`

export const Products = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

img{
    width: 150px;
}

p{
    font-weight: 600;
}

.containerproduct{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 300px;
    padding: 15px;
    border-radius :30px;
    margin: 20px 0px;

    box-shadow: box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.75);;
}
`