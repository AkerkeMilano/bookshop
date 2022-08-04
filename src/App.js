import "./App.css";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import BookShop from "./containers/BookShop/BookShop";
import Chart from "./containers/Chart/Chart";
import AppToolbar from "./components/AppToolbar/AppToolbar";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <AppToolbar />
              <main>
                <Container>
                  <Outlet />
                </Container>
              </main>
            </>
          }
        >
          <Route path="/" element={<BookShop />} />
          <Route path="/chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
