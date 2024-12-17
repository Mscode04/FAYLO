import React from 'react';
import '../App.css'; 

function Doc() {
    return (
        <div className="doc-container">
            <header className="doc-header">
                <h1>Instagram Profile Analysis</h1>
                <p>Analyze Instagram profiles easily and extract key insights.</p>
            </header>

            <section className="doc-content">
                <h2>How It Works</h2>
                <p>This app allows you to analyze Instagram profiles by extracting publicly available data and providing key insights such as follower counts, engagement, and more.</p>

                <h3>How to Use</h3>
                <p>1. Input the Instagram username you want to analyze.</p>
                <p>2. Click on the "Analyze" button.</p>
                <p>3. View the profile analysis data including follower count, average likes, engagement rate, etc.</p>

                <h3>Features</h3>
                <ul>
                    <li>Profile overview with follower count, following count, and post count</li>
                    <li>Engagement analysis: average likes, comments, and followers gained</li>
                    <li>Visual graphs to show performance trends</li>
                    <li>Data export options for further analysis</li>
                </ul>

                <h3>Responsive Design</h3>
                <p>This page is fully responsive. It adjusts seamlessly for mobile, tablet, and desktop screens.</p>
            </section>

            <footer className="doc-footer">
                <p>Made with ❤️ by [Your Name]</p>
            </footer>
        </div>
    );
}

export default Doc;
