import React from 'react';
import Roadmap from './Roadmap';
import Team from './Team';
import Welcome from './Welcome';
import Footer from './Footer';
export default function HomePage(props) {

    return (
        <div>
            <Welcome/>
            <Roadmap/>
            <Team/>
            <Footer/>
        </div>
    );
}


