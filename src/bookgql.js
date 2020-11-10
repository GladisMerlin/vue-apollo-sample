import gql from 'graphql-tag'
export const BOOK_QUERY = gql `query book($id: Int!) {
    book(id: $id) {
        id
        name
        author {
            id
            name
        }
    }
}`