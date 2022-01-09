import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { DrawerLeft } from '../components/ui/DrawerLeft'

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <DrawerLeft />
        </BrowserRouter>
    )
}
