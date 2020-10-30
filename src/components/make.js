import React from "react"
import makeStyles from "./make.module.css"

export default function Make({ children }) {
  return (
    <div className={makeStyles.make}>
        {children}
    </div>
  )
}