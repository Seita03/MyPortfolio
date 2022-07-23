import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header () {
    return (
        <div id = "header">
            <nav className = "navbar navbar-light bg-light fixed-top">
                <div className = "container">
                    <div className = "navbar-brand col-4">
                        <AnchorLink href = "#top">ENGINEER CAT</AnchorLink>
                    </div>
                    <ul className = "navbar-nav d-flex flex-row col-6 justify-content-around">
                        <li className = "nav-item"><AnchorLink href = "#top">Top</AnchorLink></li>
                        <li className = "nav-item"><AnchorLink href = "#about" offset = {70}>About</AnchorLink></li>
                        <li className = "nav-item"><AnchorLink href = "#skill" offset = {70}>Skill</AnchorLink></li>
                        <li className = "nav-item"><AnchorLink href = "#products" offset = {70}>Products</AnchorLink></li>
                        <li className = "nav-item"><AnchorLink href = "#contact" offset = {70}>Contact</AnchorLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;