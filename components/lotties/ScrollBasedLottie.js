import { useLottie, useLottieInteractivity } from 'lottie-react'


const ScrollBasedLottie = ({ animationData, className }) => {
  const options = {
    animationData,
    className
  }

  const lottieObj = useLottie(options)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: 'scroll',
    actions: [
      {
        visibility: [.1, .8],
        type: 'seek',
        frames: [0, 61]
      }
    ]
  })

  return Animation
}

export default ScrollBasedLottie
