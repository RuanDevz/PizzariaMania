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

@media only screen and (min-width: 1024px){
justify-content: space-around;
}
`

export const Containerconfig = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 30px;
align-items: center;
width: 100%;
position: absolute;
top: 100px;

.config{
    text-align: right;
    text-decoration: none;
    color: #ff5b00;
    font-weight:bolder;
}
`

export const Product = styled.div`
  @media only screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;

    .Product-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      width: 300px;
      margin: 30px 50px; 
      padding: 20px 0px;
      border-radius: 20px;
      background-color: #f0f0f0;
      box-shadow: 2px 4px 17px 0px rgba(0, 0, 0, 0.75);

      img{
        width: 200px;
      }

      p{
        padding: 20px 0px;
      }
    }
  }
`;