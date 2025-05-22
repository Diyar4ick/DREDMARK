import { useTranslation } from "react-i18next";
import telegram from '../../assets/images/telegram.svg';
import whatsapp from '../../assets/images/whatsapp.svg';
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
      const response = await fetch("https://formspree.io/f/xgvkbybn", {
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
              <p>
                <img src={whatsapp} alt="" />
                <img src={telegram} alt="" />
                <p> +998 99 851-60-74 </p>
              </p>
              <p className="ft4">
                <h4 className="ft4__p1">{t("fP4")}</h4>
                <span>
                  <img src={whatsapp} alt="" />
                  <img src={telegram} alt="" />
                  <p>+998 90 062-99-39</p>
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
          </div>
          <div className="footer__infomain-box3">
            <h3 className="footer__infomain-box3-h3-1">{t('fP6')}</h3>
            <div className="footer__infomain-box3-comanies">
              <h3 className="footer__infomain-box3-h3-2">ООО DREDGER</h3>
              <h3 className="footer__infomain-box3-h3-3">ООО GIDROMEX MONTAJ</h3>
            </div>
          </div>
          <div className="footer__infomain-box1">
            <p className="ft4">
              <h4 className="ft4__p1">{t("fP1")}</h4>
              <span>
                <img src={whatsapp} alt="" />
                <img src={telegram} alt="" />
                <p>+7 910 663-07-33</p>
              </span>
            </p>
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
    </footer>
  );
};

export default Footer;
