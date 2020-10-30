import React from "react"
import carListStyles from "./carlist.module.css"

export default function CarList({ children }) {
    return (
        <div className={carListStyles.carlist}>
            {children}
        </div>
    )
}