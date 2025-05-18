import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import telegram from '../../assets/images/telegram.svg'
import whatsapp from '../../assets/images/whatsapp.svg'
const Footer = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", message: "", tel: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_40gyc39",   // ID сервиса
                "template_mzsfxad",  // Template ID
                {
                    name: formData.name,
                    message: formData.message,
                    tel: formData.tel,
                },
                "-8WxzKktiz21-IcDL"   // Публичный ключ
            )
            .then(() => {
                setStatus("Письмо отправлено!");
                setFormData({ name: "", message: "", tel: "" }); // Очищаем форму
                setTimeout(() => setStatus(""), 3000);
            })
            .catch((error) => {
                console.error("Ошибка при отправке:", error);
                setStatus("Ошибка при отправке. Проверь консоль.");
                setTimeout(() => setStatus(""), 3000);
            });
    };

    return (
        <footer className="footer" id="footer">
            <div className="container">

                <div className="footer__infomain">
                    <h1>DREDMARK GROUP</h1>
                    <h3>ООО DREDGER</h3>
                    <p>{t("fAddress")}</p>
                    <h2>{t('fP6')}</h2>
                    <div className="footer__infomain-block">

                        <div className="footer__infomain-box1">
                            <p>
                                <img src={whatsapp} alt="" />
                                <img src={telegram} alt="" />
                                <p> +998 99 851-60-74  </p>
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
                        <div className="footer__infomain-box3">
                            <h3 className="footer__infomain-box3-h3-1">{t('fP6')}</h3>
                            <h3 className="footer__infomain-box3-h3-2">ООО DREDGER</h3>
                            <h3 className="footer__infomain-box3-h3-3">ООО GIDROMEX MONTAJ</h3>
                        </div>


                </div>

                <div className="footer__block3">
                    <h3>{t("fH1")}</h3>
                    <p>{t("fP2")}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder={t("fName")}
                            value={formData.name} // Привязываем к состоянию
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="tel"
                            placeholder={t("fTel")}
                            value={formData.tel} // Привязываем к состоянию
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            cols="100"
                            placeholder={t("fP3")}
                            value={formData.message} // Привязываем к состоянию
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type="submit">{t("fButton")}</button>
                    </form>
                    {status && <p>{status}</p>}
                </div>

            </div>
        </footer>
    );
};

export default Footer;