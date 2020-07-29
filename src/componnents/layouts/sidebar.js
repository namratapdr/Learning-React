import React from 'react';
import { FaChevronDown , FaInbox , FaRegCalendarAlt , FaRegCalendar} from 'react-icons/fa';
export const Sidebar = () => {
    return (
        
            <div className="sidebar_container" data-testid="sidebbar">
                <ul className="sidebar_generic">
                    <li>
                            <span>
                                <FaInbox />
                            </span> 
                            <span>
                                 Inbox
                            </span>
                        </li>
                    <li>
                        <span>
                        <FaRegCalendar />
                         </span>
                                <span>
                                 Today
                                </span>
                    </li>
                    <li>
                        <span>
                            <FaRegCalendarAlt />
                        </span>
                        <span>
                            Next 7 days
                        </span>
                        
                    </li>
                </ul>
                <div className="sidebar_middle">
                    <span>
                        < FaChevronDown />
                    </span>
                    <span>
                        Projects
                    </span>
                    <ul className="sidebar_projects">Projects will be Here</ul>
                    Add Project Component
                </div>
            </div>
    );
};