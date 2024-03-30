import styled from 'styled-components'

export const ContainerHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px 20px;
padding-top: 15px;
padding-bottom: 15px;
border-bottom: grey 1px solid;

.logo{
    display: flex;
    gap: 20px;
    color: #ff5b00;
}

.menu{
    color: #ff5b00;
    font-size: 2em;
}
.menubar{
    cursor: pointer;
}

.options{
    display: flex;
    align-items: center;
    gap: 12px;
}

.menuoptions{
    position: absolute;
    transform: translateX(-70%);
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    background-color: white;
    width: 60%;
    border-radius: 20px;
}
.menuoptions li{
    margin: 40px 0px;
    font-weight: 600;
}

a{
    text-decoration: none;
    color: #ff5b00;
}
`