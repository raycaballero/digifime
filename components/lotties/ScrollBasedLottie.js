import { useRef, useEffect } from 'react'
import Lottie, { useLottie, useLottieInteractivity } from 'lottie-react'

const ScrollBasedLottie = ({ animationData, className }) => {
  // const options = {
  //   animationData,
  //   className
  // }

  // const lottieObj = useLottie(options)
  // const Animation = useLottieInteractivity({
  //   lottieObj,
  //   mode: 'scroll',
  //   actions: [
  //     {
  //       visibility: [0.1, 0.8],
  //       type: 'seek',
  //       frames: [0, 61]
  //     }
  //   ]
  // })

  // return Animation
  const animationRef = useRef()

  const options = {
    loop: false,
    autoplay: true,
    animationData,
    className,
    lottieRef: animationRef
  }

  useEffect(() => {
    let dir = 1
    setInterval(function () {
      if (dir == 1) {
        dir = -1
      } else {
        dir = 1
      }
      animationRef?.current?.setDirection(dir)
      animationRef?.current?.play()
    }, 2500)
  }, [])

  return <Lottie {...options} />
}

export default ScrollBasedLottie
