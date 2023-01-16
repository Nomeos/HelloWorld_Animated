import React from "react";
import {Card} from "../utils/Card";
import {motion} from "framer-motion";

export function Elixir() {
    const contentContainer = {
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",

    }
    const languageColor = {
        page: {
            color: "#000080"
        },
        titles: {
            color: "#575984",
        }
    }

    return (
        <>
            <div className={'container'}>
                <motion.h1
                    style={{...languageColor.page}}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    Lua
                </motion.h1>
                <div style={contentContainer}>
                    <Card
                        size={'large'}
                        title={"What's Lua?"}
                        color={languageColor.titles}
                        delay={0.5}
                    >
                        Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for
                        embedded use in applications. Lua is cross-platform, since the interpreter of compiled bytecode
                        is
                        written in ANSI C, and Lua has a relatively simple C API to embed it into applications. Lua is
                        dynamically typed, runs by interpreting bytecode for a register-based virtual machine, and has
                        automatic memory management with incremental garbage collection, making it ideal for
                        configuration,
                        scripting, and rapid prototyping.
                    </Card>
                    <Card
                        size={'small'}
                        title={"Why Lua?"}
                        color={languageColor.titles}
                        delay={1}
                    >
                        Lua is a very simple language, but it is very powerful. It is very easy to learn, but it is also
                        very powerful.
                    </Card>
                    <Card
                        size={'medium'}
                        title={"How to use Lua?"}
                        color={languageColor.titles}
                        delay={1.5}
                    >
                        Lua is a very simple language, but it is very powerful. It is very easy to learn, but it is also
                        very powerful.
                    </Card>
                    <Card
                        size={'small'}
                        title={"How to use Lua?"}
                        color={languageColor.titles}
                        delay={2}
                    >
                        Lua is a very simple language, but it is very powerful. It is very easy to learn, but it is also
                        very powerful.
                    </Card>
                    <Card
                        size={'medium'}
                        title={"How to use Lua?"}
                        color={languageColor.titles}
                        delay={2.5}
                    >
                        Lua is a very simple language, but it is very powerful. It is very easy to learn, but it is also
                        very powerful.
                    </Card>
                    <Card
                        size={'large'}
                        title={"How to use Lua?"}
                        color={languageColor.titles}
                        delay={3}
                    >
                        Lua is a very simple language, but it is very powerful. It is very easy to learn, but it is also
                        very powerful.
                    </Card>
                    <Card
                        size={'big'}
                        title={"How to use Lua?"}
                        color={languageColor.titles}
                        delay={3.5}
                    >
                        Lua is a very simple language, but it is very powerful. It is very easy to learn, but it is also
                        very powerful.
                    </Card>
                </div>
            </div>
        </>
    )
}