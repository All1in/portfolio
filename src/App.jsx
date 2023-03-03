import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import './styles/App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <AppRouter />
    </div>
  );
}

export default App;
