import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import {Link} from "react-router-dom";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const variants1 = {
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

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    border: `2px solid black`,
    height: "50px",
    width: "50px",
    borderRadius: "50%",
};

const style1 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
}


export default function ItemNavigation()
{
    return (
        <>
            <motion.ul variants={variants}>
                <Link to={"/"}>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        style={style1}>
                        <motion.div variants={variants1} style={style}>
                            <img src="/images/home.png" alt="icon" style={{ height: "30px" }} />
                        </motion.div>
                    </motion.div>
                </Link>
                {itemIds.map(i => (
                    <MenuItem i={i} key={i} />
                ))}
            </motion.ul>
        </>
    )
}

const itemIds = [0, 1, 2, 3, 4, 5];
