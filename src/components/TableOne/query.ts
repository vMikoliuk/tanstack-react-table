import { gql } from "@apollo/client";

export const QUERY_LAUNCH_LIST = gql`
  query TableOne($page: Int, $limit: Int) {
    posts (options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
        body
      }
      meta { 
        totalCount
      }
      links {
        first {
          page
          limit
        }
        prev {
          page
          limit
        }
        next {
          page
          limit
        }
        last {
          page
          limit
        }
      }
    }
  }
`;
