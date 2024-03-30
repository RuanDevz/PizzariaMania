import styled from "styled-components";

export const DashboardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1{
    font-size: 1.7em;
    margin-top: 20px;
    text-align: center;
}

img{
    width: 250px;
}

p{
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
    max-width: 250px;
    color: grey;
}

span#name{
    color: #ff5b00;
}

p#price{
    margin-top: 22px;
    color: #000;
}
.Product{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 320px;
    gap: 10px;
    margin-top: 40px;
    border-radius: 20px;
    padding-bottom: 20px;
    -webkit-box-shadow: 2px 4px 17px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 4px 17px 0px rgba(0,0,0,0.75);
    box-shadow: 2px 4px 17px 0px rgba(0,0,0,0.75);
}
`