import styled from "styled-components";


export const ContainerGeral = styled.div`
display: flex;
justify-content: space-around;
padding-top: 200px;
`
export const Options = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
background-color: #e8e8e8;
max-width: 1200px;
border-radius: 15px;
padding: 20px 10px;
width: 900px;
cursor: pointer;

h1,p{
    margin-left: 40px;
}

img{
    position: absolute;
    transform: translate(-62%,-22%);
    width: 70px;
}
`

export const Container = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
gap: 50px;
`

export const Order = styled.div`
display: flex;
justify-content: center;
background-color: #e8e8e8;
width: 465px;
border-radius: 15px;

.containertitle{
    display: flex;
    justify-content: space-between;
    gap: 50px;
    align-items: center;
}
`