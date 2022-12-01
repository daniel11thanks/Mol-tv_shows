import SearchButton from "../SearchButton"
import './styles.css'

function ResultsCard() {
    return (
        <div className="mol-card">
                    <h2 className="mol-movies-title">TV Shows</h2>
                    <div>
                        <div className="mol-form-control-container">
                            <input className="mol-form-control" type="text" />
                            <SearchButton />
                        </div>
                        
                    </div>
                </div>
    )
  }
  
  export default ResultsCard