'use client'
import styles from '../styles/Home.module.scss';
import { useState } from 'react';
import {motion } from 'framer-motion';
import MousePosition from '../utils/MousePosition';

export default function Home() 
{
  const [isHovered , setIsHovered] = useState(false);
  const { x , y } =  MousePosition() || {};
  const size = isHovered ? 400 : 40;

  const maskPositionX = x != null ? x - (size/2) : 0;

  return (
    <main className={styles.main} >


      <div className={styles.landing}>
        

      <motion.div

      className = {styles.mask}
      animate = {{
        WebkitMaskPosition: `${maskPositionX}px ${y != null ? y - (size/2) : 0}px`,
        WebkitMaskSize : `${size}px`,
      }}
      transition = {{
        type : "tween",
        ease: "backOut",
        duration: 0.5
      }}
      >

        <div 
        className='relative -left-[2%] h-fit px-5 lg:px-[70px] sm:px-[45px]'
        onMouseEnter = {() => {setIsHovered(true)}}
        onMouseLeave={() => {setIsHovered(false)}} 
         
        >
          <p className='text-[13px] w-fit font-NeueMontreal-Bold tracking-[3px] uppercase relative md:left-64 self-center md:self-auto text-primary'>Neeraj Godiyal</p>
          <h1 className='flex items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-primary sm:relative sm:left-[22%] multi'>
            
            <div className={styles.line}>
              <span className={styles.marquee} >
                <div className={styles.word} >
                  <div className={styles.char} >
                    T
                  </div>
                  <div className={styles.char} >
                    A
                  </div>
                  <div className={styles.char} >
                    L
                  </div>
                  <div className={styles.char} >
                    E
                  </div>
                  <div className={styles.char} >
                    N
                  </div>
                  <div className={styles.char} >
                    T
                  </div>
                  <div className={styles.char} >
                    E
                  </div>
                  <div className={styles.char} >
                    D
                  </div>

                </div>

              </span>

            </div>
          </h1>
          <h1 className='whitespace-nowrap uppercase flex text-center items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-primary disciplinary' >
            <div className={styles.line1} >
              <div className={styles.word1} >
                <div className={styles.char1} >
                  T

                </div>
                <div className={styles.char1} >
                  R

                </div>
                <div className={styles.char1} >
                  E

                </div>
                <div className={styles.char1} >
                  N

                </div>
                <div className={styles.char1} >
                  D

                </div>
                <div className={styles.char1} >
                  S

                </div>
                <div className={styles.char1} >
                  E

                </div>
                <div className={styles.char1} >
                  T

                </div>
                <div className={styles.char1} >
                  T

                </div>
                <div className={styles.char1} >
                  E

                </div>
                <div className={styles.char1} >
                  R

                </div>

              </div>

            </div>
          </h1>
          <h1 className='text-primary relative sm:left-[22%] w-fit xl:flex xl:flex-row xl:items-center' >
            <span className='sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-primary developer' >
              <div className={styles.line} >
                <div className={styles.word} >
                  <div className={styles.char} >
                    D

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    V

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    L

                  </div>
                  <div className={styles.char} >
                    O

                  </div>
                  <div className={styles.char} >
                    P

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    R

                  </div>

                </div>

              </div>

            </span>
            <span className='text-[15px] font-NeueMontreal-Medium uppercase ml-[27px] xl:block hidden gooddesign' >
              <div className={styles.line2} >
                <div className={styles.word2} >
                  IF

                </div>
                <div className={styles.word2} >
                  THE

                </div>
                <div className={styles.word2} >
                  PAY

                </div>
                <div className={styles.word2} >
                  IS

                </div>
                <div className={styles.word2} >
                  HONEST

                </div>

              </div>

            </span>

          </h1>
        </div>


      </motion.div>

      <div className={styles.landing_body}>
        <div className='relative' >
          <p className='text-[13px] w-fit font-NeueMontreal-Bold tracking-[3px] uppercase relative md:left-[152px] px-5 lg:px-[70px] sm:px-[45px] self-center md:self-auto text-neutral' >
            NG

          </p>
          <h1 className='flex items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-neutral sm:relative sm:left-[18%]' >
            <div className={styles.line} >
              <span className={styles.marquee} >
                <div className={styles.word} >
                  <div className={styles.char} >
                    S

                  </div>
                  <div className={styles.char} >
                    K

                  </div>
                  <div className={styles.char} >
                    I

                  </div>
                  <div className={styles.char} >
                    L

                  </div>
                  <div className={styles.char} >
                    L

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    D

                  </div>


                </div>

              </span>

            </div>

          </h1>

          <h1 className='whitespace-nowrap flex text-center items-center sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-neutral disciplinary' >
            <div className={styles.line1} >
              <div className={styles.word1} >
                <div className={styles.char1} >
                  I

                </div>
                <div className={styles.char1} >
                  N

                </div>

                <div className={styles.char1} >
                  N

                </div>

                <div className={styles.char1} >
                  O

                </div>

                <div className={styles.char1} >
                  V

                </div>

                <div className={styles.char1} >
                  A

                </div>

                <div className={styles.char1} >
                  T

                </div>

                <div className={styles.char1} >
                  O

                </div>

                <div className={styles.char1} >
                  R

                </div>

                


              </div>

            </div>

          </h1>

          <h1 className='text-neutral relative sm:left-[18%] w-fit xl:flex xl:flex-row xl:items-center' >
            <span className='sm:font-NeueMontreal-Bold font-NeueMontreal-Medium xl:text-[120px] w-fit lg:text-[90px] sm:text-[80px] xs:text-[56px] text-[45px] xl:leading-[100px] lg:leading-[90px] xs:leading-[49px] sm:leading-[72px] text-neutral developer' >
              <div className={styles.line} >
                <div className={styles.word} >
                  <div className={styles.char} >
                    D

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    V

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    L

                  </div>
                  <div className={styles.char} >
                    O

                  </div>
                  <div className={styles.char} >
                    P

                  </div>
                  <div className={styles.char} >
                    E

                  </div>
                  <div className={styles.char} >
                    R

                  </div>

                </div>

              </div>


            </span>
            

            <span className='text-[15px] font-NeueMontreal-Medium uppercase ml-[27px] xl:block hidden gooddesign' >
              <div className={styles.line2} >
                <div className={styles.word2} >
                  GOOD

                </div>
                
                <div className={styles.word2} >
                  DESIGN

                </div>
                <div className={styles.word2} >
                  IS

                </div>
                <div className={styles.word2} >
                  HONEST

                </div>

              </div>

            </span>

          </h1>

        </div>
      </div>
      

           </div>
    </main>
  )
}