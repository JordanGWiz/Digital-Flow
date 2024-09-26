import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Navigation />
      <main className="content-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
