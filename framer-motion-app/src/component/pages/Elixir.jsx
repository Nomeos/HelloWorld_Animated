import React from "react";
import {Card} from "../utils/Card";
import {motion} from "framer-motion";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

export function Elixir() {
    const languageColor = {
        page: {
            color: "#776081"
        },
        titles: {
            color: "#7D6D84FF",
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
                    Elixir
                </motion.h1>
                <div className={'contentContainer'}>
                    <Card
                        size={'large'}
                        title={"What's Elixir?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={0.5}
                    >
                        <ul>
                            <li>
                                Elixir is a dynamic, functional programming language that is built on top of the Erlang
                                Virtual Machine (EVM). It was created by José Valim in 2011 and it has been gaining
                                popularity due to its performance, scalability and fault-tolerance features.
                            </li>
                            <li>
                                Elixir is a functional programming language, which means that it emphasizes the use of
                                pure functions and immutable data. It also has a strong emphasis on concurrency, making
                                it well-suited for building high-performance, concurrent systems.
                            </li>
                            <li>
                                Elixir also has a built-in macro system that allows for code generation and
                                metaprogramming, which can be used to create powerful, expressive domain-specific
                                languages.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'medium'}
                        title={"How Elixir works?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={0.5}
                    >
                        Elixir works by first being written as source code by a developer, which is then compiled into
                        bytecode that can be executed by the Erlang Virtual Machine (EVM). The EVM is a virtual machine
                        that was designed to run the Erlang programming language, but it also supports other languages
                        like Elixir that run on top of it.
                    </Card>
                    <Card
                        size={'small'}
                        title={"Logo"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={1.5}
                    >
                        <img src={"/images/Elixir.png"} alt={'icon'}/>
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
                                Concurrency: Elixir's built-in support for concurrency allows for efficient and
                                effective handling of large numbers of concurrent users and high levels of traffic.
                            </li>
                            <li>
                                Fault-tolerance: Elixir's built-in support for fault-tolerance allows for easy recovery
                                from errors and the ability to continue running.
                            </li>
                            <li>
                                Expressiveness: Elixir's syntax is similar to Ruby and it has a built-in macro system
                                that allows for code generation and metaprogramming, making it a powerful and expressive
                                language.
                            </li>
                            <li>
                                Scalability: Elixir's built-in support for concurrency and fault-tolerance makes it easy
                                to scale horizontally and handle large numbers of users and high levels of traffic.
                            </li>
                            <li>
                                Large and active community: Elixir has a large and active community of developers that
                                provides a lot of resources and support for learning and using the language.
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
                                Limited adoption: Elixir is not as widely adopted as some other programming languages,
                                which can make it more difficult to find experienced developers and resources.
                            </li>
                            <li>
                                Limited libraries: Elixir has a smaller library ecosystem compared to other more
                                established languages like Java, Python and Ruby.
                            </li>
                            <li>
                                Steep learning curve: While the syntax is similar to Ruby, Elixir is a functional
                                language and it has different concepts, so it might take some time to get used to it if
                                you're not familiar with functional programming.
                            </li>
                            <li>
                                Limited in certain fields: While Elixir is great for concurrency, fault-tolerance and
                                scalability, it may not be the best choice for certain fields such as data science,
                                desktop applications and some other areas that are better served by other languages.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'small'}
                        title={"Hello World"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >

                        <SyntaxHighlighter language="elixir" style={docco}>
                            {" IO.puts \"Hello, World!\""}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'small'}
                        title={"Variables"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >
                        <SyntaxHighlighter language="elixir" style={docco}>
                            {"name = \"John\""}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'medium'}
                        title={"If Statement"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >
                        <SyntaxHighlighter language="elixir" style={docco}>
                            {"if 1 > 2 do\n" +
                            "  \"This will not be true.\"\n" +
                            "else\n" +
                            "  \"But this will.\"\n" +
                            "end"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'small'}
                        title={"For Loop"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >
                        <SyntaxHighlighter language="elixir" style={docco}>
                            {"for n <- 1..10 do\n" +
                            "  IO.puts n\n" +
                            "end"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'large'}
                        title={"When to use Elixir?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >
                        <ul>
                            <li>
                                Elixir is a powerful, functional programming language that is well-suited for building
                                high-performance, concurrent systems. Here are some examples of when it may be
                                appropriate to use Elixir:
                            </li>
                            <li>
                                Web development: Elixir can be used to build web applications using frameworks such as
                                Phoenix and Plug. Phoenix framework is especially optimized for building real-time web
                                applications and it has built-in support for WebSockets and channels.
                            </li>
                            <li>
                                Distributed systems: Elixir's built-in support for concurrency and fault-tolerance makes
                                it well-suited for building distributed systems that can handle large numbers of users
                                and high levels of traffic.
                            </li>
                            <li>
                                Real-time systems: Elixir's built-in support for concurrency and fault-tolerance makes
                                it well-suited for building real-time systems such as chat applications, online gaming,
                                and other systems that require low-latency and high-throughput.
                            </li>
                            <li>
                                Concurrent, fault-tolerant systems: Elixir's built-in support for concurrency and
                                fault-tolerance makes it a great choice for building robust systems that can handle high
                                levels of traffic, and can easily scale horizontally.
                            </li>
                            <li>
                                Microservices: Elixir is a good choice for building Microservices that need to handle
                                high traffic and require high-performance.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'medium'}
                        title={'More Information'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3.5}
                    >
                        <ul>
                            <li>
                                Elixir official documentation: https://elixir-lang.org/getting-started/introduction.html
                            </li>
                            <li>
                                Elixir School: https://elixirschool.com/
                            </li>
                            <li>
                                Elixir University: https://www.elixir-university.com/
                            </li>
                            <li>
                                Pragmatic Studio: https://pragmaticstudio.com/courses/elixir
                            </li>
                            <li>
                                Udemy: https://www.udemy.com/topic/elixir/
                            </li>
                            <li>
                                Elixir Docs: https://elixir-lang.org/docs.html
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </>
    )
}