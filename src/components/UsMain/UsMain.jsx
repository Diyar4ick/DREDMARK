import { Link } from "react-router-dom"
import section1Img1 from '../../assets/images/usMainSection1Img1.jpg'
import section1Img2 from '../../assets/images/usMainSection1Img2.jpg'
import section1Img3 from '../../assets/images/usMainSection1Img3.jpg'
import section2Img1 from '../../assets/images/usMainSection2Img1.jpg'
import section3Img from '../../assets/images/usMainSection3Img.jpg'
import section4Img from '../../assets/images/usMainSection4Img.jpg'
import video16 from '../../assets/video/video16.mp4'
import video17 from '../../assets/video/video17.mp4'
import video18 from '../../assets/video/video18.mp4'
import video19 from '../../assets/video/video19.mp4'
import { useTranslation } from "react-i18next"
const UsMain = () => {
  const { t } = useTranslation()
  return (
    <div className="usMain">
      <div className="nav2">
        <Link to="/" className='nav2__a'>{t('vozmMainNav2Text1')}</Link>
        <p className='nav2__p'>{t('usMainNav2Text2')}</p>
      </div>
      <div className="container">
        <h1 className="usMain__h1">{t('usMainH1')}</h1>
        <div className="usMain__text">
          <p className="usMain__p1">
            {t('usMainSection1P1')}
          </p>
          <p className="usMain__p2">
            {t('usMainSection1P2')}
          </p>
        </div>

        <div className="usMain__block">
          <div className="usMain__block-section1">
            <h2 className="usMain__h2">{t('usMainSection2H2')}</h2>
            <div className="usMain__block-section1-images">
              <img src={section1Img2} alt="" className="usMain__block-section1-images-2" />
              <img src={section1Img3} alt="" className="usMain__block-section1-images-3" />
              <img src={section1Img1} alt="" className="usMain__block-section1-images-1" />
            </div>
            <p>{t('usMainSection2P')}</p>
          </div>
          <div className="usMain__block-section2">
            <h2 className="usMain__h2">{t('usMainSection3H2')}</h2>
            <div className="div">
              <video src={video16} controls></video>
              <div className="usInf">
                <img src={section2Img1} alt="" />
                <p>{t('usMainSection3P')}</p>
              </div>

            </div>

          </div>
          <div className="usMain__block-section6">
            <h2 className="usMain__h2">{t('usMainSection4H2')}</h2>
            <div className="usMain__block-section6-images">
              <video src={video17} controls></video>
              <video src={video18} controls></video>
              <img src={section3Img} alt="" />
            </div>
            <p>{t('usMainSection4P')}</p>
          </div>
          <div className="usMain__block-section4">
            <img src={section4Img} alt="" />
            <p><h2 className="usMain__h2">{t('usMainSection5H2')}</h2>{t('usMainSection5P')}</p>
          </div>
          <div className="usMain__block-section5">
            <video src={video19} controls></video>
            <div className="usMain__end">
              <p>{t('usMainSection6')}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UsMain