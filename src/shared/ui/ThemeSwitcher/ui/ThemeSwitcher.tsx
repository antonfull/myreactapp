import React from "react";
import {classNames} from "shared/lib/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import Button, {ButtonTheme} from "shared/ui/Button/Button";

export interface ThemeSwitcherProps{
    className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toogleTheme} = useTheme();
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toogleTheme} className={classNames("", {}, [className])}>
            {theme === Theme.LIGHT ?  <LightIcon/> :  <DarkIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;