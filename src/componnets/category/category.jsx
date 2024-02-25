import { Stack } from '@mui/material'
import React from 'react'
import { category } from '../../constants/category'
import { color } from '../../constants/color'

const Category = ({selectedCategoryHandler,selectedCategory}) => {
  return (
    <Stack direction={'row'} sx={{overflowX:'scroll'}}>
        {category.map(item => (
            <button key={item.name}
             className='category-btn' 
            style={{borderRadius:'0',background:item.name === selectedCategory && color.secondary,
        color:item.name === selectedCategory && `#fff`}} 
            onClick={() => selectedCategoryHandler(item.name)}
            >
                <span style={{color:item.name === selectedCategory ? '#fff' : color.secondary,marginRight:'15px'}}>{item.icon}</span>
                <span>{item.name}</span>

            </button>
        ))}
    </Stack>
  )
}

export default Category