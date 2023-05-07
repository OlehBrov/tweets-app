import { ChakraProvider } from "@chakra-ui/react";
import { Homepage } from "./Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import { TweetsPage } from "./Pages/Tweets";


function App() {
  return (
    <div>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="tweets/:id" element={<TweetsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />{" "}
          </Route>
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
