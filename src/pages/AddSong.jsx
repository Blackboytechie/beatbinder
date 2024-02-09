import React from 'react'
import AddSong from './../components/AddSong';
import { useTheme } from '../ContextApi/ThemeProvider';

const AddSongs = () => {
  //theme
  const {currentTheme} = useTheme();
  console.log("theme:",currentTheme);
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex" style={{width:"600px",backgroundColor: currentTheme.backgroundColor,color: currentTheme.textColor}}>
        <AddSong/>
      </div>
    </div>
  )
}

export default AddSongs