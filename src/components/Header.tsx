import './Header.css';

function Header() {
  return (
    <header className="weather-header">
      <h1 className="weather-title">☁️ Weather Machine</h1>
      <nav className="weather-nav">
        <a href="#">Home</a>
        <a href="#">Forecast</a>
        <a href="#">About</a>
      </nav>
    </header>
  );
}

export default Header;