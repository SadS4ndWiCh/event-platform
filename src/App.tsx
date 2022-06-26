import { ApolloProvider } from "@apollo/client"
import { Router } from "./Router"

import { client } from './lib/apollo';
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <ApolloProvider client={client}>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SkeletonTheme>
    </ApolloProvider>    
  )
}

export default App
