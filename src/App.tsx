import Header from "./components/Header"
import ResultsCard from "./components/ResultsCard"

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="movies">
          <div className="mol-container">
            <ResultsCard />
            <ResultsCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
