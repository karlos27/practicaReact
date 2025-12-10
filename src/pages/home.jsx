import { useTranslation } from "react-i18next";
import "./home.css";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import redWineImg from "../assets/wine-red.jpg";
import whiteWineImg from "../assets/wine-white.jpg";
import roseWineImg from "../assets/wine-rose.jpg";

const featuredWines = [
  {
    id: "red",
    image: redWineImg,
    nameKey: "home.wines.red.name",
    descKey: "home.wines.red.desc",
  },
  {
    id: "white",
    image: whiteWineImg,
    nameKey: "home.wines.white.name",
    descKey: "home.wines.white.desc",
  },
  {
    id: "rose",
    image: roseWineImg,
    nameKey: "home.wines.rose.name",
    descKey: "home.wines.rose.desc",
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>{t("home.heroTitle")}</h1>
          <p>{t("home.heroSubtitle")}</p>

          <div className="hero-actions">
          <a href="#featured-section" className="hero-button">
            {t("home.heroCta")}
          </a>
          </div>
        </div>
      </section>

      <section className="home-content" id="featured-section">
        <Container>
          <Typography
            variant="h4"
            component="h2"
            className="home-section-title"
          >
            {t("home.featuredTitle")}
          </Typography>

          <Grid
            container
            spacing={3}
            className="featured-wines"
            justifyContent="center"
          >
            {featuredWines.map((wine) => (
              <Grid item xs={12} md={4} key={wine.id}>
                <Card className="wine-card">
                  <CardMedia
                    component="img"
                    image={wine.image}
                    alt={t(wine.nameKey)}
                    className="wine-card-image"
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" className="wine-card-title">
                      {t(wine.nameKey)}
                    </Typography>
                    <Typography variant="body2" className="wine-card-subtitle">
                      {t(wine.descKey)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div className="featured-button-wrapper">
            <Link to="/prices" className="featured-button">
                {t("home.gotoPrices")}
            </Link>
          </div>
          
        </Container>
      </section>
      <footer className="site-footer">
        <p>© 2025 Wine Company · {t("footer.rights")}</p>
      </footer>
    </main>
  );
}
