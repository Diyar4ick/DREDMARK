import { useState } from "react";
import { useTranslation } from "react-i18next";

const PriceCell = ({ usdPrice }) => {
  const { t } = useTranslation();

  const [showRub, setShowRub] = useState(false);
  const [rubPrice, setRubPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertToRub = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      const data = await res.json();
      const rate = data.rates.RUB;
      const rub = Math.round(usdPrice * rate);
      setRubPrice(rub.toLocaleString("ru-RU") + "₽");
      setShowRub(true);
    } catch (err) {
      console.error("Ошибка при получении курса:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
        {showRub
          ? `≈ ${rubPrice}`
          : `${t('homePrice')} ${usdPrice.toLocaleString("en-US")}$`}
      </div>

      {showRub ? (
        <button
          onClick={() => setShowRub(false)}
          className='priceButton1'
        >
          {t('navLink9')}
        </button>
      ) : (
        <button
          onClick={convertToRub}
          disabled={loading}
          className="priceButton2"
        >
          {loading ? `${t('loading')}` : `${t('valute')}`}
        </button>
      )}
    </div>
  );
};

export default PriceCell;
