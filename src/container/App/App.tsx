import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Favorites from 'pages/Favorites/Favorites'
import About_Page from 'pages/About/About_Page'
import Adventures_Page from 'pages/Adventures/Adventures_Page'
import Places_Page from 'pages/Places/Places_Page'
import Guides_Page from 'pages/Guides/Guides_Page'
import JoinUs from 'pages/JoinUs/JoinUs'
import 'assets/font.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import { useState } from 'react'
type Props = {}

type articlesInFav = {
    [id: number]: number
}

const App = (props: Props) => {
    const [articlesInFav, setArticlesInFav] = useState<articlesInFav>({
        1: 1,
    })

    const addAricleToFav = (id: number) => {
        setArticlesInFav((prevState) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    const removeArticleFromFav = (id: number) => {
        setArticlesInFav((prevState) => {
            let prevArticleInFav = { ...prevState }
            delete prevArticleInFav[id]
            return prevArticleInFav
        })
    }

    const removeAllArticlesFromFav = (id: number) => {
        setArticlesInFav((prevState) => {
            let prevArticleInFav = { ...prevState }
            delete prevArticleInFav[id]
            return prevArticleInFav
        })
    }

    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home addAricleToFav={addAricleToFav} />}
                />
                <Route
                    path="favorites"
                    element={
                        <Favorites
                            articlesInFav={articlesInFav}
                            removeArticleFromFav={removeArticleFromFav}
                            removeAllArticlesFromFav={removeAllArticlesFromFav}
                        />
                    }
                />
                <Route path="about" element={<About_Page />} />
                <Route
                    path="adventures"
                    element={
                        <Adventures_Page addAricleToFav={addAricleToFav} />
                    }
                />
                <Route
                    path="places"
                    element={<Places_Page addAricleToFav={addAricleToFav} />}
                />
                <Route
                    path="guides"
                    element={<Guides_Page addAricleToFav={addAricleToFav} />}
                />

                <Route path="joinus" element={<JoinUs />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
