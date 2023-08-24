import React from 'react'
import sytles from './page.module.css'
import Link from 'next/link'
const Portfolio= () => {
  return (
    <div className={sytles.container}>
   <h1 className={sytles.selectTitle}>Choose a galary</h1>
   <div className={sytles.items}>
    <Link href="/portfolio/illustrations" className={sytles.item}>
      <span className={sytles.title}>Illustrations</span>
    </Link>
    <Link href="/portfolio/website" className={sytles.item}>
      <span className={sytles.title}>Website</span>
    </Link>
    <Link href="/portfolio/application" className={sytles.item}>
      <span className={sytles.title}>Application</span>
    </Link>
    
   </div>
    </div>
  )
}

export default Portfolio
