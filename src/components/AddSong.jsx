// React Query
import { useMutation, useQueryClient } from '@tanstack/react-query'
// Misc libraries
import { v4 as uuidv4 } from 'uuid'
// Local files
import { createSong } from '../services/songsApi'
import SongForm from './SongForm'
import { useTheme } from '../ContextApi/ThemeProvider'

const AddSong = () => {
  //theme
  const {currentTheme} = useTheme();
  const queryClient = useQueryClient()

  const createSongMutation = useMutation({
    mutationFn: createSong,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['songs'] })
      console.log('Song created successfully')
    },
  })

  const handleAddSong = (song) => {
    createSongMutation.mutate({
      id: uuidv4(),
      ...song,
    })
  }

  return (
    <div className='w-100'>
      <h4 style={{color:currentTheme.textColor}}>Add New Song</h4>
      <SongForm onSubmit={handleAddSong} initialValue={{}} />
    </div>
  )
}

export default AddSong
