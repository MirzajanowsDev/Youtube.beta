import { Box, CardMedia } from '@mui/material'
import React from 'react'

const ChannelCard = ({video}) => {
  return (
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
    }}
    >
        <CardMedia image={video.snippet.thumbnails.default.url}
            sx={{
                borderRadius:'50%',
                height:"180px",
                width:'180px',
                mb:2,
                border:'1px solid #e3e3e3'
            }}
        ></CardMedia>
        </Box>
  )
}

export default ChannelCard