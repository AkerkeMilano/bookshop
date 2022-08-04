import "./App.css";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import BookShop from "./containers/BookShop/BookShop";
import Cart from "./containers/Cart/Cart";
import AppToolbar from "./components/AppToolbar/AppToolbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <AppToolbar />
              <main>
                  <Outlet />
              </main>
            </>
          }
        >
          <Route path="/" element={<BookShop />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
