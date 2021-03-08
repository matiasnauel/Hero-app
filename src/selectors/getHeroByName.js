import { heroes } from "../components/data/heroes"


export const getHeroByName = (name='') =>{
    if(name  === '')
    {
        return [];
    }
    name = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name))
}