import axios from 'axios';
import { SetStateAction, useState } from "react";
import { ResultList } from '../../models/result';
import Button from '../Button';
import imgBackup from '../../assets/img/tv.jpg';


import './styles.css'

function SearchCard() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState<ResultList[]>([]);
    const [resultActive, setResultActive] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionActive, setdescriptionActive] = useState(false);

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearch(event.target.value)

    }

    function handleClick(search: string) {

        
        axios(`http://api.tvmaze.com/search/shows?q=${search}`)
            .then(response => {
                setResults(response.data)
            })
            .catch(error => console.log('error is', error));
            setResultActive(true);
    }

    function handleClickResult(show: object) {
        setDescription(show);
        console.log(description);
        setdescriptionActive(true);
    }

    return (
        <>
            <div className="mol-card">
                <h2 className="mol-movies-title">type something and we'll find a series about it</h2>
                <div className="mol-form-control-container">
                    <input className="mol-form-control" type="text" value={search} onChange={handleChange} />
                    <Button label='search' operation='reset' click={() => handleClick(search)} />
                </div>
            </div>
            <div className={resultActive ? 'results-card' : ''}  >
                <div className="results">
                    {results.map(result => {
                        return (
                            
                            <div key={result.show.id}>
                                <img src={result.show.image? result.show.image.medium : imgBackup } onClick = {() => handleClickResult(result.show)} />
                                <p>{result.show.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={descriptionActive ? 'description-card'  : ''}>
                <ul>
                    <li><strong>Name:</strong> {description.name} </li>
                    <li><strong>Language:</strong> {description.language} </li>
                    <li><strong>Genres:</strong> {description.genres} </li>
                    <li><strong>Premiered:</strong> {description.premiered}</li>
                    <li><strong>Status:</strong> {description.status} </li>
                    <li><strong>Summary:</strong> {description.summary}</li>
                </ul>
                <img src={description.image? description.image.medium : imgBackup} height="280" />
            </div>
            <div className="description-btn-conteiner">
            </div>
        </>
    )
}

export default SearchCard