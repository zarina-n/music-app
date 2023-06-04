import { Routes, Route } from 'react-router-dom'
import HomeContainer from './HomeContainer.styles'
import Bar from '../components/bar_components/Bar'
import Navigation from '../components/nav_components/Navigation'
import Centerblock from '../components/centerblock_components/Centerblock'
import Sidebar from '../components/sidebar_components/Sidebar'


function Home() {
   return (
    <HomeContainer>
      <Navigation />
      <Centerblock />

      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>

      <Bar />
    </HomeContainer>
  )
}

export default Home
