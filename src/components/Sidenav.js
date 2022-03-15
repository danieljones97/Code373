import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faScroll, faRoad, faUsers, faQuestion, faEye, faGem, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import openseaLogo from '../images/opensea-logo.png';
import { Link, animateScroll as scroll } from "react-scroll";

library.add(faHome, faScroll, faRoad, faUsers, faQuestion, faEye, faGem, faCalendarDays);

const Sidenav = () => {

    return (
        <div className="sidenav-container">
            <div className='sidenav'>
                <Link to="home-module" smooth={true} duration={500}><FontAwesomeIcon icon="home" size="2xl" className="fa-icon" /></Link>
                <Link to="lore-module" smooth={true} duration={500}><FontAwesomeIcon icon="scroll" size="2xl" className="fa-icon" /></Link>
                <Link to="sneakpeak-module" smooth={true} duration={500}><FontAwesomeIcon icon="eye" size="2xl" className="fa-icon" /></Link>
                <Link to="rarity-module" smooth={true} duration={500}><FontAwesomeIcon icon="gem" size="2xl" className="fa-icon" /></Link>
                <Link to="roadmap-module" smooth={true} duration={500}><FontAwesomeIcon icon="road" size="2xl" className="fa-icon" /></Link>
                <Link to="events-module" smooth={true} duration={500}><FontAwesomeIcon icon="calendar-days" size="2xl" className="fa-icon" /></Link>
                <Link to="team-module" smooth={true} duration={500}><FontAwesomeIcon icon="users" size="2xl" className="fa-icon" /></Link>
                <Link to="faq-module" smooth={true} duration={500}><FontAwesomeIcon icon="question" size="2xl" className="fa-icon" /></Link>
                <hr />
                <div className="sidenav-socials">
                    <a href="https://opensea.io/" target="_blank" rel="noreferrer"><img src={openseaLogo} id="opensea-logo" alt="opensea-logo" /></a>
                    <a href="https://discord.com/channels/@me"><FontAwesomeIcon icon={faDiscord} size="xl" className="fa-icon" /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} size="xl" className="fa-icon" /></a>
                </div>

            </div>
        </div>
    );
};

export default Sidenav;
