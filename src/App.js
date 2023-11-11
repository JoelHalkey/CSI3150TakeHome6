import "./App.css";
import Hero from "./components/Hero/Hero";
import TravelBlog from "./components/TravelBlog/TravelBlog";
import TravelData from "./TravelData";

function App() {
  // Loading in the data and pictures from TravelData.js into <TravelBlog> divs
  const travelBlogCards = TravelData.map((item) => {
    return(<TravelBlog
      key={item.id} placeHeading={item.placeHeading} placeImg1={item.placeImg1} placeImg2={item.placeImg2} placeImg3={item.placeImg3} placeDescription={item.placeDescription}
    />);
  });
  return <div className="App">
    <Hero/>
    {/* Displaying the Travelblog divs */}
    <section className='travelblog-card-container'>
        {travelBlogCards}
    </section> 
  </div>;
}

export default App;
