import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  const travelBlogCards = TravelBlog.map((item) => {
    <TravelBlog
      key={item.id}
      placeHeading={item.placeHeading}
      placeImg1={item.placeImg1}
    ></TravelBlog>;
  });
  return <div className="App"></div>;
}

export default App;
