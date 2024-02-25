import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { color } from '../../constants/color'
import moment from 'moment'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({video}) => {
  return (
    <Card sx={{width:{xs:'100%',sm:'360px',md:'320px'},boxShadow:'none',borderRadius:'none'}}>

        <CardMedia image={video.snippet.thumbnails.high.url} sx={{width:'100%',height:'180px'}}/>
        <CardContent sx={{background:color.primary,height:'200px',position:'relative'}}>
            <>
            <Typography my={'6px'} sx={{opacity:'.4'}}>
                    {moment(video.snippet.publishedAt).fromNow()}
            </Typography>
            <Typography>
                {video.snippet.title}
            </Typography>
            <Typography variant='subtitle2' sx={{opacity:'.6'}}>
                {video.snippet.description.slice(0, 50)}
            </Typography>
            </>
            <Stack
            direction={'row'}
            position={'absolute'}
            bottom={'0px'}
            alignItems={'center'}
            gap={'5px'}

            >
             <Avatar src={video.snippet.thumbnails.high.url}/>   
             <Typography>
                {video.snippet.channelTitle}
                <CheckCircle sx={{fontSize:"12px",color:'gray',ml:'5px'}}></CheckCircle>
             </Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default VideoCard