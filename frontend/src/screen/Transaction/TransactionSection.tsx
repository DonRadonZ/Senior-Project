import React, {FunctionComponent} from "react";
 import styled from "styled-components";

const TransactionSectionBackground = styled.view`
    width: 100%
    padding-horizontal: 25px;
    padding-top: 5px;
    flex: 2;
`;

const TransactionRow = styled.view`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const TransactionList = styled.view`
    width: 100%;

`

const TransactionSection: FunctionComponent = () =>{
    return(
        <TransactionSectionBackground>
            <TransactionRow style={{marginBottom: 25}}>
                

            </TransactionRow>
        </TransactionSectionBackground>

    );
}