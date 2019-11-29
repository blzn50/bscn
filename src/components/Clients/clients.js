import React, { useState } from "react"
import Img from "gatsby-image"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"
import clientMod from "./clients.module.css"

const Clients = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src.src}
        style={{ position: "relative" }}
        className="mb-5"
      >
        <Img
          className={clientMod.clientImgCont}
          fluid={item.src}
          alt={item.altText}
        />
        <div className={clientMod.clientProfile}>
          <h1>{item.name}</h1>
          <h4>{item.address}</h4>
          <p>{item.saying}</p>
        </div>
      </CarouselItem>
    )
  })
  return (
    <div className={clientMod.clients}>
      <h1 className="text-center py-5">Our happy clients</h1>
      <div className={clientMod.carousel}>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          <CarouselIndicators
            className="mt-5"
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </div>
  )
}

export default Clients
