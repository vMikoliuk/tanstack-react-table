import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  query TableTwo {
    comments {
      data {
        id
        name
        body
      }
    }
  }
`;
