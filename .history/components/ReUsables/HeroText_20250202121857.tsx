import React from 'react'

const HeroText = () => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };
  return (
    <div className={styles.hero__maintext}>
              {splitWords(content.herotext).map((word, i) => (
                <p className={styles.word__wrapper} key={i}>
                  <span>{word}</span>
                </p>
              ))}
            </div>
  )
}

export default HeroText