import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Favorites from 'pages/Favorites/Favorites'
import About_Page from 'pages/About/AboutPage'
import Adventures_Page from 'pages/Adventures/AdventuresPage'
import Places_Page from 'pages/Places/PlacesPage'
import Guides_Page from 'pages/Guides/GuidesPage'
import JoinUs from 'pages/JoinUs/JoinUs'
import 'assets/font.css'
import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home/Home'
import ArticlePage from 'pages/Article/ArticlePage'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="about" element={<About_Page />} />
                <Route path="adventures" element={<Adventures_Page />} />
                <Route path="places" element={<Places_Page />} />
                <Route path="guides" element={<Guides_Page />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
                <Route path="joinus" element={<JoinUs />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
