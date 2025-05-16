// import cardImg1 from '../../assets/images/mainCard1.jpg'
// import cardImg2 from '../../assets/images/mainCard2.jpg'
// import cardImg3 from '../../assets/images/mainCard3.jpg'
import mainEndCard5 from '../../assets/images/mainEndCard5Img.jpg'
import mainEndCard4 from '../../assets/images/mainEndCard1.jpg'
import mainEndCard2 from '../../assets/images/mainEndCard2Img.jpg'
import mainEndCard3 from '../../assets/images/mainEndCard3Img.jpg'
import mainEndCard1 from '../../assets/images/vozmBanner.jpg'
import homeImgSw1 from '../../assets/images/homeImgSw1.jpg'

import { useTranslation } from "react-i18next";


import { useState } from 'react'
import Modal6 from '../Modal/Modal6'
import Modal5 from '../Modal/Modal5'
import Modal4 from '../Modal/Modal4'
import Modal3 from '../Modal/Modal3'
import Modal2 from '../Modal/Modal2'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'

const HomeMain = () => {
  const [isModalOpen, setisModalOpen] = useState(false)
  const openModalHandler = () => {
    setisModalOpen(true)
  }
  const closeModalHandler = () => {
    setisModalOpen(false)
  }
  //
  const [isModal2Open, setisModal2Open] = useState(false)
  const openModal2Handler = () => {
    setisModal2Open(true)
  }
  const closeModal2Handler = () => {
    setisModal2Open(false)
  }
  //
  const [isModal3Open, setisModal3Open] = useState(false)
  const openModal3Handler = () => {
    setisModal3Open(true)
  }
  const closeModal3Handler = () => {
    setisModal3Open(false)
  }
  //
  const [isModal4Open, setisModal4Open] = useState(false)
  const openModal4Handler = () => {
    setisModal4Open(true)
  }
  const closeModal4Handler = () => {
    setisModal4Open(false)
  }
  //
  const [isModal5Open, setisModal5Open] = useState(false)
  const openModal5Handler = () => {
    setisModal5Open(true)
  }
  const closeModal5Handler = () => {
    setisModal5Open(false)
  }
  //
  const [isModal6Open, setisModal6Open] = useState(false)
  const openModal6Handler = () => {
    setisModal6Open(true)
  }
  const closeModal6Handler = () => {
    setisModal6Open(false)
  }
  //
  const { t } = useTranslation();

  return (
    <div className="homeMain">
      <div className="homeBannerText">
        {/* <img src={BannerTextImg} alt="" /> */}
        <p>{t("homeText1")}</p>
      </div>

      <div className="container">
        <h2 className="homeMain__h2">{t("homeText2")}</h2>
        {/* <p className="homeMain__p1"></p> */}
        <div className="homeMain__box1">

          <div className="homeMain__block1-text1">
            <h3 className="homeMain__block1-text1-h3">{t('homeCard1Text')}</h3>
            <h3 className="homeMain__block1-text1-h3">{t('homeCard2Text')}</h3>

          </div>
          <div className="homeMain__block2-box">
            <img src={mainEndCard1} alt="" className='homeMain__card1-img' />
            <p className="homeMain__block2-box-amfibia">{t('homePrice')}</p>
            <p className="homeMain__block2-box-amfibia">{t("homeMainBlock1Text1")}</p>
          </div>
          <div className="homeMain__block2-box">
            <img src={mainEndCard4} alt="" className='homeMain__card1-img' />
            <p className="homeMain__block2-box-zemsn">{t('homePrice2')}</p>
            <p className="homeMain__block2-box-zemsn">{t("homeMainBlock1Text2")}</p>
          </div>
        </div>
      </div>


      <div> <div className="home__block2">
        <img src={homeImgSw1} alt="" />
        <div className="home__block2-box">
          <h4 className='home__block2-h4'>{t("homeText3")}</h4>
          {isModal2Open && <Modal2 closeModal2={closeModal2Handler} />}
          <button className='home__block2-box-a' onClick={() => openModal2Handler()}>{t("homeText3Link")}</button>
        </div>
      </div></div>


      <div className="container">
        <h3 className="homeMain__box3-h3">{t("homeText4")}</h3>
        <div className="homeMain__box3">
          <div className="homeMain__box3-card2">
            <img src={mainEndCard1} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card1")}</p>
            {isModal4Open && <Modal4 closeModal4={closeModal4Handler} />}
            <button className='homeMain__end-button' onClick={() => openModal4Handler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd">{t('homeText4CardLink2')}</Link>
          </div>

          <div className="homeMain__box3-card2">
            <img src={mainEndCard3} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card3")}</p>
            {isModal3Open && <Modal3 closeModal3={closeModal3Handler} />}
            <button className='homeMain__end-button' onClick={() => openModal3Handler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd">{t('homeText4CardLink2')}</Link>

          </div>
          <div className="homeMain__box3-card2">

            <img src={mainEndCard4} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card4")}</p>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button className='homeMain__end-button' onClick={() => openModalHandler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd">{t('homeText4CardLink2')}</Link>

          </div>
          <div className="homeMain__box3-card2">
            <img src={mainEndCard2} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card2")}</p>
            {isModal5Open && <Modal5 closeModal5={closeModal5Handler} />}
            <button className='homeMain__end-button' onClick={() => openModal5Handler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd">{t('homeText4CardLink2')}</Link>

          </div>
          <div className="homeMain__box3-card2">
            <img src={mainEndCard5} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card5")}</p>
            {isModal6Open && <Modal6 closeModal6={closeModal6Handler} />}
            <button className='homeMain__end-button' onClick={() => openModal6Handler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd">{t('homeText4CardLink2')}</Link>

          </div>
        </div>
      </div>

      {/* <div className="homeMain__contact">
        <h2 className='homeMain__contact-h2'>Контакты</h2>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <img src={resumeImg} alt="" className="resumeImg" />
        </a>
      </div> */}
    </div>
  )
}

export default HomeMain 