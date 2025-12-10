import { useTranslation } from "react-i18next";
import "./contact.css";

import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

export default function Contact() {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="contact-page">
      <section className="contact-header">
        <Typography variant="h3" component="h1" align="center">
          {t("contact.title")}
        </Typography>
      </section>

      <Container>
        <Grid container spacing={4} className="contact-section">
          <Grid item xs={12} md={6}>
            <form className="contact-form" onSubmit={handleSubmit}>

              <TextField
                fullWidth
                label={t("contact.form.nameLabel")}
                placeholder={t("contact.form.namePlaceholder")}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                type="email"
                label={t("contact.form.emailLabel")}
                placeholder={t("contact.form.emailPlaceholder")}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label={t("contact.form.messageLabel")}
                placeholder={t("contact.form.messagePlaceholder")}
                margin="normal"
                multiline
                rows={5}
                required
              />

              <Button
                type="submit"
                variant="contained"
                className="contact-btn"
                fullWidth
              >
                {t("contact.form.sendButton")}
              </Button>

            </form>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h2" gutterBottom>
              {t("contact.map.title")}
            </Typography>

            <div className="contact-map">
              <iframe
                title="Wine Company location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.216746864051!2d2.169919515734468!3d41.387015979263576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3f2e0a6d1%3A0x9f3c7b5ff1234567!2sWine%20Company!5e0!3m2!1sca!2ses!4v1700000000000!5m2!1ca!2ces"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Grid>

        </Grid>
      </Container>

      <footer className="site-footer">
        <p>© 2025 Wine Company · {t("footer.rights")}</p>
      </footer>

    </main>
  );
}
