import React from "react";
import {motion} from "framer-motion";
import {Card} from "../utils/Card";

export function Javascript() {
    const languageColor = {
        page: {
            color: "#f0db4f"
        },
        titles: {
            color: "#b3a43d",
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
                    Javascript
                </motion.h1>
                <div className={'contentContainer'}>
                    <Card
                        size={'large'}
                        title={"What's Javascript?"}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={0.5}
                    >
                        JavaScript is a programming language that is commonly used in web development. It was originally
                        developed by Netscape as a means to add dynamic and interactive elements to websites.
                        JavaScript is one of the most popular programming languages, and it is supported by all modern
                        web browsers.
                    </Card>
                    <Card
                        size={'medium'}
                        title={"How Javascript works?"}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={1}
                    >
                        JavaScript is a client-side scripting language, which means that it is executed by the client's
                        web browser rather than on the server. When you visit a website that uses JavaScript, the code
                        is downloaded to your computer and run by your web browser.
                    </Card>
                    <Card
                        size={'small'}
                        title={"Logo"}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={1.5}
                    >
                        <img src={"/images/javascript.png"} alt={'icon'}/>
                    </Card>
                    {/*<Card
                        size={'large'}
                        title={"Advantages"}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={1.5}
                    >
                        <ul>
                            <li>
                                It is a widely-used language, supported by all modern web browsers, which makes it easy
                                for developers to create cross-platform applications.
                            </li>
                            <li>
                                It allows for the creation of interactive and dynamic websites.
                            </li>
                            <li>
                                It can be used on both the client-side and server-side of an application.
                            </li>
                            <li>
                                There is a large and active community of developers who contribute to the ongoing
                                development of JavaScript and its various frameworks and libraries.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'large'}
                        title={"Disadvantage"}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={2}
                    >
                        <ul>
                            <li>
                                It can be a challenging language for beginners to learn, especially if they are not
                                familiar with programming concepts.

                            </li>
                            <li>
                                It is not always the most efficient language, and it may not be the best choice for
                                applications that require a lot of processing power.
                            </li>
                            <li>
                                Some users may have JavaScript disabled in their web browsers, which can make it
                                difficult to use certain features on a website.
                            </li>
                            <li>
                                JavaScript code can be vulnerable to security attacks, such as cross-site scripting
                                (XSS) and injection attacks, if it is not written and maintained properly.
                            </li>
                        </ul>
                    </Card>*/}
                    <Card
                        size={'medium'}
                        title={"When to use Lua?"}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={3}
                    >
                        <ul>
                            <li>
                                JavaScript is a versatile language and can be used in a variety of contexts. Here are
                                some common uses for JavaScript:

                            </li>
                            <li>
                                Web development: JavaScript is often used to create interactive and dynamic websites. It
                                can be used to validate forms, create animations, and handle user events such as mouse
                                clicks and hover events.

                            </li>
                            <li>
                                Mobile development: JavaScript can be used to build native mobile apps for iOS and
                                Android using tools like React Native.
                            </li>
                            <li>
                                Desktop development: JavaScript can be used to build desktop applications for Windows,
                                Mac, and Linux using tools like Electron.
                            </li>
                            <li>
                                Game development: JavaScript can be used to build browser-based games using tools like
                                Phaser or Construct.
                            </li>
                            <li>
                                Internet of Things (IoT): JavaScript can be used to build applications for connected
                                devices and the IoT.
                            </li>
                            <li>
                                Server-side programming: JavaScript can be used on the server side using tools like
                                Node.js to build scalable network applications.
                            </li>
                            <li>
                                In general, JavaScript is a good choice when you need to create interactive or dynamic
                                features for a website or application. It is also a good choice if you need to build a
                                cross-platform application that will run on multiple devices and platforms.
                            </li>
                        </ul>


                    </Card>
                    <Card
                        size={'medium'}
                        title={'Hello World'}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={3.5}
                    >
                        <pre>
                          <code>
                            console.log("Hello, World!");
                          </code>
                        </pre>
                    </Card>
                    <Card
                        size={'medium'}
                        title={'More Information'}
                        color={languageColor.titles}
                        transition={'scale'}
                        delay={3.5}
                    >
                        <ul>
                            <li>
                                MDN Web Docs - This is the official documentation for JavaScript and web development
                                technologies, provided by Mozilla. It is a comprehensive and in-depth resource that
                                covers all aspects of the language:
                                https://developer.mozilla.org/en-US/docs/Web/JavaScript
                            </li>
                            <li>
                                Codecademy - This is an interactive online platform that offers courses and tutorials on
                                a wide range of programming languages, including JavaScript:
                                https://www.codecademy.com/learn/introduction-to-javascript
                            </li>
                            <li>
                                JavaScript.com - This is a website provided by the JavaScript community that offers
                                learning resources and tutorials for beginners: https://www.javascript.com/
                            </li>
                            <li>
                                freeCodeCamp - This is a non-profit organization that offers free interactive coding
                                lessons and certification on a variety of programming topics, including JavaScript:
                                https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </>
    )
}