import Counter from "./Components/Counter";
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import {Suspense, useContext, useState} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {

    const {theme, toogleTheme} = useTheme()

    return <div className={classNames('app', {}, [theme])}>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <button onClick={toogleTheme}>Change theme</button>
        <Suspense fallback={'...loading'}>
            <Routes>
                <Route path={'/'} element={<MainPageAsync/>}/>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
            </Routes>
        </Suspense>
    </div>
}

export default App;