
import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    #back{
            position: absolute;
            left: 0px;
            top: 50px;
            font-size: 3em;
            color: #ff5b00;
            cursor: pointer;
}


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
        gap: 500px;

        img{
            display: none;
        }

@media screen and (min-width: 1024px) {
    margin-right: 800px;
    form{
        flex-direction: column;
    }
    img{
            display: flex;
            position: absolute;
            top: 0;
            right: 0;
            transform: translateX();
            width: 500px;
        }
}

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

            
        #back{
            position: absolute;
            left: 100px;
            top: 50px;
            font-size: 3em;
            color: #ff5b00;
            cursor: pointer;
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
justify-content: center;
align-items: center;
flex-direction: column;
gap: 80px;
`

