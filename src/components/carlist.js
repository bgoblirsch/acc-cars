import React from "react"
import carListStyles from "./carlist.module.css"

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

export default function CarList({ children }) {
    return (
        <div className={ width > height ? carListStyles.carlistLandscape : carListStyles.carlistPortrait}>
            {children}
        </div>
    )
}