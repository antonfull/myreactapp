import React from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./Navbar.module.scss";
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import Button from "shared/ui/Button/Button";
import i18n from "shared/config/i18n";

export interface NavbarProps{
    className?: string;
}
const Navbar = ({className}: NavbarProps) => {
    const {t, i18n} = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink  className={cls.MainLink} to={"/"}>{t("Главная страница")}</AppLink>
                <AppLink to={"/about"}>{t("О нас")}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;
