import React from 'react';

import { SideNav } from './../SideNav/SideNav';

import './portfolio.css';

export const Portfolio = ({handleSectionClick }) => {  
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                 <SideNav 
                     handleSectionClick={handleSectionClick} />
            </div>
            <div className="main-section-container">
            <h1>Main Secction</h1>
            </div>
        </div>
        
    )
}