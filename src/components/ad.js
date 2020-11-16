import React from "react"
import adStyles from "./ad.module.css"
import useWindowWidth from "../utils/windowsize"

export default function Ad() {
  const landscape = useWindowWidth();
  return typeof window !== "undefined" && (
    <div className={ landscape ? adStyles.adLandscape : adStyles.adPortrait }>
    Ad Placeholder
    </div>
  )
}