import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import {useTranslation} from 'react-i18next';
import Button, {ButtonTheme} from 'shared/ui/Button/Button';

export interface PageErrorProps{
    className?: string;
}
const PageError = ({className}: PageErrorProps) => {
    const {t} = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Что-то пошло не так, попробуйте перезагрузить страницу')}</h1>
            <Button onClick={reloadPage} theme={ButtonTheme.CLEAR}>{t('Перезагрузить')}</Button>
        </div>
    );
};

export default PageError;