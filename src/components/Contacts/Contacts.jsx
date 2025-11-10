import { useTranslation } from "react-i18next";
import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="nav__contacts">
        <h3 className="nav__contacts-title">{t("fP1")}</h3>
        <p className="nav__contacts-item">
          <h4 className="nav__contacts-subtitle">{t("fP9")}</h4>
          <span>
            <img src={whatsapp} alt="" />
            <img src={telegram} alt="" />
            <p>+7 910 663-07-33</p>
          </span>
        </p>
        <p className="nav__contacts-item">
          <h4 className="nav__contacts-subtitle">{t("fP8")}</h4>
          <span>
            <img src={whatsapp} alt="" />
            <img src={telegram} alt="" />
            <p>+7 909 718-33-47</p>
          </span>
        </p>
      </div>
    </>
  );
};

export default Contacts;
