import React from "react";
import {motion} from "framer-motion";
import {Card} from "../utils/Card";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export function Csharp() {
    const languageColor = {
        page: {
            color: "#D309E1"
        },
        titles: {
            color: "#D543DFFF",
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
                Csharp
            </motion.h1>
            <div className={'contentContainer'}>
                <Card
                    size={'medium'}
                    title={"What's C# or CSharp?"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={0.5}
                >
                    C# (pronounced "C-sharp") is a modern, object-oriented programming language developed by Microsoft
                    in 2000 as part of its .NET initiative. It is designed to be a simple, powerful, and type-safe
                    language that is easy to learn and use.
                </Card>
                <Card
                    size={'large'}
                    title={"How C# works?"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={1}
                >
                    C# is a compiled language, which means that the source code is translated into machine code by a
                    compiler before it can be executed. The resulting machine code is then executed by the Common
                    Language Runtime (CLR), which is a virtual machine that is part of the .NET framework. The CLR
                    provides services such as memory management, type safety, and security.
                </Card>
                <Card
                    size={'small'}
                    title={"Logo"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={1.5}
                >
                    <img src={"/images/Csharp.png"} alt={'icon'}/>
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
                            Versatility: C# can be used to create a wide range of applications, including Windows
                            desktop and web applications, games, mobile apps, and more.
                        </li>
                        <li>
                            Object-oriented: C# is an object-oriented language, which makes it easy to create and
                            maintain large, complex projects.
                        </li>
                        <li>
                            Strongly-typed: C# is a strongly-typed language, which means that variables must be declared
                            with a specific data type, providing more safety and making it easier to catch errors at
                            compile time.
                        </li>
                        <li>
                            Automatic memory management: C# has a built-in garbage collector that automatically manages
                            memory, making it less prone to memory leaks and other memory-related errors.
                        </li>
                        <li>
                            Large and active community: C# has a large and active community, which provides a lot of
                            resources and support for learning and using the language.
                        </li>
                        <li>
                            Cross-platform support: With the release of .NET 5 and its ability to run on multiple
                            platforms, C# can now be used to build applications that run on Windows, Linux, macOS and
                            even in the browser.
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
                            Platform-dependency: C# is primarily used for developing Windows applications and games, so
                            if you need to develop for other platforms like Linux or macOS, you'll need to use a
                            different language or find a way to port your code to other platforms.
                        </li>
                        <li>
                            Performance: While C# is a powerful language, it can be less performant than other languages
                            like C++ when it comes to certain tasks.
                        </li>
                        <li>
                            Steep learning curve: While C# is relatively easy to learn, it has a lot of features, and it
                            can take time to master all of them.
                        </li>
                        <li>
                            Microsoft-dependency: C# is owned by Microsoft and it's only available on the .NET
                            framework, which is also owned by Microsoft. So, in case Microsoft decides to discontinue
                            the language or the framework, it could cause issues for companies and developers who have
                            invested in the language.
                        </li>
                    </ul>
                </Card>
                <Card
                    size={'medium'}
                    title={'Hello World'}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={3.5}
                >
                    <SyntaxHighlighter language="c#" style={docco}>
                        {"using System;\n" +
                            "\n" +
                            "class HelloWorld\n" +
                            "{\n" +
                            "    static void Main()\n" +
                            "    {\n" +
                            "        Console.WriteLine(\"Hello, World!\");\n" +
                            "    }\n" +
                            "}\n"}
                    </SyntaxHighlighter>
                </Card>
                <Card
                    size={'medium'}
                    title={'Variables'}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={4}
                >
                    <SyntaxHighlighter language="c#" style={docco}>
                        {"int myNum = 5;\n" +
                            "double myDoubleNum = 5.99;\n" +
                            "char myLetter = 'D';\n" +
                            "bool myBool = true;\n" +
                            "string myText = \"Hello\";\n"}
                    </SyntaxHighlighter>
                </Card>
                <Card
                    size={'medium'}
                    title={'If Statement'}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={4.5}
                >
                    <SyntaxHighlighter language="c#" style={docco}>
                        {"int time = 20;\n" +
                            "if (time < 18) {\n" +
                            "  Console.WriteLine(\"Good day.\");\n" +
                            "} else {\n" +
                            "  Console.WriteLine(\"Good evening.\");\n" +
                            "}\n"}
                    </SyntaxHighlighter>
                </Card>
                <Card
                    size={'medium'}
                    title={'For Loop'}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={5}
                >
                    <SyntaxHighlighter language="c#" style={docco}>
                        {"for (int i = 0; i < 5; i++) {\n" +
                            "  Console.WriteLine(i);\n" +
                            "}\n"}
                    </SyntaxHighlighter>
                </Card>
                <Card
                    size={'big'}
                    title={"When to use C#?"}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={3}
                >
                    <ul>
                        <li>
                            Windows desktop applications: C# is commonly used to create Windows desktop applications
                            using Windows Forms and WPF.
                        </li>
                        <li>
                            Game development: C# is a popular choice for game development, especially when using the
                            Unity engine, which is one of the most popular game engines.
                        </li>
                        <li>
                            Web development: C# can be used to create web applications using the ASP.NET framework.
                        </li>
                        <li>
                            Mobile app development: C# can be used to create mobile apps for iOS and Android using
                            Xamarin.
                        </li>
                        <li>
                            Enterprise applications: C# can be used to create enterprise applications that need to run
                            on the Windows platform.
                        </li>
                        <li>
                            Cross-platform applications: With the release of .NET 5, C# can now be used to build
                            applications that run on Windows, Linux, macOS and even in the browser, which makes it a
                            good choice for cross-platform development.
                        </li>
                        <li>
                            Machine learning and AI applications: C# also has great support for machine learning and AI
                            development using libraries like TensorFlow.NET
                        </li>
                    </ul>
                </Card>
                <Card
                    size={'Large'}
                    title={'More Information'}
                    color={languageColor.titles}
                    transition={"scale"}
                    delay={3.5}
                >
                    <ul>
                        <li>
                            Microsoft Docs: https://docs.microsoft.com/en-us/dotnet/csharp/
                        </li>
                        <li>
                            C# Station: http://www.csharp-station.com/
                        </li>
                        <li>
                            C# Yellow Book: https://csharphyellowbook.com/
                        </li>
                        <li>
                            Udemy: https://www.udemy.com/topic/c-sharp/
                        </li>
                        <li>
                            Pluralsight: https://www.pluralsight.com/courses?search=C%23
                        </li>
                        <li>
                            CodeAcademy: https://www.codecademy.com/learn/learn-c-sharp
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    )
}