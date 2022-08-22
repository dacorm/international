import React from 'react';
import Header from "./components/Header/Header";
import Screen from "./components/Screen/Screen";
import TextSlide from "./components/TextSlide/TextSlide";
import Footer from "./components/Footer/Footer";



function App() {
    return (
        <div style={{height: '5000px'}}>
            <Header />
            <Screen />
            <TextSlide />
            <Footer />
        </div>
    );
}

export default App;
