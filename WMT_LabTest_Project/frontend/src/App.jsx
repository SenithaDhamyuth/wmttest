import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ItemCard from "./components/Itemcard.jsx";
import ItemForm from "./components/ItemForm.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddItemPage from "./pages/AddItemPage.jsx";
import EditItemPage from "./pages/EditItemPage.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-item" element={<AddItemPage />} />
          <Route path="/edit-item/:id" element={<EditItemPage />} />
          <Route path="/items" element={<ItemCard />} />
          <Route path="/item-form" element={<ItemForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;