import { HttpLink, type QueryOptions } from "@apollo/client";
import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV !== "production") {
    loadDevMessages();
    loadErrorMessages();
}

export const { getClient } = registerApolloClient(
    () =>
        new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: "https://dev-techno-kenneth.pantheonsite.io/graphql",
            }),
        })
);

const graphqlQuery = async<T>(query: QueryOptions['query'], variables?: QueryOptions['variables']) => {
    const client = getClient();

    const { data, loading, error } = await client.query<T>({
        query,
        variables,
    });

    if (error) {
        console.error(error);
    }

    return { ...data, loading, error };
}

export default graphqlQuery;