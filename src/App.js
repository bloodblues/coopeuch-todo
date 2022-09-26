import './App.scss';
import Container from './components/Container';
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Container></Container>
      </div>      
    </Provider>
  );
}

export default App;
