
import './App.css';
import useWindowDimensions from "./component/utils/WindowDimension";
import {Title} from "./component/Title";

function App() {
    const line = "Hello World";
    const {width, height} = useWindowDimensions();
    const middleX = (width / 2) - (line.length * 10);
    const middleY = (height / 2) - 10;


    return (
        <Title windowWidth={middleX} windowHeight={middleY} line={line}/>
    );
}

export default App;
