import React from "react"
import carStyles from "./car.module.css"

export default function Car({ children, data }) {
    return (
        <div className={carStyles.car}>
            {children}
        </div>
    )
}