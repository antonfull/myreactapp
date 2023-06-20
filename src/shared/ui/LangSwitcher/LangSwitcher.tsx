import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

export interface LangSwitcherProps{
    className?: string;
}
const LangSwitcher = ({className}: LangSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const ToogleTheme = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames(cls.LangSwitcher, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={ToogleTheme}>{t('Язык')}</Button>
        </div>
    );
};

export default LangSwitcher;