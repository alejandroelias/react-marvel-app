import React, { useEffect, useState } from 'react'
import { CharacterGrid } from './CharactersGrid';

export const CharactersScreen = () => {

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a469d537242aa86366793c4d967002ba&hash=7f20301e7b4fa19a61cffb032aab3714&limit=5';

        const resp = await fetch(url);
        const { data } = await resp.json();
        // console.log(data);

        const characters = data.results.map(results => {
            return {
                id: results.id,
                name: results.name,
                description: results.description,
                thumbnailPath: results.thumbnail.path,
                extension: results.thumbnail.extension
            }
        })

        // console.log(characters);
        setHeroes(characters);
    }

    return (
        <div>
            {

                heroes.map(heroe => (

                    <CharacterGrid
                        key = {heroe.id}
                        {...heroe}
                    />
                ))
            }
        </div>
    )
}
