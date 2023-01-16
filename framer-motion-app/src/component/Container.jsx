import {motion} from "framer-motion";
import {Title} from "./pages/Title";
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
            transition={{duration: 1, delay: configData.Animation.SECOND_ANIMATION}}
            style={{width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}
        >
            <Title windowWidth={middleX} windowHeight={middleY} line={line} config={configData}/>
        </motion.div>
    );
}