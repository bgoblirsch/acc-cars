import React from "react"
import classStyles from "./class.module.css"

export default function Class({ children }) {
  return (
    <div className={classStyles.class}>
        {children}
    </div>
  )
}