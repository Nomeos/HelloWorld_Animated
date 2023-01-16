import React from "react";
import {motion} from "framer-motion";

export function Card(props) {

    const Cards = {
        smallCard: {
            width: "200px",
            //height: "200px",
        },
        mediumCard: {
            width: "400px",
            //height: "200px",
        },
        largeCard: {
            width: "600px",
            //height: "200px",
        },
        bigCard: {
            width: "100%",
            height: "200px",
        }
    }

    const Transitions = {
        fade: {
            initial: {opacity: 0},
            animate: {opacity: 1},
        },
        scale: {
            initial: {scale: 0},
            animate: {scale: 1},
        },
        rotate: {
            initial: {rotate: 360, opacity: 0},
            animate: {rotate: 0, opacity: 1},
        },
        slide: {
            initial: {x: -100, opacity: 0},
            animate: {x: 0, opacity: 1},
        }
    }


    const cardStyle = {
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 0 5px 0 rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "10px",
        padding: "10px",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.5s ease",
        height: "auto",
    }

    const Content = {
        title: {
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            fontWeight: "bold",
            color: "black",
        },
        description: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "15px",
            color: "black",
        }
    }

    return (
        <motion.div
            animate={Transitions[props.transition].animate}
            initial={Transitions[props.transition].initial}
            transition={{delay: props.delay}}
            style={{...cardStyle, ...Cards[`${props.size}Card`]}}
        >
            <div style={{...Content.title, ...props.color}}>
                {props.title}
            </div>
            <div className={'cardChildren'} style={{...Content.description}}>
                {props.children}
            </div>
        </motion.div>
    );

}