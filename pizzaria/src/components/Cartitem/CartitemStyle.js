import styled from 'styled-components'

export const CartProducts = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    padding-bottom: 40px;
    color: #ff5b00;
}

.container-img img{
    width: 100px;
}
`

export const Orders = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-top: 2px solid #000;
border-bottom: 2px solid #000;
padding: 20px 0px;
width: 100%;
gap: 20px;
img{
    width: 100px;
}
`