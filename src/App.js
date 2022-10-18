import { Bag, Banner, BigCard, Footer, Header, Info, Info2, Map, Picture } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Info />
      <Map />
      <Picture />
      <Bag />
      <BigCard />
      <div className="my-10 flex items-center justify-center">
        <button className="bg-black px-6 py-1 rounded-lg text-white">
          GET VIP ACCESS
        </button>
      </div>
      <Info2 />
      <Footer/>
    </div>
  );
}

export default App;
