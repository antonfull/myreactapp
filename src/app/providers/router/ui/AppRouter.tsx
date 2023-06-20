import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {RouteConfig} from 'shared/config/RouteConfig';
import {AppLoader} from 'widgets/AppLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<AppLoader/>}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path}) =>
                    <Route key={path} element={
                        <div className='content-page'>{element}</div>} path={path}/>)}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
