import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({video,marginTop}) => {
        if (!video) {
            return <div>not found</div>
        }
  return video !== null &&(
      <Box
      sx={{
          boxShadow:'none',
          borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'320px'},
        height:'326px',
        margin:'auto',
        marginTop:marginTop,
    }}
    >
        <Link to={`/channel/${video?.snippet?.channelId}`}>
        <CardContent
        sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center'
        }}
        >
        <CardMedia image={video?.snippet?.thumbnails?.high.url}
            sx={{
                borderRadius:'50%',
                height:"180px",
                width:'180px',
                mb:2,
                border:'1px solid #e3e3e3'
            }}
            >
            </CardMedia>
                <Typography >
                    {video?.snippet?.title}{''}
                    <CheckCircle sx={{fontSize:'14px',color:'gray',ml:'5px'}}/>
                {video?.statistics?.subscriberCount && (
                    <Typography
                    sx={{color:'gray'}}
                    >
                    {parseInt(video.statistics.subscriberCount).toLocaleString('en-US')}{' '} Subscribers
                    </Typography>
                )}
                </Typography>
            </CardContent>
                        </Link>
        </Box>
  )
}

export default ChannelCard