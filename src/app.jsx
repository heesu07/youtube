
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import React, {useCallback, useState, useEffect} from 'react';
import Videolist from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) => {    
    setSelectedVideo(video);
    console.log(`selected`);
  };

  const search = useCallback(
    query =>{
      setSelectedVideo(null);
  
      youtube
      .search(query)
      .then(videos =>setVideos(videos));
    },[youtube]
  );

  useEffect(() => {
    youtube.mostPopular()
    .then(videos =>setVideos(videos));    
  }, [youtube]);

  

  return (
    <div>
      <SearchHeader onSearch={search} /> 

      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} /> 
          </div> )
        }
        
        <div className={styles.list}>
          <Videolist videos={videos} onVideoClick={selectVideo} display ={ selectedVideo ? 'list' : 'grid'}/>
        </div>
      </section>
    </div>
  );
}

export default App;
