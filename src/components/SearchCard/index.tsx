import { SetStateAction, useState } from "react"
import SearchButton from "../SearchButton"
import './styles.css'

function SearchCard() {

    const [search, setSearch] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearch (event.target.value)
    }


    return (
        <div className="mol-card">
            <h2 className="mol-movies-title">type something and we'll find a series about it</h2>
            <div>
                <div className="mol-form-control-container">
                    <input className="mol-form-control" type="text" value={search} onChange={handleChange}/>
                    <SearchButton search={search} />
                </div>

            </div>
        </div>
    )
}

export default SearchCard