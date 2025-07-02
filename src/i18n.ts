import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import gbJSON from './locale/gb.json';
import plJSON from './locale/pl.json';

i18n.use(initReactI18next).init({
    resources: {
        gb: { ...gbJSON },
        pl: { ...plJSON },
    },
    lng: 'gb',
    fallbackLng: 'gb',
});

export default i18n;
