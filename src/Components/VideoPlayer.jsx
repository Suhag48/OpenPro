import {DefaultPlayer as Video} from 'react-html5video'
import video from '../assets/videos/video.mp4'
import 'react-html5video/dist/styles.css'
import thumb from '../assets/hero-img.jpg'

const VideoPlayer = () => {
  return (
    <Video poster={thumb} className="md:w-4/5 mx-auto w-[90%]">
        <source src={video} type='video/mp4' />
    </Video>
  )
}

export default VideoPlayer