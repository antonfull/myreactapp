import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';
import Loader from 'shared/ui/Loader/Loader';
export interface AppLoaderProps{
    className?: string;
}
const AppLoader = ({className}: AppLoaderProps) => {
    return (
        <div className={classNames(cls.AppLoader, {}, [className])}>
            <Loader/>
        </div>
    );
};

export default AppLoader;