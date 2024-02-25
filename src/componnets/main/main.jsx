import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { color } from '../../constants/color'
import Category from '../category/category'
import { category } from '../../constants/category'
import { AuthService } from '../../service/api.service'
import Videos from '../videos/videos'

const Main = () => {
  const [selectedCategory,setSelectedCategory] = useState('New')
  const [videos,setvideos] = useState([])
  const selectedCategoryHandler = (category) => setSelectedCategory(category)
  useEffect(() => {
    const get = async () => {
      const {items} =await AuthService.fetching(`search?part=snippet&q=${selectedCategory}`)
      setvideos(items)
      console.log(items);
    }
    get()
  }, [selectedCategory])
  
  return (
    <Stack>
      <Category selectedCategory={selectedCategory}  selectedCategoryHandler={selectedCategoryHandler}/>
      <Box p={2} sx={{height:'90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant='h4' fontWeight={'bold'} mb={2}>
        {selectedCategory} <span style={{color:color.secondary}}>videos</span>
        </Typography>
      <Videos videos={videos}/>
      </Container>
      </Box>
    </Stack>
  )
}

export default Main