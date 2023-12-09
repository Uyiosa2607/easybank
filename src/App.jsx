import "./app.scss"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Features from "./components/features/Features"
import Article from "./components/articles/Article"
import Footer from "./components/footer/Footer"

export default function App() {

  return (
    <div className="app">
        <Header/>
        <Hero/>
        <Features/>
        <Article/>
        <Footer/>
    </div>
  )
}