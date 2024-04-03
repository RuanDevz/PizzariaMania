
import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    .front{
        width: 350px;
    }
    h1 {
        text-align: center;
        color: #ff5b00;
        padding-top: 40px;
    }
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 20px 0px;

        p#error {
            margin-top: 10px;
            font-size: 1em;
            font-weight: bold;
            color: red;
            text-align: center;
        }

        @media only screen and (min-width: 1024px){
            display: flex;
            justify-content: space-around;
            align-items: center;
            .front{
                width: 350px;
            }
            
        }
    }
`;

export const SucessMessage = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        width: 300px;
        height: 10px;
        border-radius: 20px;
        align-items: center;
        background-color: white;
        box-shadow: -webkit-box-shadow: -2px 2px 17px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 2px 17px 0px rgba(0,0,0,0.75);
        box-shadow: -2px 2px 17px 0px rgba(0,0,0,0.75);;
        padding: 100px 100px;

        h2{
            font-size: 1.05em;
            text-align: center;
            white-space: nowrap;
            color: #ff5b00;
        }

        img{
            width: 60px;
        }
`

export const Containerinputs = styled.div`
display: flex;
flex-direction: column;
gap: 80px;
`

