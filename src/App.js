import './App.css';
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponent";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/*" element={<HomeComponent/>}/>
            </Routes>
        </div>
    );
}

export default App;
