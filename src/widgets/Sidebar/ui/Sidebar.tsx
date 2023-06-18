import React, {useState} from "react";
import {classNames} from "shared/lib/classNames";
import cls from "./Sidebar.module.scss";
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";

export interface SidebarProps{
    className?: string;
}
const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toogleSidebar = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toogleSidebar}>{collapsed? ">" : "<"}</Button>
            <div className={cls.Switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;