import React from "react"
import manufacturerStyles from "./manufacturer.module.css"

export default function Manufacturer({ children }) {
  return (
    <div className={manufacturerStyles.manufacturer}>
        {children}
    </div>
  )
}