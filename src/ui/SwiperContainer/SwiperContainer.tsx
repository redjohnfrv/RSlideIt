import React, {useCallback, useContext, useRef, useState} from 'react'
import styled from 'styled-components'

//** utils
import {Autoplay} from 'swiper'
import {ThemeContext} from '../../App'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.scss'
import {IPicture, IThemes} from '../../assets/interfaces'

//** components
import {Swiper as SwiperComponent, SwiperSlide} from 'swiper/react'
import {PlayPanel} from '../WatcherPanel'

/** slide swipe speed ms **/
export const defaultPlayingSpeed = 8000
export const fasterPlayingSpeed = 3000

interface Props {
  pics: IPicture[]
}

export const SwiperContainer = ({pics}: Props) => {

  const theme = useContext(ThemeContext)
  const playRef = useRef(null)

  const [playingSpeed, setPlayingSpeed] = useState<number>(defaultPlayingSpeed)
  const [isPlaying, setIsPlaying] = useState(false)


  const playHandler = useCallback(() => {
    isPlaying
      //@ts-ignore
      ? playRef.current.swiper.autoplay.stop()
      //@ts-ignore
      : playRef.current.swiper.autoplay.start()
    setIsPlaying(prev => !prev)
  }, [isPlaying])

  const speedHandler = () => {
    playingSpeed === defaultPlayingSpeed
      ? setPlayingSpeed(fasterPlayingSpeed)
      : setPlayingSpeed(defaultPlayingSpeed)
  }

  const returnToStart = () => {
    //@ts-ignore
    playRef.current.swiper.slideTo(0)
    setIsPlaying(false)
  }

  return (
    <Wrapper theme={theme.theme}>
      <PlayPanel
        playHandler={playHandler}
        isPlaying={isPlaying}
        speedHandler={speedHandler}
        playingSpeed={playingSpeed}
        returnToStart={returnToStart}
      />
      <SwiperComponent
        //@ts-ignore
        ref={playRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={isPlaying ? {
          delay: playingSpeed,
        } : false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {pics.map(pic => {
          return (
            <SwiperSlide key={pic.id}>
              <SlideContainer>
                <img src={pic.pic} alt={pic.id} />
              </SlideContainer>
            </SwiperSlide>
          )
        })}
      </SwiperComponent>
    </Wrapper>
  )
}

const Wrapper = styled.div<{theme: IThemes}>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 100vh;
  margin-bottom: 48px;
  
  @media screen and (orientation: portrait) and (max-width: 1024px) {
    height: 70vh;
    gap: 0;
  }
  
  & .swiper-slide {
    background: ${theme => theme.theme.background} !important;
  }
`
const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & img {
    width: auto;
    height: 100%;
    object-fit: contain;

    @media screen and (orientation: portrait) and (max-width: 1024px) {
      width: 100%;
      object-fit: scale-down;
    }
  }
`
