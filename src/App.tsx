import { Suspense } from "react";
import {techType} from "./techType";
import Banner from "./component/Banner";
import ExploreTech from "./component/ExploreTech";
import Nav from "./component/Nav";
import Footer from "./component/Footer";

const techData = async():Promise<techType[]> =>{
  const res= await fetch("/technologies.json");
  const data = await res.json();
  return data;

}

function App() {
  const techPromise = techData();
  return (
    <div>
      <div className="sticky top-0 z-50 bg-white">
        <Nav />
        <hr className="border-gray-200" />
      </div>

      <div>
        <Banner />
      </div>
      <div>
        <Suspense fallback={<h1>Loading technologies...</h1>}>
        <ExploreTech techPromise={techPromise}></ExploreTech>
        </Suspense>
       <hr className=" border-gray-200 mt-20"/>
      </div>
<div>
  <Footer/>
</div>

    </div>
   
  );
}

export default App;
