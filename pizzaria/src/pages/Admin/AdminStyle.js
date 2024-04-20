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

#list{
    color: #fd7e14;
}

.container_gerenciamento{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media only screen and (min-width: 1024px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 250px;
    transition: transform 2s ease;
}

.icon:hover{
    transform: scale(1.2);
    transition: transform 1s ease;
}
`