import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharactersScreen } from '../components/Characters/CharactersScreen'
import { MoviesScreen } from '../components/Movies/MoviesScreen'
import { DrawerLeft } from '../components/ui/DrawerLeft'

export const AppRouter = () => {
    return (
        <BrowserRouter>
        <DrawerLeft />
            <Routes>
                <Route path ="/" element={<CharactersScreen />}/>
                <Route path ="/personajes" element={<CharactersScreen />}/>
                <Route path ="/movies" element={<MoviesScreen />}/>
            </Routes>
        </BrowserRouter>
    )
}
