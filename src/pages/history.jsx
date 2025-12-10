import { useTranslation } from "react-i18next";
import "./history.css";

import historyImg1 from "../assets/history-1.jpg";
import historyImg2 from "../assets/history-2.jpg";

export default function History() {
  const { t } = useTranslation();

  return (
    <main className="history-page">
      <section className="history-hero">
        <div className="history-hero-content">
          <h1>{t("history.title")}</h1>
          <p>{t("history.intro")}</p>
        </div>
      </section>

      <section className="history-row history-row--image-left">
        <div className="history-image-wrapper">
          <img
            src={historyImg1}
            alt={t("history.origins.title")}
            className="history-image"
          />
        </div>
        <div className="history-text">
          <h2>{t("history.origins.title")}</h2>
          <p>{t("history.origins.text")}</p>
        </div>
      </section>

      <section className="history-row history-row--image-right">
        <div className="history-text">
          <h2>{t("history.tradition.title")}</h2>
          <p>{t("history.tradition.text")}</p>
        </div>
        <div className="history-image-wrapper">
          <img
            src={historyImg2}
            alt={t("history.tradition.title")}
            className="history-image"
          />
        </div>
      </section>
      <footer className="site-footer">
        <p>© 2025 Wine Company · {t("footer.rights")}</p>
      </footer>
    </main>
  );
}
