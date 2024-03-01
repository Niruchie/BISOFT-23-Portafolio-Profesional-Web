import i18n from "i18next";
import { useMemo } from "react";
import { initReactI18next, useTranslation } from "react-i18next";

import Navigation from "./Navigation.bundle.json";

import Tools from "./Tools.bundle.json";
import ToolsFrontend from "./Frontend.Tools.bundle.json";
import ToolsBackend from "./Backend.Tools.bundle.json";
import ToolsDatabase from "./Database.Tools.bundle.json";
import ToolsOther from "./Other.Tools.bundle.json";

import Footer from "./Footer.bundle.json";

i18n
	.use(initReactI18next)
	.init({
		fallbackLng: "es",
		interpolation: {
			escapeValue: false,
		}
	});

[
	Navigation,

	Tools,
	ToolsFrontend,
	ToolsBackend,
	ToolsDatabase,
	ToolsOther,

	Footer,
]
	.forEach(bundle => {
		const name = bundle.$meta.name;
		const languages = Object.keys(bundle);

		languages
			.forEach(lang => {
				i18n
					.addResourceBundle(lang, name, bundle[lang]);
			});
	});

export function useLanguage() {
	const { i18n } = useTranslation();
	const current = useMemo(() => i18n.language, [i18n]);
	return current;
}

export default i18n;