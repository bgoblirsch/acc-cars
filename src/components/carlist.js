import React from "react"
import carListStyles from "./carlist.module.css"

const width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
const height = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;

export default function CarList({ children }) {
    return (
        <div className={ width > height ? carListStyles.carlistLandscape : carListStyles.carlistPortrait}>
            {children}
        </div>
    )
}