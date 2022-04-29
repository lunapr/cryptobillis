import React from 'react';
import Roadmap from './Roadmap';
import Team from './Team';
import Welcome from './Welcome';
import Footer from './Footer';
import Events from './Events';
import HomeHero from './HomeHero';
import AsSeenOn from './AsSeenOn';

export default function HomePage(props) {

    return (
        <div>
            <HomeHero/>
            <Welcome/>
            <Roadmap/>
            <Events/>
            <Team/>
            <AsSeenOn/>
            <Footer/>
        </div>
    );
}


