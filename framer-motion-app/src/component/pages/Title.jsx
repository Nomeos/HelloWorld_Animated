import {motion} from "framer-motion";
import React from "react";

export function Title(props) {
    const {windowWidth, windowHeight, line, config} = props;


    return (
        <motion.div
            whileHover={{scale: 1.1}}
            style={{
                width: "fit-content",
                height: "fit-content",
                position: "fixed",
                top: windowHeight,
                left: windowWidth,
            }}
        >
            {
                line.split("").map((letter, index) => {
                        return (

                            <motion.h2
                                key={index + letter}
                                initial={{x: -(windowWidth), y: -(windowHeight)}}
                                animate={{x: 0, y: 0}}
                                transition={{duration: 1, delay: config.Animation.FIRST_ANIMATION + index * 0.1}}
                                style={{display: "inline-block"}}
                            >
                                <motion.h2
                                    initial={{color: "black"}}
                                    animate={{color: "white"}}
                                    transition={{delay: config.Animation.SECOND_ANIMATION, duration: 1}}
                                >
                                    {letter}
                                </motion.h2>
                            </motion.h2>
                        )
                    }
                )}
        </motion.div>
    )
}