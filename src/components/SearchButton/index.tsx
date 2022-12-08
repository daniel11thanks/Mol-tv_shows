import axios from 'axios';
import './styles.css';



type Props = {
    search: string;
}

function handleClick(search :string) {
    axios(`http://api.tvmaze.com/search/shows?q=${search}`)
    .then( response => {
  
        const resultado = response.data
        console.log(resultado)
    });
}

function SearchButton( {search} : Props) {
    
    return (
        <button className="mol-orange-btn" onClick={() => handleClick(search)} >
            Search
        </button>
    )
}

export default SearchButton
