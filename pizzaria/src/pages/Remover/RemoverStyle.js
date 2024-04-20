import styled from 'styled-components'

export const ContainerRemover = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

#back{
  position: absolute;
  left: 100px;
  top: 50px;
  font-size: 3em;
  color: #ff5b00;
  cursor: pointer;
}

.confirmremoveproduct{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: 350px;
  margin-top: 30px;
  padding-bottom: 80px;
  border-radius: 20px;
  box-shadow: -webkit-box-shadow: -1px 2px 18px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 2px 18px 0px rgba(0,0,0,0.75);
    box-shadow: -1px 2px 18px 0px rgba(0,0,0,0.75);;

  .confirmbutton{
    display: flex;
    gap: 40px;
  }
  img{
    width: 150px;
  }

  p{
    font-weight: bold;
    margin: 10px 0px;
  }
}

h1{
    margin-top: 200px;
    max-width: 300px;
    text-align: center;
}
`

export const ContainerInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.input-container {
    position: relative;
  }

  .input {
    font-size: 1em;
    margin: 30px 0px;
    padding: 0.6em 1em;
    border: none;
    border-radius: 6px;
    background-color: #f8f8f8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    max-width: 300px;
    color: #333;

    &:hover {
      background-color: #f2f2f2;
    }

    &:focus {
      outline: none;
      background-color: #fff;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    &::placeholder {
      color: #999;
    }
  }

  .highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    transition: width 0.3s ease;
  }

  .input:focus {
    animation: input-focus 0.3s ease;
  }
`