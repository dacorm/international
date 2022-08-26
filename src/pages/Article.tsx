import React, {useEffect, useState} from 'react';
import Header from "../components/Header/Header";
import TextSlide from "../components/TextSlide/TextSlide";
import WhiteHeading from "../components/WhiteHeading/WhiteHeading";
import {useParams} from "react-router-dom";
import { arrayOfDataArrays } from "../assets/arrayOfData";

const Article = () => {
    const [text, setText] = useState('');
    const { id } = useParams();

    const articleChecker = (array: any[]) => {
        for (let i = 0; i < array.length; i++) {
            if (Number(id) === array[i]?.id) {
                setText(array[i]?.title)
            }
        }
    }

    useEffect(() => {
        articleChecker(arrayOfDataArrays);
    }, [id])

    return (
        <div>
            <Header />
            <WhiteHeading />
            <TextSlide />
            {text ? text : 'Article text not found'}
        </div>
    );
};

export default Article;