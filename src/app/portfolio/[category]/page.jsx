import React from 'react'
import sytles from "./page.module.css"
import Image from 'next/image'
import Button from "@/components/Button/Button";

const Category = ({params}) => {

  return (
    <div className={sytles.category}>

     <h1 className={sytles.catTitle}>{params.category}</h1>
     
     <div className={sytles.item}>
     <div className={sytles.content}>
      <h1 className={sytles.title}>Test</h1>
      <p className={sytles.desc}>Desc</p>
      <Button text="see more" url="#" />
     </div>
     <div className={sytles.imgContainer}>
     <Image className={sytles.img} fill={true} src="https://images.pexels.com/photos/14894653/pexels-photo-14894653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt=""/>
     </div>
     </div>
     <div className={sytles.item}>
     <div className={sytles.content}>
      <h1 className={sytles.title}>Test</h1>
      <p className={sytles.desc}>Desc</p>
      <Button text="see more" url="#" />
     </div>
     <div className={sytles.imgContainer}>
     <Image className={sytles.img} fill={true} src="https://images.pexels.com/photos/14894653/pexels-photo-14894653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt=""/>
     </div>
     </div>
     <div className={sytles.item}>
     <div className={sytles.content}>
      <h1 className={sytles.title}>Test</h1>
      <p className={sytles.desc}>Desc</p>
      <Button text="see more" url="#" />
     </div>
     <div className={sytles.imgContainer}>
     <Image className={sytles.img} fill={true} src="https://images.pexels.com/photos/14894653/pexels-photo-14894653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     alt=""/>
     </div>
     </div>
    </div>
  )
}

export default Category
