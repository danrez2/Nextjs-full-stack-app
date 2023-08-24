import React from 'react'
import sytles from './page.module.css'
import Image from 'next/image'
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div>
    <div className={sytles.contact}>Contact</div>
    <h1 className={sytles.title}>Let's keep in Touch</h1>
    <div className={sytles.content}></div>
    <div className={sytles.imgContainer}>
      <Image src="/contact.png" 
      alt="" fill={true} 
      className={sytles.image}/>

    </div>
    <form className={sytles.form}>
      <input type='text' placeholder='name' className={sytles.input} />
      <input type='text' placeholder='email' className={sytles.input} />
      <textarea
            className={sytles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send"/>
    </form>
    </div>
  )
}

export default Contact
