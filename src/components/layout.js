import React from "react"
import layoutStyles from "./layout.module.css"
import Nav from "./nav"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
      <Nav></Nav>
      {children}
    </div>
  )
}