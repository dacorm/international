import React from 'react';
import Header from "./components/Header/Header";
import Screen from "./components/Screen/Screen";
import TextSlide from "./components/TextSlide/TextSlide";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";



function App() {
    return (
        <div>
            <Header />
            <Screen />
            <TextSlide />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
