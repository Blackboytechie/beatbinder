// React Router v6
import { Link, useNavigate } from 'react-router-dom'
// React Query
// import {
//   useQuery,
//   useQueryClient /*, useMutation*/,
// } from '@tanstack/react-query'
// Local files
/** Comment IN the commented out codes if you don't want to use custom hooks */
// import { deleteSong, fetchSongs } from '../services/songsApi'
import AddSong from '../components/AddSong'
import { useDeleteSong } from '../custom-hooks/mutations'
import { useSongs } from '../custom-hooks/queries'
import { Table, Button, Container, Row, Col } from 'react-bootstrap'
import SkeletonForm from '../components/Skeleton/SkeletonForm'
import SkeletonTable from '../components/Skeleton/SkeletonTable'
import SkeletonAddBtn from '../components/Skeleton/SkeletonAddBtn'
import { useTheme } from '../ContextApi/ThemeProvider'

const SongList = () => {
  //theme
  const {theme,currentTheme} = useTheme();
  const navigate = useNavigate()
  // const queryClient = useQueryClient()

  /* Without custom useSongs hook **/
  // const {
  //   isPending,
  //   isError,
  //   data: songs,
  //   error,
  // } = useQuery({
  //   queryKey: ['songs'],
  //   queryFn: fetchSongs,
  // })

  const { isPending, isError, data: songs, error } = useSongs()

  /* Without custom useDelete hook */
  // const deleteSongMutation = useMutation({
  //   mutationFn: deleteSong,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['songs'] })
  //   },
  // })

  const deleteSongMutation = useDeleteSong()

  if (isPending)
    return (
      <Container fluid style={{backgroundColor: currentTheme.backgroundColor,}}>
        <Row>
          <Col lg={4} className="d-lg-block d-none">
            <SkeletonForm/>
          </Col>
          <Col lg={4} className="d-lg-none d-block">
            {/* <div className="d-flex gap-3">
              <p>Add Song :</p>
              <button
                className="btn btn-success"
                style={{
                  width: '100px',
                  height: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                Add +
              </button>
            </div> */}
            <SkeletonAddBtn/>
          </Col>
          <Col md={12} sm={4} lg={8}>
            <Container className="scrollable-scrollbar">
              <SkeletonTable/>
            </Container>
          </Col>
        </Row>
      </Container>
    )
  if (isError) return `Error: ${error.message}`

  const handleDelete = (id) => deleteSongMutation.mutate(id)

  return (
    <section>
      {/* <AddSong /> */}
      {/* {songs?.map((hitsong) => (
        <div
          key={hitsong.id}
          style={{
            backgroundColor: '#FFCCCB',
            padding: '1rem',
            marginBottom: '1rem',
          }}
        > */}
      {/* Clickable h4 header to view the song and which of her album it came from. */}
      {/* <h4
            className="song-heading"
            onClick={() => navigate(`/song/${hitsong.id}`)}
          >
            Song: {hitsong.song}
          </h4> */}
      {/* Edit song button */}
      {/* <button
            onClick={() => navigate(`/song/${hitsong.id}/edit`)}
            className="btn-general"
          >
            Edit
          </button> */}
      {/* Delete song button */}
      {/* <button
            onClick={() => handleDelete(hitsong.id)}
            className="btn-danger"
          >
            Delete
          </button>
        </div>
        
      ))} */}
      <Container fluid style={{backgroundColor: currentTheme.backgroundColor,}}>
        <Row>
          <Col lg={4} className="d-lg-block d-none">
            <AddSong />
          </Col>
          <Col lg={4} className="d-lg-none d-block">
            <div className="d-flex gap-3">
              <p style={{color:currentTheme.textColor}}>Add Song :</p>
              <Link to={'/addsong'} className='text-decoration-none'>
              <button
                className="btn btn-success"
                style={{
                  width: '100px',
                  height: '30px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
                onClick={() => navigate('/addsong')}
              >
                Add +
              </button>
              </Link>
            </div>
            {/* <SkeletonAddBtn/> */}
          </Col>
          <Col md={12} sm={4} lg={8}>
            <Container className="scrollable-scrollbar">
              <Table striped bordered hover variant={theme}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>song name</th>
                    <th>album Name</th>
                    <th>actions</th>
                  </tr>
                </thead>
                <tbody>
                  {songs?.map((hitsong,index) => (
                    <tr key={hitsong.id}>
                      <td onClick={() => navigate(`/song/${hitsong.id}`)} style={{cursor:"pointer"}}>
                        {index+1}
                      </td>
                      <td onClick={() => navigate(`/song/${hitsong.id}`)}style={{cursor:"pointer"}}>
                        {hitsong.song}
                      </td>
                      <td>{hitsong.album}</td>
                      <td>
                        <div className="d-flex justify-between gap-2">
                          <Button
                            onClick={() => navigate(`/song/${hitsong.id}/edit`)}
                          >
                            Edit
                          </Button>
                          <Button onClick={() => handleDelete(hitsong.id)}>
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SongList
