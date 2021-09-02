import { Provider } from "react-redux";
import "./App.css";
import ProductsList from "./components/ProductsList";
import store from './store'
import Header from './components/header/Header'
function App() {
  return (
    
    <Provider store={store}>
    <Header />
      <div className="App">
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;
