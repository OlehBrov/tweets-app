import { ChakraProvider } from "@chakra-ui/react";
import { Homepage } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import { TweetsPage } from "./Pages/Tweets";
import { useState } from "react";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="tweets/:id" element={<TweetsPage/> } />
          </Route>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
