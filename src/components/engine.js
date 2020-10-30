import React from "react"
import engineStyles from "./engine.module.css"

export default function Engine({ children }) {
  return (
    <div className={engineStyles.engine}>
        {children}
    </div>
  )
}