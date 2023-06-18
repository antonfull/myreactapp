import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import Navbar from "widgets/Navbar/ui/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";

const App = () => {

    const {theme} = useTheme();

    return <div className={classNames("app", {}, [theme])}>
        <Suspense fallback={"...loading"}>
            <Navbar/>
            <div className="page-wrapper">
                <Sidebar/>
                <AppRouter/>
            </div>
        </Suspense>
    </div>;
};

export default App;