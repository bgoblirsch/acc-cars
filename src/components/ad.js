import React from "react"
import adStyles from "./ad.module.css"

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

export default function Layout() {
  return (
    <div className={ width > height ? adStyles.adLandscape : adStyles.adPortrait }>
    Ad Placeholder
    </div>
  )
}