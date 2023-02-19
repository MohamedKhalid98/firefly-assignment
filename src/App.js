import Logo from "./assets/svgs/firefly-logo.svg";
import Configurations from "./pages/Configurations/Configurations";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="container py-4">
            <img src={Logo} alt="firefly logo" />
          </div>
        </header>
        <main className="my-5">
          <Configurations />
        </main>
      </div>
    </div>
  );
}

export default App;
