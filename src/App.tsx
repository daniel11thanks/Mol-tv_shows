import DescriptionCard from "./components/DescriptionCard"
import Header from "./components/Header"
import ResultsCard from "./components/ResultsCard"
import SearchCard from "./components/SearchCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="movies">
          <div className="mol-container">
            <SearchCard />
            <ResultsCard />
            <DescriptionCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
