import React from 'react';
import './Loader.scss';
export interface LoaderProps{
    className?: string;
}
const Loader = ({className}: LoaderProps) => {
    return (
        <div className="loadingio-spinner-spin-wk4ajyl10a">
            <div className="ldio-08leio8v9hza">
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;