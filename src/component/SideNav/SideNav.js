import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://scontent.fdac10-1.fna.fbcdn.net/v/t1.0-9/100886156_1098459760528000_5415580248425103360_n.jpg?_nc_cat=106&_nc_sid=e3f864&_nc_eui2=AeEcnAhhTXQ-UyKzzXjIRck6JrCCHp9zi_cmsIIen3OL9xxZoXji4CSO5Jg1N8NORHOCXCpsMdNp2gwxPEAbeQBF&_nc_ohc=vnlOtkqLBXAAX9dUJ9h&_nc_ht=scontent.fdac10-1.fna&oh=2706e868d7826214eaa005c728e2ab1f&oe=5F8D2BBB"
                className="avatar"
                alt="avatar" />
                <h2 className="main-name">Nafisa Tasneem</h2>
                <p className="subtitle">"Dreamer"</p>
                <div className="sections-list">
                    <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                    <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                    <p className="section-list-element" onClick={() => handleSectionClick("project")}>Projects</p>
                </div>
        </div>
    )
}