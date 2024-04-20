import styled from 'styled-components'

export const CartProducts = styled.div`
body{
  overflow-y: hidden;
}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 380px;
  z-index: -1;
  padding: 0px 20px;

  .mycart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff5b00;
    width: 330px;
    padding: 10px 10px; 
  }

  #xmark{
    font-size: 1em;
  }

  .mycart h1 {
    margin: 0;
    font-size: 1em;
  }

  .container-img img {
    width: 100px;
  }
`

export const Orders = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 330px;
  margin: 10px 0px;
  padding: 10px 0px;
  background-color: #FAFAFA;
  box-shadow: -webkit-box-shadow: 0px 3px 14px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 3px 14px -7px rgba(0,0,0,0.75);
box-shadow: 0px 3px 14px -7px rgba(0,0,0,0.75);;

  img {
    width: 80px;
  }

  h1 {
    font-size: 1em;
    background-color: white;
  }

  .titleandprice{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .numitens{
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .removeiten{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    padding: 5px;
  }
  #trash{
    color: white;
    cursor: pointer;
  }

  .finisbuy{
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
  }

  .totalprice{

  }

  P{
    color: #8e8e8e;
  }

  #minus{
    cursor: pointer;
    color: red;
  }

  #max{
    cursor: pointer;
    color: green;
  }
`

export const Finish = styled.div`
position: absolute;
bottom: 0;
margin-bottom: 20px;

h2{
  text-align: center;
}
`
