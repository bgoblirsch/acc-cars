import React from "react"
import adStyles from "./ad.module.css"

const width = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
const height = document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;

export default function Layout() {
  return (
    <div className={ width > height ? adStyles.adLandscape : adStyles.adPortrait }>
    Ad Placeholder
    </div>
  )
}