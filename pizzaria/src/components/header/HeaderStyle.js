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

@media only screen and (min-width: 1024px){
.menubar{
    display: none;
}

.menuoptions{
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    gap: 80px;
    background-color: none;
}

.menuoptions li{
    margin: 10px 0px;
}

.menu{
    font-size: 1.3em;
}

.options{
    cursor: pointer;

    &:hover{
        color: #db4e00;
    }
}

#user{
    cursor: pointer;
}

#config{
    cursor: pointer;
}

}
`

export const Configuser = styled.div`
text-align: center;
white-space: nowrap;
position: absolute;
background-color: #fff;
top: 0;
transform: translateX(40%);
margin-top: 50px;

li{
    font-size: 0.9em;
    cursor: pointer;
    padding: 10px 5px;

    &:hover{
        color: #fff;
        background-color: #ff5b00;
    }
}
`