import React from 'react';
import cls from './NotFound.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
export interface NotFoundProps{
    className?: string;
}
const NotFound = ({className}: NotFoundProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.NotFound, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFound;