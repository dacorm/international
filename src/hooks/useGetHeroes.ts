import {useEffect, useState} from "react";
import {Heroes as HeroesType} from "../@types/serverType";
import axios from "axios";
import {getWithExpiry, setWithExpiry} from "../helpers/localStorage";

export function useGetHeroes() {
    const [heroes, setHeroes] = useState<HeroesType[]>();

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const { data } = await axios.get('https://api.opendota.com/api/heroes?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
                setWithExpiry<HeroesType[]>('heroes', data, 5000000);
                setHeroes(data);
            } catch (e) {
                console.log(e);
            }
        }

        setHeroes(getWithExpiry('heroes'));
        if (!heroes) {
            fetchHeroes();
        }
    }, [])

    return heroes;
}