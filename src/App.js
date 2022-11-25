import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import getTheme from './themes/getTheme';
import {store} from './store/index'
function App() {
  return (
    <>
    <Provider store={store} >
    <ThemeProvider theme={getTheme()}>
      <Home></Home>
      </ThemeProvider>
    </Provider>
    </>
  );
}

export default App;
