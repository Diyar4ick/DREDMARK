import { useTranslation } from "react-i18next";
import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import instagram from "../../assets/images/instagram.svg";
import youTube from "../../assets/images/youtube.svg";
// import email from '../../assets/images/email.svg';
// import sertifikat from '../../assets/pdf/sertifikat.pdf';
// import sertifikatImg from '../../assets/images/pdfImg.jpg'
import { useState } from "react";

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const now = new Date().toLocaleString();
    const dataToSend = {
      ...formData,
      subject: `Новое сообщение от ${formData.name} (${now})`,
    };

    try {
      const response = await fetch("https://formspree.io/f/mvganqgv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Сообщение отправлено");
        setFormData({ name: "", tel: "", message: "" });
      } else {
        alert("Ошибка при отправке. Попробуйте позже.");
      }
    } catch (error) {
      alert("Ошибка сети. Проверьте подключение.");
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__infomain">
          <h1>DREDMARK GROUP</h1>
          <h3>ООО DREDGER</h3>
          <p>{t("fAddress")}</p>
          <div className="footer__infomain-block">
            <div className="footer__infomain-box1">
              <p className="ft4">
                <h4 className="ft4__p1">{t("fP4")}</h4>
                <span>
                  <img src={whatsapp} alt="" />
                  <img src={telegram} alt="" />
                  <p>+998 97 407-57-93</p>
                </span>
              </p>
              <p className="ft4">
                <h4 className="ft4__p1">{t("fP5")}</h4>
                <span>
                  <img src={whatsapp} alt="" />
                  <img src={telegram} alt="" />
                  <p>+998 90 113-85-44</p>
                </span>
              </p>
            </div>
            {/* <div className="footer__infomain-box2">
              <a
                href="https://t.me/TZNMDredmark"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInst"
              >
                <img src={telegram} alt="" />
                Telegram
              </a>
              <a
                href="https://www.instagram.com/dredmark.su?igsh=OGxyMGQxMDA3cXhy"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInst"
              >
                <img src={instagram} alt="" />
                Instagram
              </a>
              <a
                href="https://youtube.com/@dredmark4824?si=wk15PrfzJCvJzkMI"
                target="_blank"
                rel="noopener noreferrer"
                className="linkInst"
              >
                <img src={youTube} alt="" />
                YouTube
              </a>
            </div> */}
          </div>
          <a href="#" className="linkInst">
            {/* <img src={email} alt="" /> */}
            dredmark.websites@gmail.com
          </a>
          <div className="footer__infomain-box3">
            <h3 className="footer__infomain-box3-h3-1">{t("fP6")}</h3>
            <div className="footer__infomain-box3-comanies">
              <h3 className="footer__infomain-box3-h3-2">ООО DREDGER</h3>
              <h3 className="footer__infomain-box3-h3-3">
                ООО GIDROMEX MONTAJ
              </h3>
            </div>
          </div>
        </div>

        <div className="footer__block3">
          <h3>{t("fH1")}</h3>
          <p>{t("fP2")}</p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t("fName")}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="tel"
              placeholder={t("fTel")}
              value={formData.tel}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={t("fP3")}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">{t("fButton")}</button>
          </form>
        </div>
      </div>
      <div className="seo">
        <h2>• земснаряд Ташкент</h2>
        <h2>• земснаряд Узбекистан</h2>
        <h2>• земснаряд Казахстан</h2>
        <h2>• доставка земснаряда в СНГ</h2>
        <h2>• производство земснарядов Центральная Азия</h2>
      </div>
    </footer>
  );
};

export default Footer;
