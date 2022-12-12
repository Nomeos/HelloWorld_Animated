import * as React from "react";
import {motion} from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

const iconStyle = {
    height: "30px"
}


const colors = ["#a20d01", "#D309E1", "#776081", "#ec8c35", "#f0db4f", "#000080"];
const images = ["/images/ruby.png", "/images/csharp.png", "/images/elixir.png", "/images/java.png", "/images/javascript.png", "/images/lua.png"];
const texts = ["Ruby", "C#", "Elixir", "Java", "Javascript", "Lua"];

export const MenuItem = ({i}) => {
    const style = {
        border: `2px solid ${colors[i]}`, display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
    return (
        <motion.li
            variants={variants}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
        >
            <div className="icon-placeholder" style={style}>
                <img src={images[i]} alt="icon" style={iconStyle}/>
            </div>
            <div className="text-placeholder" style={style}>
                <span style={{color: colors[i]}}>{texts[i]}</span>
            </div>
        </motion.li>
    );
};
