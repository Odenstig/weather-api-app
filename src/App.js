import './App.css';
import WeatherContainer from './containers/WeatherContainer';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <div className='App'>
      <WeatherContainer/>
    </div>
    </>
  );
}

export default App;
