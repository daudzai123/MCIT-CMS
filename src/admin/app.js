import favicon from "./extensions/favicon.ico";

const config = {
  head: {
    favicon: favicon,
  },
  translations: {
    en: {
      "Auth.form.welcome.subtitle": "Log in to your MCIT account",
      "Auth.form.welcome.title": "Welcome to MCIT Panel!",
      "app.components.LeftMenu.navbrand.title": "MCIT Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "MCIT CMS",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
