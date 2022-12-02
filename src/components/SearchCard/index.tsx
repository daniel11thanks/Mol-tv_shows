import SearchButton from "../SearchButton"
import './styles.css'

function SearchCard() {
    return (
        <div className="mol-card">
                    <h2 className="mol-movies-title">type something and we'll find a series about it</h2>
                    <div>
                        <div className="mol-form-control-container">
                            <input className="mol-form-control" type="text" />
                            <SearchButton />
                        </div>
                        
                    </div>
                </div>
    )
  }
  
  export default SearchCard