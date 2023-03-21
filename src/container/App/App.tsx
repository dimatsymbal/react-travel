import Footer from 'container/Footer/Footer'
import Header from 'container/Header/Header'
import Favorites from 'pages/Favorites/Favorites'
import AboutPage from 'pages/About/AboutPage'
import AdventuresPage from 'pages/Adventures/AdventuresPage'
import PlacesPage from 'pages/Places/PlacesPage'
import GuidesPage from 'pages/Guides/GuidesPage'
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
                <Route path="about" element={<AboutPage />} />
                <Route path="adventures" element={<AdventuresPage />} />
                <Route path="places" element={<PlacesPage />} />
                <Route path="guides" element={<GuidesPage />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
                <Route path="joinus" element={<JoinUs />} />
            </Routes>
            <Footer />
        </>
    )
}
export default App
