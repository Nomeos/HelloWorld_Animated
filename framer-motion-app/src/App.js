
import './App.css';
import useWindowDimensions from "./component/utils/WindowDimension";
import {Title} from "./component/Title";
import {Navigation} from "./component/Navigation";

function App() {
    const line = "Hello World";
    const {width, height} = useWindowDimensions();
    const middleX = (width / 2) - (line.length * 10);
    const middleY = (height / 2) - 10;


    return (
        <>
            <Title windowWidth={middleX} windowHeight={middleY} line={line}/>
            <Navigation height={height}/>
        </>
    );
}

export default App;
