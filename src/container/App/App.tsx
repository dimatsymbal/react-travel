import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Favorites from 'pages/Favorites/Favorites'
import About_Page from 'pages/About/About_Page'
import Adventures_Page from 'pages/Adventures/Adventures_Page'
import Places_Page from 'pages/Places/Places_Page'
import Guides_Page from 'pages/Guides/Guides_Page'
import 'assets/font.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { useState } from 'react'
type Props = {}

type productsInFav = {
    [id: number]: number
}
type productsInFav2 = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInFav, setProductsToFav] = useState<productsInFav>({
        1: 1,
    })

    const addPlacesToCart = (id: number) => {
        setProductsToFav((prevState) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    const [productsInFav2, setProductsToFav2] = useState<productsInFav2>({
        4: 1,
    })

    const addGuidesToCart = (id: number) => {
        setProductsToFav2((prevState) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            addPlacesToCart={addPlacesToCart}
                            addGuidesToCart={addGuidesToCart}
                        />
                    }
                />
                <Route
                    path="favorites"
                    element={
                        <Favorites
                            productsInFav={productsInFav}
                            productsInFav2={productsInFav2}
                        />
                    }
                />
                <Route path="about" element={<About_Page />} />
                <Route path="adventures" element={<Adventures_Page />} />
                <Route path="places" element={<Places_Page />} />
                <Route
                    path="guides"
                    element={<Guides_Page addGuidesToCart={addGuidesToCart} />}
                />
            </Routes>
            <Footer />
        </>
    )
}
export default App
