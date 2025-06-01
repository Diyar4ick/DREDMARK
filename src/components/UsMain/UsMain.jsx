import { Link } from "react-router-dom"
import section1Img1 from '../../assets/images/usMainSection1Img1.jpg'
import section1Img2 from '../../assets/images/usMainSection1Img2.jpg'
import section1Img3 from '../../assets/images/usMainSection1Img3.jpg'
import section1Img4 from '../../assets/images/usMainSection1Img4.jpg'
import section2Img1 from '../../assets/images/usMainSection2Img1.jpg'
import section3Img from '../../assets/images/usMainSection3Img.jpg'
import video16 from '../../assets/video/video16.mp4'
import video17 from '../../assets/video/video17.mp4'
import video18 from '../../assets/video/video18.mp4'
import video19 from '../../assets/video/video19.mp4'
import mapRussia from '../../assets/images/mapRussia.jpg'
import mapUz from '../../assets/images/mapUz.jpg'
import mapKz from '../../assets/images/mapKz.jpg'
import mapTj from '../../assets/images/mapTj.jpg'
import mapKrg from '../../assets/images/mapKrg.jpg'
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
              <img src={section1Img2} alt="" className="usMain__block-section1-images-img" />
              <img src={section1Img3} alt="" className="usMain__block-section1-images-img" />
              <div className="usMain__block-section1-images-box1">
                <img src={section1Img1} alt="" className="usMain__block-section1-images-1" />
                <img src={section1Img4} alt="" className="usMain__block-section1-images-1" />
              </div>
              <video src={video19} controls></video>
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
          <div className="usMain__block-section7">
            <h2 className="usMain__h2">{t('usMainSection7H2')}</h2>
            <div className="usMain__block-section7-russia">
              <img src={mapRussia} alt="" />
              <table className="russia-table">
                <thead>
                  <tr>
                    <th>{t('usMainSection7Title1')}</th>
                    <th>{t('usMainSection7Title2')}</th>
                    <th>{t('usMainSection7Title3')}</th>
                    <th>{t('usMainSection7Title4')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('usMainSection7Russia')}</td>
                    <td className="">{t('usMainSection7RussiaCity1')}</td>
                    <td>2000/63 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity2')}</td>
                    <td>{t('usMainSection7P2')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity3')}</td>
                    <td>1800/31 {t('usMainSection7P3')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity4')}</td>
                    <td>3000/71 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity5')}</td>
                    <td>1800/31 {t('usMainSection7P3')}</td>
                    <td className="">2</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity6')}</td>
                    <td>1800/31 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity7')}</td>
                    <td>1800/31 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7RussiaCity8')}</td>
                    <td>1600/25 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div className="usMain__block-section7-russia">
              <table className="russia-table">
                <thead>
                 <tr>
                    <th>{t('usMainSection7Title1')}</th>
                    <th>{t('usMainSection7Title2')}</th>
                    <th>{t('usMainSection7Title3')}</th>
                    <th>{t('usMainSection7Title4')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('usMainSection7Uz')}</td>
                    <td className="">{t('usMainSection7UzCity1')}</td>
                    <td>1800/31 {t('usMainSection7P1')}</td>
                    <td className="">28</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7UzCity2')}</td>
                    <td>2000/63 {t('usMainSection7P4')}</td>
                    <td className="">2</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7UzCity3')}</td>
                    <td>{t('usMainSection7P5')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7UzCity4')}</td>
                    <td>400/20 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7UzCity5')}</td>
                    <td>400/20 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7UzCity6')}</td>
                    <td>400/20 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                 
                </tbody>
              </table>
              <img src={mapUz} alt=""/>
            </div>
            <div className="usMain__block-section7-russia">
              <img src={mapKz} alt="" />
              <table className="russia-table">
                <thead>
                <tr>
                    <th>{t('usMainSection7Title1')}</th>
                    <th>{t('usMainSection7Title2')}</th>
                    <th>{t('usMainSection7Title3')}</th>
                    <th>{t('usMainSection7Title4')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('usMainSection7Kz')}</td>
                    <td className="">{t('usMainSection7KzCity1')}</td>
                    <td>1600/25 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7KzCity2')}</td>
                    <td>{t('usMainSection7P6')} 1800/31</td>
                    <td className="">1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="">{t('usMainSection7KzCity3')}</td>
                    <td>1800/31 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <div className="usMain__block-section7-russia">
              <table className="russia-table">
                <thead>
                 <tr>
                    <th>{t('usMainSection7Title1')}</th>
                    <th>{t('usMainSection7Title2')}</th>
                    <th>{t('usMainSection7Title3')}</th>
                    <th>{t('usMainSection7Title4')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('usMainSection7Tj')}</td>
                    <td className="">{t('usMainSection7TjCity')}</td>
                    <td>1800/31 {t('usMainSection7P1')}</td>
                    <td className="">1</td>
                  </tr>
                </tbody>
              </table>
              <img src={mapTj} alt="" />
            </div>
            <div className="usMain__block-section7-russia">
              <img src={mapKrg} alt="" />
              <table className="russia-table">
                <thead>
                 <tr>
                    <th>{t('usMainSection7Title1')}</th>
                    <th>{t('usMainSection7Title2')}</th>
                    <th>{t('usMainSection7Title3')}</th>
                    <th>{t('usMainSection7Title4')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('usMainSection7Krg')}</td>
                    <td className="">{t('usMainSection7KrgCity')}</td>
                    <td>800/40 {t('usMainSection7P3')}</td>
                    <td className="">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default UsMain