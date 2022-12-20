import {useEffect, useState} from "react";
import {DotaMatchJSON} from "../@types/serverType";
import axios from "axios";

export const useGetLastMatch = () => {
    const [items, setItems] = useState<DotaMatchJSON[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        const data = await axios.get('https://api.opendota.com/api/proMatches?api_key=de6dcb55-631f-474f-9c19-f98d5d016e96');
        setItems(data.data.slice(0, 1));
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return {
        items,
        isLoading,
    }
}
