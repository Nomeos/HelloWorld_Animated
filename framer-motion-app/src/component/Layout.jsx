import {Outlet} from 'react-router-dom';
import configData from "../config.json";
import React from "react";
import {Navigation} from "./sidebar/Navigation";
import {motion} from "framer-motion";
import useWindowDimensions from "./utils/WindowDimension";

export function Layout() {
    const {height} = useWindowDimensions();
    return (
        <>
            <Outlet/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: configData.Animation.THIRD_ANIMATION}}
            >
                <Navigation height={height} config={configData}/>
            </motion.div>
        </>
    );
}