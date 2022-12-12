import {Container} from "./component/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from "./component/Layout";
import {Ruby} from "./component/pages/Ruby";
import {Javascript} from "./component/pages/Javascript";
import {Elixir} from "./component/pages/Elixir";
import {Java} from "./component/pages/Java";
import {Lua} from "./component/pages/Lua";
import {Csharp} from "./component/pages/Csharp";
import {NotFound} from "./component/pages/NotFound";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Container/>}/>
                    <Route path="/langage">
                        <Route path="ruby" element={<Ruby/>}/>
                        <Route path="javascript" element={<Javascript/>}/>
                        <Route path="elixir" element={<Elixir/>}/>
                        <Route path="java" element={<Java/>}/>
                        <Route path="lua" element={<Lua/>}/>
                        <Route path="csharp" element={<Csharp/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
