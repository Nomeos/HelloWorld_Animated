import React from "react";
import {Card} from "../utils/Card";
import {motion} from "framer-motion";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

export function Lua() {
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
                <div className={'contentContainer'}>
                    <Card
                        size={'medium'}
                        title={"What's Lua?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={0.5}
                    >
                        Lua is a robust, lightweight, and embeddable scripting language that supports multiple
                        programming methods, including procedural, object-oriented, functional, and data-driven
                        programming.
                    </Card>
                    <Card
                        size={'large'}
                        title={"How Lua works?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={1}
                    >
                        Lua is not directly interpreted through a Lua file like other languages such as Python. Instead,
                        it uses the Lua interpreter to compile a Lua file to bytecode.
                        The Lua interpreter is written in ANSI C, making it highly portable and capable of running on a
                        multitude of devices.
                    </Card>
                    <Card
                        size={'small'}
                        title={"Logo"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={1.5}
                    >
                        <img src={"/images/Lua.png"} alt={'icon'}/>
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
                                Simple and easy to learn: Lua has a simple and easy-to-learn syntax, making it a great
                                language for beginners.
                            </li>
                            <li>
                                Extensible: Lua is highly extensible and can be embedded in other applications, allowing
                                you to add scripting capabilities to your programs.
                            </li>
                            <li>
                                Fast: Lua is a fast language, thanks to its bytecode interpreter and just-in-time
                                compilation.
                            </li>
                            <li>
                                Portable: Lua is portable and runs on a wide range of platforms, including Windows,
                                macOS, Linux, iOS, and Android.
                            </li>
                            <li>
                                Dynamically typed: Lua is a dynamically-typed language, which means that you don't have
                                to specify the data type of a variable when declaring it.
                            </li>
                            <li>
                                Garbage-collected: Lua has a built-in garbage collector, which automatically manages
                                memory allocation and deallocation, freeing you from the burden of manually managing
                                memory.
                            </li>
                            <li>
                                Concurrent: Lua supports multiple threads of execution, allowing you to write concurrent
                                programs.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'large'}
                        title={"Disadvantages"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={2}
                    >
                        <ul>
                            <li>
                                Limited library support: Lua has a relatively small standard library and may not have
                                the built-in support for some tasks that other languages offer.
                            </li>
                            <li>
                                Weak typing: Lua is a dynamically-typed language, which means that you don't have to
                                specify the data type of a variable when declaring it. While this can be convenient, it
                                can also lead to bugs if you are not careful.
                            </li>
                            <li>
                                Limited object-oriented programming support: While Lua does have some support for
                                object-oriented programming, it is not as comprehensive as in other languages like Java
                                or Python.
                            </li>
                            <li>
                                Limited support for large programs: While Lua is suitable for small to medium-sized
                                programs, it may not be the best choice for very large programs due to its lack of
                                built-in support for some features that are useful in large programs, such as namespace
                                support.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'small'}
                        title={'Hello World'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3.5}
                    >
                        <SyntaxHighlighter language="lua" style={docco}>
                            {"print(\"Hello, World!\")\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'medium'}
                        title={'Variables'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={4}
                    >
                        <SyntaxHighlighter language="lua" style={docco}>
                            {"local myString = \"Hello, World!\"\n" +
                            "local myNumber = 42\n" +
                            "local myBoolean = true\n" +
                            "local myTable = {\"Hello\", \"World\", 42}\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'small'}
                        title={'If Statements'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={4.5}
                    >
                        <SyntaxHighlighter language="lua" style={docco}>
                            {"if myNumber == 42 then\n" +
                            "    print(\"Hello, World!\")\n" +
                            "end\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'small'}
                        title={'For Loops'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={5}
                    >
                        <SyntaxHighlighter language="lua" style={docco}>
                            {"for i = 1, 10 do\n" +
                            "    print(\"Hello, World!\")\n" +
                            "end\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'medium'}
                        title={"When to use Lua?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >
                        <ul>
                            <li>
                                As a scripting language without major limitations, you can use Lua for any scenario,
                                from a simple backend script in a web server to complex game development.
                            </li>
                            <li>
                                Lua is highly prevalent in video game development as it can be used to create
                                functionality
                                without contaminating the overall performance while also keeping everything separate.
                            </li>
                            <li>
                                Another area that Lua excels is embedded programming, where size and performance are
                                major
                                concerns. Lua can be used in everyday applications to extend the existing functionality
                                or
                                create new features and functions.
                            </li>
                        </ul>

                    </Card>

                    <Card
                        size={'large'}
                        title={'More Information'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3.5}
                    >
                        <ul>
                            <li>
                                The official Lua documentation is a comprehensive resource that covers all aspects of the language. It is available at https://www.lua.org/docs.html.
                            </li>
                            <li>
                                Learn Lua in Y Minutes is a concise tutorial that provides an overview of the most important features of Lua. It is available at https://learnxinyminutes.com/docs/lua/.
                            </li>
                            <li>
                                The Lua Tutorial is a longer tutorial that provides a more in-depth introduction to the language. It is available at https://www.tutorialspoint.com/lua/index.htm.
                            </li>
                            <li>
                                Programming in Lua is a book that provides a detailed introduction to the language. It is available online at http://www.lua.org/pil/.
                            </li>
                            <li>
                                The Lua Wiki is a community-driven resource that contains a wealth of information about the language, including tutorials, examples, and best practices. It is available at https://www.lua.org/wiki/.
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </>
    )
}