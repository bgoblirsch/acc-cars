import React from "react"
import { Link } from "gatsby"
import footerStyles from "./footer.module.css"
import useWindowWidth from "../utils/windowsize"

export default function Footer() {
    const landscape = useWindowWidth();
    return (
        <div className={ landscape ? footerStyles.footerLandscape : footerStyles.footerPortrait}>
            <Link to="/privacy-policy/" className={footerStyles.link}>Privacy Policy</Link>
            <span>The Assetto Corsa logo, Assetto Corsa Competizione, and all images on this site are registered trademarks or property of KUNOS Simulazioni Srl. FMOD Studio, copyright Firelight Technologies Pty, Ltd., 2012-2016.</span>
        </div>
    )
}