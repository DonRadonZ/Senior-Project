import { gql } from "@apollo/client";

export const GET_BUYER = gql`
    query GET_BUYER {
        getBuyer {
            value
        }
    }
`