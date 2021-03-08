import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../Hooks/useForm';

import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q } = queryString.parse(location.search);
    const [formValues, handleInputChange] = useForm({
        searchText: q
    })
    const { searchText } = formValues;  
    const heroesFiltered = useMemo(() => getHeroByName(q), [q])
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }
    return (
        <div>

            <div className="row" >
                <div className="col-5" >
                    <h1>Search screen</h1>
                    <hr />
                    <form onSubmit={handleSearch} >
                        <input name="searchText" autoComplete="off" value={searchText} onChange={handleInputChange} type="text" placeholder="Find your hero" className="form-control" />
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary" >Search</button>
                    </form>
                </div>
                <div className="col-7" >
                    <h4>Results</h4>
                    <hr />
                    {(q === '') &&
                        <div className="alert alert-info" >
                            Search A hero
                     </div>}
                     {(q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger" >
                            There is not a hero with  {q}
                     </div>}
                    {
                        heroesFiltered.map(hero => (<HeroCard key={hero.id} {...hero} />))
                    }
                </div>
            </div>
        </div>
    )
}
