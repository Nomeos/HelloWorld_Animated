import React from "react";
import {motion} from "framer-motion";
import {Card} from "../utils/Card";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function Ruby() {
    const languageColor = {
        page: {
            color: "#a20d01"
        },
        titles: {
            color: "#AB4941FF",
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
                    Ruby
                </motion.h1>
                <div className={'contentContainer'}>
                    <Card
                        size={'large'}
                        title={"What's Ruby?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={0.5}
                    >
                        <ul>
                            <li>
                                Ruby is a programming language that was first released in 1995. It was designed and
                                developed by Yukihiro "Matz" Matsumoto in Japan. Ruby is an interpreted, high-level,
                                general-purpose programming language. It is similar to other programming languages like
                                Python, Perl, and Smalltalk.
                            </li>
                            <li>
                                Ruby is often praised for its readability, flexibility, and expressiveness. It is known
                                for its "convention over configuration" philosophy, which means that it follows certain
                                conventions for structuring code, making it easier to read and understand.
                            </li>
                            <li>
                                Ruby is an object-oriented language, which means that it is based on the concept of
                                objects, which have properties and methods. It also has a built-in garbage collector
                                which automatically manages memory, making it less prone to memory leaks and other
                                memory-related errors.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'medium'}
                        title={"How Ruby works?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={1}
                    >
                        <ul>
                            <li>
                                Ruby is an interpreted language, which means that the source code is read and executed
                                by an interpreter, rather than being compiled into machine code. The Ruby interpreter
                                reads the source code and converts it into a series of instructions that the computer
                                can understand and execute.
                            </li>
                            <li>
                                When a Ruby program is executed, the interpreter reads the source code line by line, and
                                runs the instructions it contains. The interpreter also manages memory and other
                                resources, such as threads, to ensure that the program runs smoothly and efficiently.
                            </li>
                        </ul>
                    </Card>
                    <Card
                        size={'small'}
                        title={"Logo"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={1.5}
                    >
                        <img src={"/images/ruby.png"} alt={'icon'}/>
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
                                Readability and expressiveness: Ruby is known for its readability, flexibility, and
                                expressiveness, which makes it easy to write and understand code.
                            </li>
                            <li>
                                Productivity: Ruby's "convention over configuration" philosophy and its built-in
                                libraries, frameworks, and tools allow developers to be more productive and get things
                                done faster.
                            </li>
                            <li>
                                Object-oriented: Ruby is an object-oriented language, which makes it easy to create and
                                maintain large, complex projects.
                            </li>
                            <li>
                                Automatic memory management: Ruby has a built-in garbage collector that automatically
                                manages memory, making it less prone to memory leaks and other memory-related errors.
                            </li>
                            <li>
                                Large and active community: Ruby has a large and active community, which provides a lot
                                of resources and support for learning and using the language
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
                                Performance: Ruby can be slower than other languages like C and Java, especially when it
                                comes to computationally intensive tasks.
                            </li>
                            <li>
                                Steep learning curve: While Ruby is relatively easy to learn, it has a lot of features,
                                and it can take time to master all of them.
                            </li>
                            <li>
                                Framework-dependent: Ruby is often used with the Ruby on Rails framework, which means
                                that developers are limited to using that framework and its conventions.
                            </li>
                            <li>
                                Lack of support in certain areas: While Ruby is a popular language for web development,
                                it may not be as popular for other areas such as desktop and mobile development, which
                                could make it harder to find resources and support for those types of projects.
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
                        <SyntaxHighlighter language="ruby" style={docco}>
                            {"puts \"Hello, World!\"\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'small'}
                        title={'Variables'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={4}
                    >
                        <SyntaxHighlighter language="ruby" style={docco}>
                            {"x = 5\n" +
                                "y = 10\n" +
                                "puts x + y\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'medium'}
                        title={'If Statement'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={4.5}
                    >
                        <SyntaxHighlighter language="ruby" style={docco}>
                            {"x = 5\n" +
                                "y = 10\n" +
                                "if x > y\n" +
                                "  puts \"x is greater than y\"\n" +
                                "else\n" +
                                "  puts \"x is less than or equal to y\"\n" +
                                "end\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'small'}
                        title={'For Loop'}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={5}
                    >
                        <SyntaxHighlighter language="ruby" style={docco}>
                            {"for i in 0..5\n" +
                                "  puts i\n" +
                                "end\n"}
                        </SyntaxHighlighter>
                    </Card>
                    <Card
                        size={'large'}
                        title={"When to use Ruby?"}
                        color={languageColor.titles}
                        transition={"scale"}
                        delay={3}
                    >
                        <ul>
                            <li>
                                Web development: Ruby is often used for web development, especially with the Ruby on
                                Rails framework, which is a popular framework for building web applications. Ruby on
                                Rails provides a lot of built-in functionality for common web development tasks, such as
                                handling database connections, routing, and more, which makes it faster and easier to
                                build web applications.
                            </li>
                            <li>
                                Automation: Ruby is a great choice for automating repetitive tasks, such as web
                                scraping, data processing, and testing. With its built-in libraries and modules, it's
                                easy to write scripts that can automate a wide variety of tasks.
                            </li>
                            <li>
                                Command-line tools: Ruby is a popular choice for building command-line tools, such as
                                utilities and scripts. With its clear and expressive syntax, it's easy to write simple,
                                yet powerful, command-line tools.
                            </li>
                            <li>
                                Game development: Ruby is also used for game development, it has libraries like
                                Rubygame, Gosu, and Chingu that allows developers to easily create games.
                            </li>
                            <li>
                                Data Science: Ruby also has libraries like Numo/NArray, SciRuby and DataSciRuby that
                                allows developers to easily work with data and perform various data science tasks
                            </li>
                            <li>
                                Scripting and Glue code: Ruby can be used as a scripting language for automating tasks
                                and connecting different systems together.
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
                                Ruby-lang.org: https://www.ruby-lang.org/en/documentation/
                            </li>
                            <li>
                                Codecademy: https://www.codecademy.com/learn/learn-ruby
                            </li>
                            <li>
                                RubyMonk: https://rubymonk.com/
                            </li>
                            <li>
                                LearnStreet: https://www.learnstreet.com/languages/ruby
                            </li>
                            <li>
                                Udemy: https://www.udemy.com/topic/ruby/
                            </li>
                            <li>
                                Pluralsight: https://www.pluralsight.com/courses?search=Ruby
                            </li>
                        </ul>
                    </Card>


                </div>
            </div>
        </>
    )
}