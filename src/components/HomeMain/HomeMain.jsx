import mainEndCard5 from '../../assets/images/mainEndCard5Img.jpg'
import mainEndCard4 from '../../assets/images/mainEndCard1.jpg'
import mainEndCard2 from '../../assets/images/mainEndCard2Img.jpg'
import mainEndCard3 from '../../assets/images/mainEndCard3Img.jpg'
import mainEndCard1 from '../../assets/images/mainCard3.jpg'
import homeImgSw1 from '../../assets/images/homeImgSw1.jpg'
import mainTableImg1 from '../../assets/images/mainTableImg1.jpg'
import mainTableImg2 from '../../assets/images/mainTableImg2.jpg'
import mainTableImg3 from '../../assets/images/mainTableImg3.jpg'
import mainTableImg4 from '../../assets/images/mainTableImg4.jpg'

import { useTranslation } from "react-i18next";


import { useState } from 'react'
import Modal6 from '../Modal/Modal6'
import Modal5 from '../Modal/Modal5'
import Modal4 from '../Modal/Modal4'
import Modal3 from '../Modal/Modal3'
import Modal2 from '../Modal/Modal2'
import Modal from '../Modal/Modal'
import { Link } from 'react-router-dom'
// import PriceCell from '../PriceCell/PriceCell'

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
        <div className="homeMain__table">
          {/* <table className="homeMain__table-element">
            <thead>
              <tr>
                <th colSpan="4" className="homeMain__table-element-empty homeMain__table-element-h1">{t('homeCard2Text')}</th>
              </tr>
              <tr>
                <th colSpan="2" className="homeMain__table-element-empty"></th>
                <th className="homeMain__table-element-header">{t('homeCard1Text')}</th>
                <th className="homeMain__table-element-header">{t('homeCard3Text')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="homeMain__table-element-imgCell">
                  <img src={mainEndCard1} alt="Амфибия" className='homeMain__table-element-img' />
                </td>
                <td className="homeMain__table-element-titleCell">{t('homeCardsText1')}</td>
                <td><PriceCell usdPrice={650000} /></td>
                <td>{t('homeMainBlock1Text1')}</td>
              </tr>
              <tr>
                <td className="homeMain__table-element-imgCell">
                  <img src={mainEndCard4} alt="Земснаряд 2000" className='homeMain__table-element-img' />
                </td>
                <td className="homeMain__table-element-titleCell">{t('homeCardsText2')}</td>
                <td>{t('vozmMainSection8P39')}</td>
                <td>{t('homeMainBlock1Text2')}</td>
              </tr>
            </tbody> 
          </table> */}
          <table className="homeMain__table-element">
            <thead>
              <tr>
                <th colSpan="2" className="homeMain__table-element-empty homeMain__table-element-h1">{t('homeCard2Text')}</th> 
              </tr>
              <tr>
                <th className="homeMain__table-element-header"></th>
                <th className="homeMain__table-element-header">{t('homeCard3Text')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="homeMain__table-element-imgCell">
                  <img src={mainTableImg1} alt="" className='homeMain__table-element-img' />
                </td>
                <td className="homeMain__table-element-titleCell">{t('homeCardsText1')} 600 м3 900 м3</td>
              </tr>
              <tr>
                <td className="homeMain__table-element-imgCell">
                  <img src={mainTableImg2} alt="" className='homeMain__table-element-img' />
                </td>
                <td className="homeMain__table-element-titleCell">{t('usMainFreshP1')} 2000м3, 4000м3, 6000м3</td>
              </tr>
              <tr>
                <td className="homeMain__table-element-imgCell">
                  <img src={mainTableImg3} alt="" className='homeMain__table-element-img' />
                </td>
                <td className="homeMain__table-element-titleCell">{t('homeTableCard1')}</td>
              </tr>
              <tr>
                <td className="homeMain__table-element-imgCell">
                  <img src={mainTableImg4} alt="" className='homeMain__table-element-img' />
                </td>
                <td className="homeMain__table-element-titleCell">{t('homeTableCard2')}</td>
              </tr>
            </tbody> 
          </table>
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
        <h3 className="homeMain__box3-h3" id='vozmBlocksBack'>{t("homeText4")}</h3>
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
            <Link to="/vozm#homeEnd2">{t('homeText4CardLink2')}</Link>

          </div>
          <div className="homeMain__box3-card2">

            <img src={mainEndCard4} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card4")}</p>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button className='homeMain__end-button' onClick={() => openModalHandler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd3">{t('homeText4CardLink2')}</Link>

          </div>
          <div className="homeMain__box3-card2">
            <img src={mainEndCard2} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card2")}</p>
            {isModal5Open && <Modal5 closeModal5={closeModal5Handler} />}
            <button className='homeMain__end-button' onClick={() => openModal5Handler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd4">{t('homeText4CardLink2')}</Link>

          </div>
          <div className="homeMain__box3-card2">
            <img src={mainEndCard5} alt="" className='homeMain__box3-card2-img' />
            <p>{t("homeText4Card5")}</p>
            {isModal6Open && <Modal6 closeModal6={closeModal6Handler} />}
            <button className='homeMain__end-button' onClick={() => openModal6Handler()}>{t("homeText4CardLink")}</button>
            <Link to="/vozm#homeEnd5">{t('homeText4CardLink2')}</Link>

          </div>
        </div>
      </div>

      <div className="seo">
        <h1>• земснаряд купить</h1>
        <h2>• производство земснарядов</h2>
        <h2>• земснаряд цена</h2>
        <h3>• земснаряд для драгирования</h3>
        <h2>• передвижной земснаряд</h2>
        <h3>• земснаряд для добычи песка</h3>
        <h2>• земснаряд с гидравлическим приводом</h2>
        <h2>• мини земснаряд</h2>
        <h2>• плавающий земснаряд</h2>
        <h2>• земснаряд на шасси</h2>
      </div>
    </div>
  )
}

export default HomeMain 