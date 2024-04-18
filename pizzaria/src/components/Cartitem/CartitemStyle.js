import styled from 'styled-components'

export const CartProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 330px;

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
    width: 50px;
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

  .numitens input{
    width: 30px;
    height: 30px;
    text-indent: 9px;
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
  }

  .finisbuy{
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
  }
`
