import React from "react"
import carListStyles from "./carlist.module.css"
import useWindowWidth from "../utils/windowsize"

export default function CarList({ children }) {
    const landscape = useWindowWidth();
    return (
        <div className={ landscape ? carListStyles.carlistLandscape : carListStyles.carlistPortrait}>
            {children}
        </div>
    )
}