'use client'

import * as React from 'react'
import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type GalleryView = {
  id: string
  name: string
  icon: React.ReactNode
  title: string
  description: string
  imageUrl: string
}

type GalleryCarouselProps = {
  views: GalleryView[]
  eyebrow: string
  title: string
  description: string
  className?: string
}

export function GalleryCarousel({ views, eyebrow, title, description, className = '' }: GalleryCarouselProps) {
  const [api, setApi] = React.useState<import('@/components/ui/carousel').CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [canPrev, setCanPrev] = React.useState(false)
  const [canNext, setCanNext] = React.useState(views.length > 1)

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
    <section className={`bg-white py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-600">{eyebrow}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 bg-clip-text text-transparent drop-shadow-sm">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>

        <div className="relative mt-12">
          {canPrev && (
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white/80 to-transparent" />
          )}
          {canNext && (
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white/80 to-transparent" />
          )}
          <Carousel opts={{ align: 'start', loop: false }} setApi={setApi} className="w-full">
            <CarouselContent className="-ml-0">
              {views.map((view, index) => (
                <CarouselItem key={view.id} className="pl-0 basis-full sm:basis-full lg:basis-full flex-[0_0_100%] px-8">
                  <div className="mt-2">
                    <div className="relative aspect-[16/10] lg:w-4/5 sm:w-full md:w-full mx-auto rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200 max-h-[400px] sm:max-h-[240px] md:max-h-[300px] lg:max-h-[400px] xl:max-h-[400px]">
                      <Image
                        src={view.imageUrl}
                        alt={view.title}
                        fill
                        sizes="100vw"
                        quality={95}
                        priority={index === 0}
                        className="rounded-2xl object-cover object-top"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-200" />
                    </div>
                    <div className="mt-8 text-center max-w-3xl mx-auto">
                      <h3 className="text-xl font-bold tracking-tight text-gray-900">{view.title}</h3>
                      <p className="mt-2 text-lg text-gray-600">{view.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden z-50 md:flex left-0 bg-white/90 hover:bg-white border-gray-200 text-gray-600 hover:text-gray-900" />
            <CarouselNext className="hidden z-50 md:flex right-0 bg-white/90 hover:bg-white border-gray-200 text-gray-600 hover:text-gray-900" />
          </Carousel>

          {/* Dots indicator */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {views.map((_, index) => {
              const isActive = index === selectedIndex
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={isActive}
                  onClick={() => api?.scrollTo(index)}
                  className={
                    'h-2 rounded-full transition-all duration-300 ' +
                    (isActive
                      ? 'w-6 bg-gray-800'
                      : 'w-2 bg-gray-300 hover:bg-gray-400')
                  }
                />
              )})}
          </div>
        </div>
      </div>
    </section>
  )
}


