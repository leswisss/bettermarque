import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homevideo.jpg"
import styles from "../../styles/DetailsPage/preimage.module.scss"

interface 
const PreImages = () => {
  return (
    <section className={`section ${styles.preimage__section}`}>
      <div className={`container ${styles.preimage__container}`}>
        <div className={styles.preimage__wrapper}>
          <div className={styles.preimage__box} style={{aspectRatio: "16/9"}}>
            <Image fill quality={100} alt="Brinovo Urbano" src={IMAGE} />
          </div>
          <div className={styles.preimage__box} style={{aspectRatio: "16/9"}}>
            <Image fill quality={100} alt="Brinovo Urbano" src={IMAGE} />
          </div>
          <div className={styles.preimage__box} style={{aspectRatio: "16/9"}}>
            <Image fill quality={100} alt="Brinovo Urbano" src={IMAGE} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PreImages