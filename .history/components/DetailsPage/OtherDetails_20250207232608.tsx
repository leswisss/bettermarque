import React from 'react'
import { StaticImageData } from 'next/image'
import ButtonHeader from '../ReUsables/ButtonHeader'
import Image from 'next/image'
import Button from '../ReUsables/Button'
import IMAGE from "../../public/images/ferrocore.jpg"
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/otherdetails.module.scss"

interface ProjectDetailsProps{
  name: string,
      link: string,
      image: StaticImageData
}


interface DetailDataProps{
  mainText: string,
  second
}

interface ContentProps {
  headerButton: string,
  projectDetails?: ProjectDetailsProps,
}


const OtherDetails = ({content}: {content: }) => {
  const mainText = "We created a cohesive brand identity and an intuitive website for Brinovo Urbano, transforming how they connect with their audience."
  const otherText = "The brand identity established a strong, recognizable presence, while the website streamlined communication and showcased their projects effectively. This elevated their credibility, expanded their reach, and positioned them as leaders in sustainable urban development."

  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text='The solution'/>
          </div>
          {/* <div className={styles.otherd__right}>
            <HeroText maintext={mainText} />
            <div className={styles.otherd__bottom}>
              <p className={styles.otherd__text}>{otherText}</p>
              <Button color='black' size='normal' text='Visit live site' link='https://www.bettermarque.com' target="_blank"/>
            </div>
          </div> */}
          <div className={styles.otherd__right2}>
            <div className={styles.otheri__container}>
              <div className={styles.otheri__wrapper}>
                <Image fill quality={100} alt="Ferrocore" src={IMAGE}/>
              </div>
            </div>
            <Button color='black' size='normal' text='Visit live site' link='https://www.bettermarque.com' target="_blank"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherDetails