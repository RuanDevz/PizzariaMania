import styled from "styled-components";

export const ContainerLogin = styled.div`

h1{
    text-align: center;
    color: #ff5b00;
    font-size: 2.2em;
    font-weight: bolder;
    padding-top: 70px;
}

form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin-top: 60px;
}

.Join{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}

.register{
    text-decoration: none;
    color: #ff5b00;
    margin-top: 50px;
    font-weight: bold;
}

p#error{
   color: red;
  font-size: 14px;
  margin-top: 5px;
}

`