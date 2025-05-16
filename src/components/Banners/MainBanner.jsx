import { useState } from 'react'
import BannerVozmImg from '../../assets/video/bannerVideo.mp4'
import Modal from '../Modal/Modal'
import { useTranslation } from "react-i18next";

const MainBanner = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const openModalHandler = () => {
    setisModalOpen(true)
  }
  const closeModalHandler = () => {
    setisModalOpen(false) 
  } 
  const { t } = useTranslation();

  return ( 
    <div className="banner mainBanner">
        
        <video src={BannerVozmImg} autoPlay loop muted playsInline/>
        <div className="banner__text">
          <p>DREDMARK</p>
            <h1>{t("homeBannerText1")}</h1>
            <p>{t("homeBannerText2")}</p>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button className='button1' onClick={() => openModalHandler()}>{t("homeBannersLink")}</button>
        </div>
    </div>
  )
} 

export default MainBanner  