'use client'

import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import ScaleInScroll from '@/components/animations/collection/ScaleInScroll'
import { HighlightCard } from '@/components/common/HighlightCard'

type FeatureItem = {
  icon: React.ReactNode
  header?: string
  text: React.ReactNode
  href?: string
  color?: string
}

type FeatureCarouselProps = {
  features: FeatureItem[]
  className?: string
}

export function FeatureCarousel({ features, className = '' }: FeatureCarouselProps) {
  const [api, setApi] = React.useState<import('@/components/ui/carousel').CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(features.length > 1)

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
      setCanPrev(api.canScrollPrev())
      setCanNext(api.canScrollNext())
    }
    onSelect()
    api.on('select', onSelect)
    api.on('reInit', onSelect)
    return () => {
      api.off('select', onSelect)
      api.off('reInit', onSelect)
    }
  }, [api])

  return (
    <div className={className}>
      <div className="relative">
        {/* Gradient hints to indicate more content on the left/right */}
        {canPrev && (
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white/70 to-transparent" />
        )}
        {canNext && (
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/70 to-transparent" />
        )}

        <Carousel
          opts={{ align: 'start', loop: false, dragFree: false }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map((feature, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <ScaleInScroll delay={0} initialScale={0.9}>
                  <HighlightCard
                    href={feature.href}
                    icon={feature.icon}
                    header={feature.header}
                    text={feature.text}
                    iconStyle={{ color: feature.color }}
                    className=""
                  />
                </ScaleInScroll>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Dots indicator */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {features.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={
              'h-2 w-2 rounded-full transition-colors ' +
              (index === selectedIndex ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400')
            }
          />
        ))}
      </div>
    </div>
  )
}


