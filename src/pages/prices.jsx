import { useTranslation } from "react-i18next";
import "./prices.css";

import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
} from "@mui/material";

const wines = [
  {
    id: "reserva",
    nameKey: "prices.wines.reserva.name",
    typeKey: "prices.wines.reserva.type",
    year: 2018,
    priceBottle: 18.5,
    priceBox: 105,
    badgeKey: "prices.badges.bestSeller",
  },
  {
    id: "crianza",
    nameKey: "prices.wines.crianza.name",
    typeKey: "prices.wines.crianza.type",
    year: 2020,
    priceBottle: 14.9,
    priceBox: 84,
    badgeKey: "prices.badges.newVintage",
  },
  {
    id: "blancJove",
    nameKey: "prices.wines.blancJove.name",
    typeKey: "prices.wines.blancJove.type",
    year: 2023,
    priceBottle: 9.9,
    priceBox: 56,
  },
  {
    id: "rosatEstiu",
    nameKey: "prices.wines.rosatEstiu.name",
    typeKey: "prices.wines.rosatEstiu.type",
    year: 2023,
    priceBottle: 10.5,
    priceBox: 60,
  },
  {
    id: "seleccioParcel",
    nameKey: "prices.wines.seleccioParcel.name",
    typeKey: "prices.wines.seleccioParcel.type",
    year: 2019,
    priceBottle: 24.0,
    priceBox: 138,
    badgeKey: "prices.badges.limited",
  },
];

export default function Prices() {
  const { t } = useTranslation();

  return (
    <main className="prices-page">
      <section className="prices-header">
        <Typography variant="h3" component="h1" align="center">
          {t("prices.title")}
        </Typography>
      </section>

      <Container>
        <Grid
          container
          spacing={3}
          className="prices-grid"
          justifyContent="center"
        >
          {wines.map((wine) => (
            <Grid item xs={12} sm={6} md={4} key={wine.id}>
              <Card className="price-card">
                <CardContent>
                  <div className="price-card-header">
                    <Typography
                      variant="h6"
                      component="h2"
                      className="price-card-name"
                    >
                      {t(wine.nameKey)}
                    </Typography>
                    {wine.badgeKey && (
                      <Chip
                        label={t(wine.badgeKey)}
                        size="small"
                        className="price-card-badge"
                      />
                    )}
                  </div>

                  <Typography
                    variant="body2"
                    className="price-card-type"
                  >
                    {t(wine.typeKey)} · {wine.year}
                  </Typography>

                  <div className="price-card-prices">
                    <div className="price-row">
                      <span className="price-label">
                        {t("prices.labels.bottle")}
                      </span>
                      <span className="price-value">
                        {wine.priceBottle.toFixed(2)} €
                      </span>
                    </div>
                    <div className="price-row">
                      <span className="price-label">
                        {t("prices.labels.box")}
                      </span>
                      <span className="price-value">
                        {wine.priceBox.toFixed(2)} €
                      </span>
                    </div>
                  </div>

                  <Typography
                    variant="caption"
                    className="price-note"
                    display="block"
                  >
                    {t("prices.note")}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div className="prices-contact-btn-wrapper">
          <Button
            variant="contained"
            size="large"
            className="prices-contact-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            {t("prices.contactButton")}
          </Button>
        </div>

      </Container>
        

      <footer className="site-footer">
        <p>© 2025 Wine Company · {t("footer.rights")}</p>
      </footer>
    </main>
  );
}
