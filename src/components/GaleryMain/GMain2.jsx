import { Link } from "react-router-dom"
import video4 from '../../assets/video/video4.mp4'
import video7 from '../../assets/video/video7.mp4'
import video8 from '../../assets/video/video8.mp4'
import video9 from '../../assets/video/video9.mp4'
import video10 from '../../assets/video/video10.mp4'
import video11 from '../../assets/video/modal2Video.mp4'
import video12 from '../../assets/video/bannerVideo.mp4'
import video13 from '../../assets/video/video13.mp4'
import video14 from '../../assets/video/video14.mp4'
import video15 from '../../assets/video/video15.mp4'
import { useTranslation } from "react-i18next";
const GMain2 = () => {
  const { t } = useTranslation();

  return (
    <>
     
      <div className="gMain2"> 
        <div className="container">
        <div className="nav2">
        <Link to="/" className='nav2__a'>Главная</Link>
        <p className='nav2__p'>» ВИДЕО</p>
      </div>
      <h1>{t('videoMain')}</h1>
          <div className="gMain2__section1">
            <video src={video4} controls></video> 
            <video src={video7} controls></video>
            <video src={video8} controls></video>
            <video src={video9} controls></video>
            <video src={video10} controls></video>
            <video src={video13} controls></video>
            <video src={video14} controls></video>
            <video src={video15} controls></video>
            <video src={video13} controls></video>
            <video src={video11} controls></video>
            <video src={video12} controls></video>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default GMain2 