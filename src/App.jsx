import Banner from "./component/Banner";
import Nav from "./component/Nav";

function App() {
  return (
    <div>
      <div>
        <Nav />
        <hr className="border-gray-200" />
      </div>

      <div>
        <Banner />
      </div>
    </div>
  );
}

export default App;
