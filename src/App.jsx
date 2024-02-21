import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import NewsContent from './Component/NewsContent'
import axios from 'axios'
import apiKey from './data/config'
import Footer from './Component/Footer'

function App() {
  const [catagory, setCatagory] = useState('general')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()

  const newsApi = async () =>{
    try {
      const news = await axios.get( `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${catagory}`)
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    newsApi()
  },[newsResults, catagory])
console.log(newsArray);
  return (
   <>
   <Navbar setCatagory={setCatagory}/>
   <NewsContent/>
   <Footer/>
   </>
  )
}

export default App
