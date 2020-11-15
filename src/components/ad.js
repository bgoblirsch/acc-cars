import React from "react"
import adStyles from "./ad.module.css"
import useWindowWidth from "../utils/windowsize"

export default function Layout() {
  const landscape = useWindowWidth()
  return (
    <div className={ landscape ? adStyles.adLandscape : adStyles.adPortrait }>
    Ad Placeholder
    </div>
  )
}