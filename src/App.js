
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Documentation from './pages/Documentation/Docs';
import HomePage from './pages/HomePage/HomePage';
import NFT from './pages/NFT/NFT';
import OurTeam from './pages/OurTeam/OurTeam';
import RoadMap from './pages/RoadMap/RoadMap';

function App() {
  return (
    <div className="App">
     <Header />

     <Routes>
      <Route path="/" element={<HomePage /> }/>
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/nft" element={<NFT/>} />
      <Route path="/road-map" element={<RoadMap />} />
      <Route path="/docs" element={<Documentation />} />
     </Routes>
    </div>
  );
}

export default App;
