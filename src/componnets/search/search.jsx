import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthService } from '../../service/api.service'
import { Box, Container, Stack, Typography } from '@mui/material'
import { color } from '../../constants/color'
import Videos from '../videos/videos'

const Search = () => {
  const [videos,setVideos] = useState([])
  const {id} = useParams()
  useEffect(() => {
    const getData = async () => {

      try {
        const {items} = await AuthService.fetching(`search?part=snippet&q=${id}`)
          setVideos(items)
      } catch (error) {
        
      }
    }
    getData()
  }, [id])
  
  return (
    <Stack>
    <Box p={2} sx={{height:'90vh'}}>
    <Container maxWidth={'90%'}>
      <Typography variant='h4' fontWeight={'bold'} mb={2}>
      Search result for <span style={{color:color.secondary}}>{id}</span> videos
      </Typography>
    <Videos videos={videos}/>
    </Container>
    </Box>
  </Stack>
  )
}

export default Search