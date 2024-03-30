import styled from 'styled-components'

export const AdminContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    text-align: center;
    margin-top: 15px;
    color: #ff5b00;
}
`

export const Gerenciamento = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 100px;
gap: 100px;

h2{
    font-size: 2em;
}

.icon{
    margin: 40px 0px;
    font-size: 5em;
    cursor: pointer;
}

#add{
    color: #4caf50;
}

#edit{
    color: #007bff;
}

#remove{
    color: #dc3545;
}

.container_gerenciamento{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`