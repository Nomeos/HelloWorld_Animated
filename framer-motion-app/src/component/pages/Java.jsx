import React from "react";
import {Card} from "../utils/Card";
import {motion} from "framer-motion";

export function Java() {
    const languageColor = {
        page: {
            color: "#ec8c35"
        },
        titles: {
            color: "#e6bc95",
        }
    }
    return (
        <div className={'container'}>
            <motion.h1
                style={{...languageColor.page}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                Java
            </motion.h1>
            <div className={'contentContainer'}>
                <Card
                    size={'large'}
                    title={"What's Java?"}
                    color={languageColor.titles}
                    transition={"slide"}
                    delay={0.5}
                >
                    <ul>
                        <li>
                            Java is a programming language and computing platform that was first released by Sun
                            Microsystems
                            (now owned by Oracle) in 1995. It is designed to be platform-independent, meaning that the
                            same Java
                            code can run on a wide variety of devices and operating systems without modification.
                        </li>
                        <li>
                            Java is an object-oriented programming language, which means that it is based on the concept
                            of
                            "objects" that have certain properties and methods. It also supports other programming
                            paradigms
                            like functional and procedural as well.
                        </li>
                    </ul>
                </Card>
                <Card
                    size={'medium'}
                    title={"How Java works?"}
                    color={languageColor.titles}
                    transition={"slide"}
                    delay={1}
                >
                    Java works by first being written as source code by a developer, which is then compiled into an
                    intermediate format called bytecode. The bytecode is then executed by the Java Virtual Machine
                    (JVM), which is an interpreter that converts the bytecode into machine code that can be executed by
                    the computer's processor.
                </Card>
                <Card
                    size={'small'}
                    title={"Logo"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={1.5}
                >
                    <img src={"/images/Java.png"} alt={'icon'}/>
                </Card>
                <Card
                    size={'large'}
                    title={"Advantages"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={1.5}
                >
                    <ul>
                        <li>
                            Platform independence: Java code can run on a wide variety of devices and operating systems
                            without modification, as long as they have a Java Virtual Machine (JVM) installed.
                        </li>
                        <li>
                            Object-oriented: Java is an object-oriented programming language, which makes it easy to
                            create modular and reusable code.
                        </li>
                        <li>
                            Large community: Java has a large and active community of developers, which means that there
                            are many resources available for learning and troubleshooting.
                        </li>
                        <li>
                            Built-in security features: Java has built-in security features such as sandboxing and
                            memory management, which help to keep code safe from malicious attacks.
                        </li>
                        <li>
                            Widely used: Java is widely used in many industries such as enterprise software, financial
                            services, and mobile app development, making it a valuable skill to have.
                        </li>
                    </ul>
                </Card>
                <Card
                    size={'large'}
                    title={"Disadvantages"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={1.5}
                >
                    <ul>
                        <li>
                            Performance: Java can be slower than some other programming languages, especially when it
                            comes to running computationally-intensive tasks.
                        </li>
                        <li>
                            Memory management: Java's automatic memory management can lead to poor performance if not
                            handled properly.
                        </li>
                        <li>
                            Verbose: Java can be verbose, meaning that it requires more lines of code to accomplish the
                            same task as some other languages.
                        </li>
                        <li>
                            Security issues: Java has had some security issues in the past, such as the Java applet
                            security hole, which allowed untrusted applets to run arbitrary code on a user's computer.
                        </li>
                        <li>
                            Not suitable for system programming: Java is not suitable for low-level programming such as
                            device drivers, operating systems, and embedded systems.
                        </li>
                    </ul>
                </Card>
                <Card
                    size={'medium'}
                    title={"When to use Java?"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={3}
                >
                    <ul>
                        <li>
                            Java is used in a variety of applications such as web development, mobile app development,
                            enterprise software, and video games. It is also commonly used in the development of Android
                            mobile apps, as well as in the creation of enterprise applications for companies. Java is
                            also a popular language for scientific computing and data analysis, as well as for building
                            large-scale distributed systems.
                        </li>
                        <li>
                            Due to its syntax and structure, Java is considered to be easy to learn and use, making it a
                            popular choice for beginners and experienced programmers alike.
                        </li>
                    </ul>
                </Card>
                <Card
                    size={'medium'}
                    title={"When to use Java?"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={3}
                >
                    System.out.println("Hello, World!");
                </Card>
            </div>
        </div>
    )
}