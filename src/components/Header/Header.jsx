import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import burger from '../../assets/images/burger.svg';
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Управление состоянием языка
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  useEffect(() => {
    setSelectedLang(i18n.language);
  }, [i18n.language]);

  // Управление навигацией через select
  const [selectedPage, setSelectedPage] = useState("");

  const handlePageChange = (event) => {
    const value = event.target.value;
    setSelectedPage(""); // Сброс после навигации
    if (value !== "") {
      navigate(value);
    }
  };

  // Обработчик смены языка
  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    setSelectedLang(newLang);
    changeLanguage(newLang);
  };
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to='/' className='logo'>DREDMARK</NavLink>
        <div className="burger" onClick={() => {
          if (!isOpen) {
            setIsOpen(true)
          }
        }}>
          <img src={burger} alt="" />
        </div>
        <ul ref={menuRef} className={`nav__list ${isOpen ? "open" : ""}`}>
          <NavLink to='/' className='link'>{t('navLink1')}</NavLink>
          <NavLink to='/vozm' className='link'>{t('navLink2')}</NavLink>
          <select onChange={handlePageChange} value={selectedPage} className="select1">
            <option value="" disabled hidden>{t("gallery")}</option>
            <option value="/video">{t("video")}</option>
            <option value="/img">{t("images")}</option>
          </select>
          <NavLink to='/us' className='link'>{t('navLink4')}</NavLink>
          <NavLink to='/us#fresh-projects' className='freshBtn'>{t('gM3FreshH2')}</NavLink>
          <select onChange={handleLanguageChange} value={selectedLang} className="select2">
            <option value="ru">Ru</option>
            <option value="en">En</option>
            <option value="uz">Uz</option>
          </select>

          <a href="#footer" className='link__a'>{t("navLink7")}</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
