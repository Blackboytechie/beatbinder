// React Router v6
import { Route, Routes } from 'react-router-dom'
// Local files
import EditSong from './pages/EditSong'
import Song from './pages/Song'
import SongList from './pages/SongList'
import Header from './components/Header'
// import AddSong from './components/AddSong'
import AddSongs from './pages/AddSong'
import { useTheme } from './ContextApi/ThemeProvider'

function App() {
  //theme
  const { currentTheme } = useTheme()
  return (
    <>
      <div style={{ backgroundColor: currentTheme.backgroundColor,height: "100vh",}}>
        {/* <h1>The Taylor Swift Apocalypse</h1> */}
        <Header />
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/song/:id" element={<Song />} />
          <Route path="/song/:id/edit" element={<EditSong />} />
          <Route path="/addsong" element={<AddSongs />} />
        </Routes>
      </div>
    </>
  )
}

export default App
