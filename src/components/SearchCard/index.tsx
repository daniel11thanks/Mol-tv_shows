import axios from 'axios';
import { SetStateAction, useState } from "react";
import { ResultList } from '../../models/result';
import { DescriptionList } from '../../models/description';
import Button from '../Button';
import imgBackup from '../../assets/img/tv.jpg';


import './styles.css'

function SearchCard() {

    const [search, setSearch] = useState('');
    const [results, setResults] = useState<ResultList[]>([]);
    const [resultActive, setResultActive] = useState(false);
    const [description, setDescription] = useState('');
    const [descriptionActive, setdescriptionActive] = useState(false);
    const [summary, setSummary] = useState('');

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearch(event.target.value)

    }

    function handleClick(search: string) {

        setdescriptionActive(false);
        
        axios(`http://api.tvmaze.com/search/shows?q=${search}`)
            .then(response => {
                setResults(response.data)
            })
            .catch(error => console.log('error is', error));
            setResultActive(true);
            window.scrollTo(0, 5000);
    }

    function handleClickResult(show: any) {
        let tagP = show.summary
        let removeP = tagP.replace(/<\/?[pb]>/g, '')
        setSummary(removeP)
        setDescription(show);
        setdescriptionActive(true);
        window.scrollTo(0, 2000);
    }

    function handleClickReset () {
        setResultActive(false);
        setdescriptionActive(false);
        setResults([])
    }

    return (
        <>
            <div className="mol-card">
                <h2 className="mol-movies-title">type something and we'll find a series about it</h2>
                <div className="mol-form-control-container">
                    <input className="mol-form-control" type="text" value={search} onChange={handleChange} />
                    <Button label='search' operation='search' click={() => handleClick(search)} />
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
            <div className={descriptionActive ? 'description-card-visible '  : 'description-card-invisible'}>
                <ul>
                    <li><strong>Name:</strong> {description.name? description.name : 'unavailable' } </li>
                    <li><strong>Language:</strong> {description.language? description.language : 'unavailable' } </li>
                    <li><strong>Genres:</strong> {description.genres? description.genres : 'unavailable'} </li>
                    <li><strong>Premiered:</strong> {description.premiered? description.premiered : 'unavailable'}</li>
                    <li><strong>Status:</strong> {description.status? description.status : 'unavailable'} </li>
                    <li><strong>Summary:</strong> {summary? summary : 'unavailable'}</li>
                </ul>
                <img src={description.image? description.image.medium : imgBackup} height="280" />
            </div>
            <div className={descriptionActive ? 'description-btn-conteiner-visible' : 'description-btn-conteiner-invisible'}>
                <Button label='Reset Search' operation='reset' click={() => handleClickReset()}  />
            </div>
        </>
    )
}

export default SearchCard