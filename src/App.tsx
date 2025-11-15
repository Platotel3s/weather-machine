import Header from './components/Header'
import './App.css'
import WeatherApp from './components/WeatherApp';
import About from './components/About'


function App() {
  return (
    <>
      <Header />
      <div className="App">
        <WeatherApp />
      </div>
      <About />
      
    </>
  )
}

export default App
