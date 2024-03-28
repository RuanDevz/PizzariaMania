import styled from "styled-components";

export const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;

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
    }
`;
