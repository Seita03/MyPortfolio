import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Footer() {
    return (
        <div className = "text-center footer pt-5" id = "footer">
            <div className = "mt-5">
                <h1>Thank you for reading to the end!</h1>
            </div>
            <AnchorLink href = "#top"><span className = "upArrow roundArrow"></span></AnchorLink>
            <div className = "copyright m-0">
                <p className = "m-0 cText"><small>©2022 Engineer Cat</small></p>
            </div>
        </div>
    )
}

export default Footer;