import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from '../video-card.jsx/video-card'
import ChannelCard from '../channel-card/channel-card'

const Videos = ({videos}) => {
 if (!videos.length) return <div>"asd'</div> 
  return (
    <Stack width={'100%'}
    direction={'row'}
    flexWrap={'wrap'}
    justifyContent={'center'}
    alignItems={'center'}
    gap={2}
    >
        {videos.map(item => (
            <Box key={item.id.videoId}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard video={item}/>}
                </Box>
        ))}
         </Stack>
  )
}

export default Videos