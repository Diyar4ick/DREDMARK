import { useState } from 'react';
import BannerVozmImg from '../../assets/video/bannerVideo.mp4'
import Modal from '../Modal/Modal'
import { useTranslation } from "react-i18next";
// import { Link } from 'react-router-dom';

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
            <h1>Производство земснарядов и насосных станций DREDMARK</h1>
            <p>Оснащаем проекты по дноуглублению, добыче песка, золота и расчистке водоёмов. Земснаряды 200–450 мм “под ключ”.</p>
            <button onClick={() => setisModalOpen(openModalHandler)} >{t('homeBannersLink')}</button>
            {isModalOpen && <Modal closeModal={closeModalHandler}/>}
        </div>
    </div>
  )
} 
 
export default MainBanner   