import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

export interface AppLinkProps extends LinkProps{
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink = (props : AppLinkProps) => {
    const {children, to,className, theme = AppLinkTheme.PRIMARY, ...otherProps} = props;
    return (
        <Link to={to}
            {...otherProps}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;