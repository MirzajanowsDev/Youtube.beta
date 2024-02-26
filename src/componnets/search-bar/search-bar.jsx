import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { color } from '../../constants/color'
import { Search } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [value , setValue] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (value) {
      navigate(`/search/${value}`)
    }
    
  }
  return (
    <Paper 
    component={'form'} 
    onSubmit={submitHandler}
    sx={{border:`1px solid ${color.secondary}`,
    pl:2, 
    borderRadius:"30px"
    
    }}>
        <input type="text" className='search-bar' value={value} onChange={e => setValue(e.target.value)} placeholder='Search...' />
    <IconButton>
        <Search/>
    </IconButton>
    </Paper>

  )
}

export default SearchBar