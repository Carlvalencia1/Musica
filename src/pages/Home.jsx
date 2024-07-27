import React from 'react';
import SectionLogin from "../components/organisms/SecLogin";
import SectionView from "../components/organisms/SectionView";
import './Home.css';

function Home() {
    return (
        <div id="home-container">
            <section id="login">
                <div id="login-home">
                    <SectionLogin />
                </div>    
            </section>
            <section id="view">
                <SectionView />
            </section>
        </div>
    );
}

export default Home;
