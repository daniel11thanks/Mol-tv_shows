import Header from './components/Header'
import SearchCard from './components/SearchCard'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id='movies'>
          <div className='mol-container'>
            <SearchCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
