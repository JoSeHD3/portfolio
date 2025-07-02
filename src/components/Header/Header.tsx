import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header
            className="flex flex-col container mx-auto mt-20 mb-80 px-4"
            id="header"
        >
            <span className="semibold text-[#0DAD8D] mb-4">
                {t('greeting')}
            </span>
            <h1 className="bold text-[#CFCFCF] text-6xl mb-4">{t('name')}</h1>
            <h2 className="bold text-4xl mb-8">{t('brief_desc')}</h2>
            <span className="semibold w-100">{t('full_desc')}</span>
        </header>
    );
};

export { Header };
