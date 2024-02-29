import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Navigation from "./Navigation.bundle.json";

i18n
  .use(initReactI18next)
  .init({ fallbackLng: "es" });

[Navigation]
	  .forEach(bundle => {
		const name = bundle.$meta.name;
		const languages = Object.keys(bundle);

		languages
			.forEach(lang => {
				i18n
					.addResourceBundle(lang, name, bundle[lang]);
			});
	});

export default i18n;