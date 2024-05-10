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

@media only screen and (min-width: 1024px){
    .sc-fLseNd{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 30px;
    }
}

#back{
  position: absolute;
  left: 100px;
  top: 50px;
  font-size: 3em;
  color: #ff5b00;
  cursor: pointer;
}
`

export const Products = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
max-width: 1000px;

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

.containerdivproduct{
    display: flex;
    justify-content: center;
    align-items: center;
}

.edit{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 200px;

    #remove{
        color: #dc3545;
        font-size: 1.5em;
        cursor: pointer;
    }

    #edit{
    color: #007bff;
    font-size: 1.5em;
    cursor: pointer;
}
}
`