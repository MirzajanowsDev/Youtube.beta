import { Box, Button, Container } from '@mui/material';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './componnets/main/main';
import Channel from './componnets/channel/channel';
import VideoDetail from './componnets/videodetail/video-detail';
import Search from './componnets/search/search';
import Navbar from './componnets/navbar/navbar';

function App() {
  return (
   <Box>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/channel/:id' element={<Channel/>}/>
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/search/:id' element={<Search/>}/>

    </Routes>
   </Box>
  );
}

export default App;
