import { gql } from '@apollo/client';

export const UPVOTE_NEWS_ITEM_MUTATION = gql`
  mutation UpvoteNewsItem($id: Int!) {
    upvoteNewsItem(id: $id) {
      id
      upvoteCount
      upvoted
    }
  }
`;
