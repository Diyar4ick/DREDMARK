import { Link } from 'react-router-dom'
import VozmSection2Img from '../../assets/images/vozmSection2Img1.jpg'
import VozmSection2Img1 from '../../assets/images/mainCard3.jpg'
import VozmSection2Img2 from '../../assets/images/mainEndCard2.jpg'
import VozmMainSection4Img2 from '../../assets/images/vozmSection2Img2.jpg'
import VozmSection2Img3 from '../../assets/images/mainCard1.jpg'
import VozmSection3Img from '../../assets/images/vozmSection3Img1.webp'
import VozmSection4Img1 from '../../assets/images/vozmSection4Img1.webp'
import VozmSection5Img1 from '../../assets/images/vozmSection5Img1.webp'
import VozmSection5Img2 from '../../assets/images/vozmSection5Img2.webp'
import VozmSection5Img3 from '../../assets/images/vozmSection5Img3.webp'
import VozmSection5Img4 from '../../assets/images/VozmSection5Img4.jpg'
import vozmSection6Img1 from '../../assets/images/vozmSection6Img1.webp'
import vozmSection6Img2 from '../../assets/images/vozmMainSection6Img.jpg'
import VozmSection7Img1 from '../../assets/images/vozmSection7Img1.webp'
import VozmSection7Img3 from '../../assets/images/vozmSection7Img2.webp'
import VozmSection7Img2 from '../../assets/images/vozmMainSection7Img.jpg'
// import VozmSection4Img2 from '../../assets/images/vozmSection3Img1.webp'
import section2Video from '../../assets/video/video13.mp4'
import section2Video2 from '../../assets/video/video9.mp4'
import { useTranslation } from 'react-i18next'
const VozmMain = () => {
  const { t } = useTranslation()
  return (
    <div className="vozmMain"> 
      <div className="nav2">
        <Link to="/" className='nav2__a'>{t('vozmMainNav2Text1')}</Link>
        <p className='nav2__p'>{t('vozmMainNav2Text2')}</p>
      </div>

      <div className="container">
        <div className="vozmMain__section1 ">
          <h2 className="vozmMain__section1-h2">{t("vozmMainSection1H2")}</h2>
          <p className="vozmMain__section1-p">
            {t("vozmMainSection1P")}</p>
        </div>
      </div> 
      <div className="vozmMain__section2 ">
        <h3 className="vozmMain__section2-h3">{t("vozmMainSection2H3")}</h3>
        <p className="vozmMain__section2-p">{t("vozmMainSection2P")}
        </p>
        <div className="container">

          <div className="vozmMain__section2-cards">
            <div className="vozmMain__section2-card">
              <img src={VozmSection2Img1} alt="" className="vozmMain__section2-card-img" />
              <h4 className="vozmMain__section2-card-h4">{t('vozmMainSection2Card1H3')}</h4>
              <p className="vozmMain__section2-card-p">{t('vozmMainSection2Card1P')}</p>
            </div>
            <div className="vozmMain__section2-card">
              <img src={VozmSection2Img} alt="" className="vozmMain__section2-card-img" />
              <h4 className="vozmMain__section2-card-h4">{t('vozmMainSection2Card2H3')}</h4>
              <p className="vozmMain__section2-card-p">{t('vozmMainSection2Card2P')}</p>
            </div>
            <div className="vozmMain__section2-card">
              <img src={VozmSection2Img3} alt="" className="vozmMain__section2-card-img" />
              <h4 className="vozmMain__section2-card-h4">{t('vozmMainSection2Card3H3')}</h4>
              <p className="vozmMain__section2-card-p">{t('vozmMainSection2Card3P')}</p>
            </div>
            <div className="vozmMain__section2-card">
              <img src={VozmSection2Img2} alt="" className="vozmMain__section2-card-img" />
              <h4 className="vozmMain__section2-card-h4">{t('vozmMainSection2Card4H3')}</h4>
              <p className="vozmMain__section2-card-p">{t('vozmMainSection2Card4P')}</p>
            </div>
          </div>
          <div className="vozmMain__section2-video1">
            <video src={section2Video} controls></video>
            <video src={section2Video2} controls></video>
          </div>

        </div>

      </div>
      <div className="container ">
        <div className="vozmMain__section3 ">
          <h2 className='vozmMain__section3-h2'>{t('vozmMainSection3H2')}</h2>
          <p className='vozmMain__section3-p'>{t('vozmMainSection3P')}</p>
          <img src={VozmSection3Img} alt="" className="vozmMain__section3-img" />
        </div>
      </div>
      <div className="vozmMain__section4 vozmSection">
        <div className="container">
          <div className="vozmMain__section4-block1">
            <h3 className="vozmMain__section4-block1-h3">
              {t('vozmMainSection4H3')}</h3>
            <p className="vozmMain__section4-block1-p1">
              {t('vozmMainSection4P1')}
            </p>
            <img src={VozmSection4Img1} alt="" className="vozmMain__section4-block1-img" />
            <p className='img__span'>{t('vozmMainSection4P2')}</p>
          </div>
          <div className="vozmMain__section4-block2">
            <img src={VozmMainSection4Img2} alt="" className="vozmMain__section4-block2-img" />
            <p className="img__span">{t('vozmMainSection4P3')}</p>
          </div>
        </div>

      </div>
      <div className="vozmMain__section5 vozmSection">
        <div className="container">
          <div className="vozmMain__section5-block1">
            <h3 className="vozmMain__section5-block1-h3">
              {t('vozmMainSection5H3')}</h3>
            <p className="vozmMain__section5-block1-p1">
              {t('vozmMainSection5P1')}
            </p>
            <div className="img__box">
              <div className="img__span-block">
                <img src={VozmSection5Img1} alt="" className="vozmMain__section5-block1-img" />
                <p className='img__span'>{t('vozmMainSection5P2')}</p>
              </div>
              <div className="img__span-block">
                <img src={VozmSection5Img2} alt="" className="vozmMain__section5-block1-img" />
                <p className='img__span'>{t('vozmMainSection5P3')}</p>
              </div>
              <div className="img__span-block">
                <img src={VozmSection5Img3} alt="" className="vozmMain__section5-block1-img" />
                <p className='img__span'>{t('vozmMainSection5P4')}</p>
              </div>

            </div>

          </div>
          <div className="vozmMain__section5-block2">
            <img src={VozmSection5Img4} alt="" className="vozmMain__section5-block2-img" />
            <p className="img__span"> {t('vozmMainSection5P5')}</p>

          </div>
        </div>

      </div>
      <div className="vozmMain__section6 vozmSection">
        <div className="container">
          <div className="vozmMain__section6-block1">
            <h3 className="vozmMain__section6-block1-h3">
              {t('vozmMainSection6H3')}</h3>
            <p className="vozmMain__section6-block1-p1">
              {t('vozmMainSection6P1')}
            </p>
            <img src={vozmSection6Img1} alt="" className="vozmMain__section6-block1-img" />
            <p className='img__span'>{t('vozmMainSection6P2')}</p>
          </div>
          <div className="vozmMain__section6-block2">
            <img src={vozmSection6Img2} alt="" className="vozmMain__section6-block2-img" />
            <p className="img__span">{t('vozmMainSection6P3')}</p>

          </div>
        </div>

      </div>
      <div className="vozmMain__section7 vozmSection">
        <div className="container">
          <div className="vozmMain__section7-block1">
            <h3 className="vozmMain__section7-block1-h3">
              {t('vozmMainSection7H3')}</h3>
            <p className="vozmMain__section7-block1-p1">
              {t('vozmMainSection7P1')}
            </p>
            <div className="img__box">
              <div className="img__span-block">
                <img src={VozmSection7Img1} alt="" className="vozmMain__section7-block1-img" />
                <p className='img__span'>{t('vozmMainSection7P2')}</p>
              </div>
              <div className="img__span-block">
                <img src={VozmSection7Img3} alt="" className="vozmMain__section7-block1-img" />
                <p className='img__span'>{t('vozmMainSection7P3')}</p>
              </div>

            </div>

          </div>
          <div className="vozmMain__section7-block2">
            <img src={VozmSection7Img2} alt="" className="vozmMain__section7-block2-img" />
            <p className="img__span">{t('vozmMainSection7P4')}</p>

          </div>
        </div>

      </div>
      <div className="vozmMain__section8">
        <h2 id='homeEnd'>{t('homeText4Card1')}</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>{t('vozmMainSection8P1')}</th>
              <th>{t('vozmMainSection8P2')}</th>
              <th>{t('vozmMainSection8P3')}</th>
              <th>{t('vozmMainSection8P4')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('vozmMainSection8P5')}</td>
              <td className="number">{t('vozmMainSection8P6')}</td>
              <td>{t('vozmMainSection8P7')}</td>
              <td className="number">{t('vozmMainSection8P8')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P9')}</td>
              <td className="number">{t('vozmMainSection8P10')}</td>
              <td>{t('vozmMainSection8P11')}</td>
              <td className="number">{t('vozmMainSection8P12')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P13')}</td>
              <td className="number">{t('vozmMainSection8P14')}</td>
              <td>{t('vozmMainSection8P15')}</td>
              <td className="number">{t('vozmMainSection8P16')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P17')}</td>
              <td className="number">{t('vozmMainSection8P18')}</td>
              <td>{t('vozmMainSection8P19')}</td>
              <td className="number">{t('vozmMainSection8P20')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P21')}</td>
              <td className="number">{t('vozmMainSection8P22')}</td>
              <td>{t('vozmMainSection8P23')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="vozmMain__section8">
        <h2 id='homeEnd2'>{t('homeText4Card3')}</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>{t('vozmMainSection8P1')}</th>
              <th>{t('vozmMainSection8P25')}</th>
              <th>{t('vozmMainSection8P3')}</th>
              <th>{t('vozmMainSection8P4')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('vozmMainSection8P26')}</td>
              <td className="number">{t('vozmMainSection8P27')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P29')}</td>
              <td className="number">{t('vozmMainSection8P30')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P31')}</td>
              <td className="number">{t('vozmMainSection8P32')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P33')}</td>
              <td className="number">{t('vozmMainSection8P34')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P35')}</td>
              <td className="number">{t('vozmMainSection8P36')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="vozmMain__section8">
        <h2 id='homeEnd3'>{t('homeText4Card4')}</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>{t('vozmMainSection8P1')}</th>
              <th>{t('vozmMainSection8P25')}</th>
              <th>{t('vozmMainSection8P3')}</th>
              <th>{t('vozmMainSection8P4')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('vozmMainSection8P33')}</td>
              <td className="number">{t('vozmMainSection8P34')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P35')}</td>
              <td className="number">{t('vozmMainSection8P36')}</td>
              <td>{t('vozmMainSection8P28')}</td>
              <td className="number">{t('vozmMainSection8P24')}</td>
            </tr>
            <tr>
              <td>{t('vozmMainSection8P37')}</td>
              <td className="number">{t('vozmMainSection8P38')}</td>
              <td>{t('vozmMainSection8P38')}</td>
              <td className="number">{t('vozmMainSection8P38')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default VozmMain  