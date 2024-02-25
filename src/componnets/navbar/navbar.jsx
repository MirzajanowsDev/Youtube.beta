import { Box, Stack } from '@mui/material'
import React from 'react'
import { color } from '../../constants/color'
import SearchBar from '../search-bar/search-bar'

const Navbar = () => {
  return (
    <Stack
    direction={'row'}
    alignItems={'center'}
    justifyContent={'space-between'}
    p={2}
    sx={{position:'sticky', top:0,zIndex:999, background: color.primary}}
    >
        <div></div>
    
    <SearchBar/>
    <Box/>
    </Stack>
  )
}

export default Navbar