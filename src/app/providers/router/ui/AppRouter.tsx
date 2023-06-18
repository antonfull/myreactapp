import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {RouteConfig} from "shared/config/RouteConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={"...loading"}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path}) =>
                    <Route key={path} element={
                        <div className='content-page'>{element}</div>} path={path}/>)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;