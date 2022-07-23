import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function BurgerMenu(props) {
    

    return (
        <div>
            <Menu>
            <main className = "d-flex flex-column">
                <AnchorLink href = "#top" className = "mb-4">Top</AnchorLink>
                <AnchorLink href = "#about" className = "mb-4">About</AnchorLink>
                <AnchorLink href = "#skill" className = "mb-4">Skill</AnchorLink>
                <AnchorLink href = "#products" className = "mb-4">Products</AnchorLink>
                <AnchorLink href = "#contact">Contact</AnchorLink>
            </main>
            </Menu>
        </div>
    )
}

export default BurgerMenu;