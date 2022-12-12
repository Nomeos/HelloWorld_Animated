import {motion} from "framer-motion";
import {Navigation} from "./Navigation";
import {Title} from "./Title";
import useWindowDimensions from "./utils/WindowDimension";
import configData from "../config.json";


export function Container() {
    const line = "Hello World";
    const {width, height} = useWindowDimensions();
    const middleX = (width / 2) - 100;
    const middleY = (height / 2) - 100;

    return (
        <motion.div
            initial={{backgroundColor: "#ffffff"}}
            animate={{backgroundColor: "#2d2d2d"}}
            transition={{duration: 1, delay: configData.SECOND_ANIMATION}}
            style={{width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: configData.THIRD_ANIMATION }}
            >
                <Navigation height={height} config={configData}/>
            </motion.div>
            <Title windowWidth={middleX} windowHeight={middleY} line={line} config={configData}/>
        </motion.div>
    );
}