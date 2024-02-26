import React, { useEffect, useState } from 'react'
import { AuthService } from '../../service/api.service'
import { useParams } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import ChannelCard from '../channel-card/channel-card'
import Videos from '../videos/videos'

const Channel = () => {
  const {id} = useParams()
  const [channelDetail,SetchannelDetail] = useState([])
  const [videos,setvideos] = useState([])

  useEffect(() => {
    const getDataChannel = async() =>{
      try {
        const channelDetail = await AuthService.fetching(`channels?part=snippet&id=${id}`)
        SetchannelDetail(channelDetail.items[0])
        console.log(channelDetail);
        const getData = await AuthService.fetching(`search?part=snippet%2Cid&channelId=${id}&order=date`)
        console.log(getData);
        setvideos(getData.items)
        
      } catch (error) {
          console.log(error);
      }
      }
      getDataChannel()
  }, [])
  
  return (
    <Box minHeight={'90vh'} mt={'10vh'}>
        <Box>
          <Box width={'100%'} height={'300px'} zIndex={10} sx={{backgroundImage:`url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`}}>

          </Box>
          <ChannelCard  video={channelDetail && channelDetail} marginTop={'-100px'}/>
        </Box>
      <Container
      maxWidth={'90%'}
      >
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Channel