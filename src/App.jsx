import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AppRouter />
        <Footer />
    </div>
  );
}

export default App;
