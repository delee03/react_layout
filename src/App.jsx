import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeaderComponent from "./components/HeaderComponent";
import BannerComponent from "./components/BannerComponent";
import ItemComponent from "./components/ItemComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <h1 className="bg-sky-500 text-black font-semibold text-3xl">
                Hello world & React JS
            </h1> */}
            <HeaderComponent />
            <BannerComponent />
            <ItemComponent />
            <FooterComponent />
        </>
    );
}

export default App;
