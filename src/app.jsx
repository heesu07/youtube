
import './app.css';
import Search from './components/search';
import React, {useState, useEffect} from 'react';
import Videolist from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB16fFVdMz8hPq-Bz1FTC-dMz1RCIny5sI", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error)
      );
  }, []);

  

  return (
    <>
      <Search /> 
      <Videolist videos={videos} />
    </>
  );
}

export default App;
