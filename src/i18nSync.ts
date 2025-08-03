import { flagStore } from '../src/store';
import i18n from './i18n';

flagStore.subscribe((state) => {
    const lang = state.flagName;
    if (i18n.language !== lang) i18n.changeLanguage(lang);
});
