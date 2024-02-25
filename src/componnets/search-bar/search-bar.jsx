import { IconButton, Paper } from '@mui/material'
import React from 'react'
import { color } from '../../constants/color'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper component={'form'} sx={{border:`1px solid ${color.secondary}`,pl:2, borderRadius:"none"}}>
        <input type="text" className='search-bar' placeholder='Search...' />
    <IconButton>
        <Search/>
    </IconButton>
    </Paper>

  )
}

export default SearchBar