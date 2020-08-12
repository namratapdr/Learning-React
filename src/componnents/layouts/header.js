import React from 'react';
import { FaPizzaSlice , FaBandAid } from 'react-icons/fa';

export const Header = () => {
    //const x = 1;
    return (
    <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="images/logo.png" alt="Todoist-logo" />
                </div>
                    <div className="Days">
                        <ul>
                            <li>
                                <FaBandAid/> <h2>Monday</h2>
                            </li>
                            <li>
                               <FaPizzaSlice/><h2>Tuesday</h2>
                            </li>
                            <li>
                                <FaBandAid /> <h2>Wednesday</h2>
                            </li>
                            <li>
                                <FaPizzaSlice /><h2>Thursday</h2>
                            </li>
                            <li>
                                <FaBandAid /> <h2>Friday</h2>
                            </li>
                            <li>
                                <FaPizzaSlice /><h2>Saturday</h2>
                            </li>
                            <li>
                                <FaBandAid /> <h2>Sunday</h2>
                            </li>
                        </ul>
                    </div>
            </nav>
    </header>
    );
};