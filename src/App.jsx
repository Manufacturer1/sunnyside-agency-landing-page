import NavBar from "./components/navBar"
import Hero from "./components/heroComponent"


function App() {

  return (
    <>
    <div>
      <NavBar/>
    </div>
      <div className="absolute top-[100%] grid grid-cols-2 grid-rows-3 w-full">
          <div>
            <Hero/>
          </div>
          <div>
            Eggs
          </div>
          <div>
            Cup
          </div>
          <div>
            Stand out
          </div>
          <div>
            Cherry
          </div>
          <div>
            Orange
          </div>
      </div>
    </>
  )
}

export default App
