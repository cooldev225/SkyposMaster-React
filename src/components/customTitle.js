import React from 'react'
import { Helmet } from "react-helmet"

export default function CustomTitle({heading, subheading}) {
    const subheadingv = (subheading) ? `| ${subheading}` : '';
    return (
        <Helmet>
        <title>
       {`SkyPOS.com.au | ${heading} ${subheadingv}`} 
       </title>
       </Helmet>
    )
}
