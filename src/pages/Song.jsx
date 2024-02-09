// React Router v6
import { Link, useNavigate, useParams } from 'react-router-dom'
// React Query
import { useQuery } from '@tanstack/react-query'
// Local files
import { fetchSong } from '../services/songsApi'
import { useTheme } from '../ContextApi/ThemeProvider'
import { Card, Button, Container } from 'react-bootstrap'
import { useEffect, useState, Suspense, Lazy } from 'react'
import axios from 'axios'
import SkeletonImage from '../components/Skeleton/SkeletonImage'
import { Placeholder } from 'react-bootstrap'

const Song = () => {
  // theme
  const { theme, currentTheme } = useTheme()

  const [img, setImg] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  const {
    isPending,
    isError,
    data: hitSong,
    error,
  } = useQuery({
    queryKey: ['songs', id],
    queryFn: () => fetchSong(id),
  })
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        'https://api.unsplash.com/photos/random/?client_id=sGw6y5KaFbKyc7z0Mivlvo3nEGXz1_cssnuWeLUsr1k'
      )
      setImg(res.data)
      console.log('res:', res.data)
    }
    fetchData()
  }, [])

  if (isPending) return <span>Loading Taylor's song...</span>
  if (isError) return <span>`Error: ${error.message}`</span>
  console.log('imgurl', img)
  return (
    <>
      {/* <button onClick={() => navigate('/')} className="btn-general">
        Back Song List
      </button>
      <figure style={{ backgroundColor: '#FFCCCB', padding: '1rem' }}>
        <h2>Song: {hitSong?.song}</h2>
        <p>
          <strong>Album:</strong> {hitSong?.album}
        </p>
      </figure> */}
      <Container className="d-flex justify-content-center">
        <Card className="glasscss" style={{ width: '300px' }}>
          {/*  */}
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Suspense fallback={<SkeletonImage />}>
            <Card.Img variant="top" style={{width: "300px",height: "300px",borderTopLeftRadius:20,borderTopRightRadius:20 ,}} src={img?.urls?.full} />
          </Suspense>
          <Card.Body style={{ color: currentTheme.textColor }}>
            <Card.Title>Song : {hitSong?.song}</Card.Title>
            <Card.Text>Album: {hitSong?.album}</Card.Text>
            <Link to={'/'}>
              <Button variant="primary">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Song
