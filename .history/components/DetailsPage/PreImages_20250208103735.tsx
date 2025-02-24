import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import IMAGE from "../../public/images/homevideo.jpg";
import styles from "../../styles/DetailsPage/preimage.module.scss";

interface ImageProps {
  image: StaticImageData;
  aspectRatio: string;
  alt: string;
}

interface PreImagesProps {
  preImages: ImageProps[];
}

const PreImages = ({ content }: { content: PreImagesProps }) => {
  return (
    <section className={`section ${styles.preimage__section}`}>
      <div className={`container ${styles.preimage__container}`}>
        <div className={styles.preimage__wrapper}>
          {content.map((data, i) => (
            <div
              key={i}
              className={styles.preimage__box}
              style={{ aspectRatio: data.aspectRatio }}
            >
              <Image fill quality={100} alt={data.alt} src={IMAGE} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreImages;
