import React from 'react';
import Roadmap from './Roadmap';
import Team from './Team';
import Welcome from './Welcome';
import Footer from './Footer';
import HomeHero from './HomeHero';


export default function HomePage(props) {

    return (
        <div>
            <HomeHero/>
            <Welcome/>
            <Roadmap/>
            <Team/>
            <Footer/>
        </div>
    );
}


