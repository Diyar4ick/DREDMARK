import mainEndCard5 from "../../assets/images/mainEndCard5Img.jpg";
import mainEndCard4 from "../../assets/images/mainEndCard1.jpg";
import mainEndCard2 from "../../assets/images/mainEndCard2Img.jpg";
import mainEndCard3 from "../../assets/images/mainEndCard3Img.jpg";
import mainEndCard1 from "../../assets/images/mainCard3.jpg";
import homeImgSw1 from "../../assets/images/homeImgSw1.jpg";
import tableImg1 from "../../assets/images/gM3Block2Img5.jpg";

import { useTranslation } from "react-i18next";

import { useState } from "react";
import Modal6 from "../Modal/Modal6";
import Modal5 from "../Modal/Modal5";
import Modal4 from "../Modal/Modal4";
import Modal3 from "../Modal/Modal3";
import Modal2 from "../Modal/Modal2";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
// import PriceCell from '../PriceCell/PriceCell'

const HomeMain = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const openModalHandler = () => {
    setisModalOpen(true);
  };
  const closeModalHandler = () => {
    setisModalOpen(false);
  };
  //
  const [isModal2Open, setisModal2Open] = useState(false);
  const openModal2Handler = () => {
    setisModal2Open(true);
  };
  const closeModal2Handler = () => {
    setisModal2Open(false);
  };
  //
  const [isModal3Open, setisModal3Open] = useState(false);
  const openModal3Handler = () => {
    setisModal3Open(true);
  };
  const closeModal3Handler = () => {
    setisModal3Open(false);
  };
  //
  const [isModal4Open, setisModal4Open] = useState(false);
  const openModal4Handler = () => {
    setisModal4Open(true);
  };
  const closeModal4Handler = () => {
    setisModal4Open(false);
  };
  //
  const [isModal5Open, setisModal5Open] = useState(false);
  const openModal5Handler = () => {
    setisModal5Open(true);
  };
  const closeModal5Handler = () => {
    setisModal5Open(false);
  };
  //
  const [isModal6Open, setisModal6Open] = useState(false);
  const openModal6Handler = () => {
    setisModal6Open(true);
  };
  const closeModal6Handler = () => {
    setisModal6Open(false);
  };
  //
  const { t } = useTranslation();

  return (
    <div className="homeMain">
      <div className="homeBannerText">
        <p>{t("homeText1")}</p>
      </div>

      <div className="container">
        <h2 className="homeMain__h2">Модельный ряд земснарядов</h2>
        <div className="homeMain__table">
        <table className="homeMain__table-styled">
          <thead>
            <tr>
              
              <th colSpan={2}>{t('vozmMainSection8P1')}</th>
              <th>Производительность</th>
              <th>Глубина</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={tableImg1} alt="" /></td>
              <td>DREDMARK 200/20 — компактный земснаряд</td>
              <td className="number">300–500 м³/ч</td>
              <td> 4–6 м</td>
              <td className="number">от $75 000</td>
            </tr>
            <tr>
              <td><img src={tableImg1} alt="" /></td>
              <td>DREDMARK 250/25 — универсальный земснаряд</td>
              <td className="number">700–900 м³/ч</td>
              <td>6-8 м</td>
              <td className="number">от $95 000</td>
            </tr>
            <tr>
              <td><img src={tableImg1} alt="" /></td>
              <td>DREDMARK 300/30 — промышленный</td>
              <td className="number">1200–1500 м³/ч</td>
              <td>8-10 м</td>
              <td className="number">от $135 000</td>
            </tr>
            <tr>
              <td><img src={tableImg1} alt="" /></td>
              <td>DREDMARK 350C — фрезерный земснаряд</td>
              <td className="number">1800–2200 м³/ч</td>
              <td>до 12 м</td>
              <td className="number">от $185 000</td>
            </tr>
            <tr>
              <td><img src={tableImg1} alt="" /></td>
              <td>DREDMARK 400/65 — для тяжелых условий</td>
              <td className="number">2600–3200 м³/ч</td>
              <td>-</td>
              <td className="number">от $245 000</td>
            </tr>
            <tr>
              <td><img src={tableImg1} alt="" /></td>
              <td>DREDMARK 450/70 — high productivity</td>
              <td className="number">3500–4200 м³/ч</td>
              <td>-</td>
              <td className="number">от $290 000</td>
            </tr>
          </tbody>
        </table>
       <button className="homeMain__table-btn">Получить цену на нужную модель</button>
        </div>
      </div>

      <div>
       
        <div className="home__block2">
          <img src={homeImgSw1} alt="" />
          <div className="home__block2-box">
            <h5 className="home__block2-subtitle">{t("homeText3")}</h5>
            <h4 className="home__block2-h4">Почему выбирают DREDMARK</h4>
            {isModal2Open && <Modal2 closeModal2={closeModal2Handler} />}
            <div className="home__block2-content">

          
              <ul className="home__block2-adv">
                <li>
                  <p className="home__block2-adv-text"><span>✓</span>Собственное производство в Узбекистане </p>
                  <p className="home__block2-adv-subtext">Контроль качества, прямые цены без посредников</p>
                </li>
               
                <li>
                  <p className="home__block2-adv-text"><span>✓</span>Двигатели Weichai / Sinotruk / Cummins</p>
                  <p  className="home__block2-adv-subtext">Легкий сервис и доступные запчасти.</p>
                </li>
                <li>
                  <p className="home__block2-adv-text"><span>✓</span>Сборка “под проект”</p>
                  <p  className="home__block2-adv-subtext">Можно изменить: фрезу, длину понтонов, насос, дизель, гидросистему.</p>
                </li>
                <li>
                  <p className="home__block2-adv-text"><span>✓</span> Доставка в Казахстан, Таджикистан, Афганистан, ОАЭ, Африку</p>
                  <p  className="home__block2-adv-subtext">Авто и контейнерные перевозки</p>
                </li>
                <li>
                  <p className="home__block2-adv-text"><span>✓</span> Монтаж, обучение, запуск</p>
                  <p  className="home__block2-adv-subtext">Инженер DREDMARK выезжает на объект.</p>
                </li>
             
              </ul>

            <button className="home__block2-btn" onClick={() => openModal2Handler()}>
              {t("homeText3Link")}
            </button>
              </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="homeMain__box3-h3" id="vozmBlocksBack">
          {t("homeText4")}
        </h3>
        <div className="homeMain__box3">
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard1}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card1")}</p>
            {isModal4Open && <Modal4 closeModal4={closeModal4Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal4Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd">{t("homeText4CardLink2")}</Link>
          </div>

          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard3}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card3")}</p>
            {isModal3Open && <Modal3 closeModal3={closeModal3Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal3Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd2">{t("homeText4CardLink2")}</Link>
          </div>
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard4}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card4")}</p>
            {isModalOpen && <Modal closeModal={closeModalHandler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModalHandler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd3">{t("homeText4CardLink2")}</Link>
          </div>
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard2}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card2")}</p>
            {isModal5Open && <Modal5 closeModal5={closeModal5Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal5Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd4">{t("homeText4CardLink2")}</Link>
          </div>
          <div className="homeMain__box3-card2">
            <img
              src={mainEndCard5}
              alt=""
              className="homeMain__box3-card2-img"
            />
            <p>{t("homeText4Card5")}</p>
            {isModal6Open && <Modal6 closeModal6={closeModal6Handler} />}
            <button
              className="homeMain__end-button"
              onClick={() => openModal6Handler()}
            >
              {t("homeText4CardLink")}
            </button>
            <Link to="/vozm#homeEnd5">{t("homeText4CardLink2")}</Link>
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
  );
};

export default HomeMain;
