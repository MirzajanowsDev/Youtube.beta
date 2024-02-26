import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AuthService } from '../../service/api.service'
import { Box, CardMedia, Chip, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material'
import { logDOM } from '@testing-library/react'
import Videos from '../videos/videos'
import moment from 'moment'

const VideoDetail = () => {
  const [videoDetail,SetVideoDetail] = useState(null)
  const {id} = useParams()
  const [commet,setcomment] = useState([])
  const [relatedVideos,setRelatedVideos] = useState([])
  useEffect(() => {
    const getData =  async() => {
      const data = await AuthService.fetching(`videos?part=snippet,statistics&id=${id}`)
      SetVideoDetail(data.items[0])
      const {items} = await AuthService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      setRelatedVideos(items)
      const comments = await AuthService.fetching(`commentThreads?part=snippet&videoId=${id}`)
      setcomment(comments.items)
    }

    getData()
  }, [id])
  
  return videoDetail &&(
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} sx={{flexDirection: {xs:'column',md:'row'}}}>
    <Box width={{xs:'100%',md:'75%'}}>
      <ReactPlayer
      url={`htpps://www.youtube.com/watch?v=${id}`}
      className="react-player"
      controls
      ></ReactPlayer>
      {videoDetail?.snippet.tags.map((item,idx) => (
          <Chip
          label={item}
          key={idx}
          sx={{marginTop:'10px',cursor:'pointer',ml:'10px'}}
          deleteIcon={<Tag/>}
          variant='outlined'
          >
          </Chip>
      ))}
      <Typography
      variant='h5' fontWeight={'bold'} p={2}
      >
        {videoDetail.snippet.title}
      </Typography>
      <Typography
      sx={{opacity:'.7'}}
      fontWeight={'bold'} p={2}
      
      >
        {videoDetail.snippet.description}
      </Typography>
          <Stack direction={'row'} gap="20px" alignItems='center' py={1} px={2}>
          <Stack sx={{opacity:'.7'}} direction={'row'} gap="3px" alignItems='center' py={1} px={2}>
            <Visibility/>
            {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
          </Stack>
          <Stack sx={{opacity:'.7'}} direction={'row'} gap="3px" alignItems='center' py={1} px={2}>
            <FavoriteOutlined/>
            {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
          </Stack>
          <Stack sx={{opacity:'.7'}} direction={'row'} gap="3px" alignItems='center' py={1} px={2}>
            <MarkChatRead/>
            {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comments
          </Stack>
          <Stack  sx={{opacity:'.7'}} direction={'row'} gap="3px" alignItems='center' py={1} px={2}>
            published {moment(videoDetail?.snippet?.publishedAt).fromNow()}
          </Stack>
          </Stack>
          
      </Box>
      <Box width={{xs:'100%',md:'25%'}}>
      <Videos videos={relatedVideos && relatedVideos}/>
      </Box>
    </Box>
      </Box>
  )
}

export default VideoDetail