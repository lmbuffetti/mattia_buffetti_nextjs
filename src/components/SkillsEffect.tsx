'use client'

import { type CSSProperties, useEffect } from 'react'

declare let TagCanvas: any

const CANVAS_ID = 'skillsCanvas'
const TAG_LIST_ID = 'skillsTags'
const skillsList = [
  'css.png',
  'docker.png',
  'figma.png',
  'git.png',
  'html5.png',
  'javascript.png',
  'mongo.png',
  'nextjs.png',
  'node.png',
  'react.png',
  'talwind.png',
  'typescript.png',
]

const LOGO_SIZE = 80

const hiddenTagStyles: CSSProperties = {
  position: 'absolute',
  width: LOGO_SIZE,
  height: LOGO_SIZE,
  overflow: 'hidden',
  opacity: 1,
  pointerEvents: 'none',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  whiteSpace: 'nowrap',
}

const SkillsEffect = () => {
  useEffect(() => {
    let startTimer: ReturnType<typeof setInterval> | null = null
    let started = false

    const imagesReady = () => {
      if (!('document' in globalThis)) return false
      const images = Array.from(
        (globalThis.document).querySelectorAll<HTMLImageElement>(`#${TAG_LIST_ID} img`),
      )
      if (!images.length) {
        return false
      }
      return images.every((img) => img.complete && img.naturalWidth > 0 && img.naturalHeight > 0)
    }

    const startTagCanvas = () => {
      if (started) return started
      if (!imagesReady()) return false
      const instance = ('TagCanvas' in globalThis
        ? (globalThis as typeof globalThis & { TagCanvas?: typeof TagCanvas }).TagCanvas
        : TagCanvas)
      if (!instance) return false

      const options = {
        wheelZoom: false,
        textColour: 'white',
        textHeight: 26,
        outlineMethod: 'size',
        outlineIncrease: 10,
        maxSpeed: 0.01,
        minBrightness: 0.2,
        depth: 0.92,
        pulsateTo: 0.6,
        initial: [0.1, -0.1],
        decel: 0.98,
        reverse: true,
        hideTags: false,
        shadow: true,
        shadowBlur: 3,
        weight: false,
        imageScale: LOGO_SIZE / 100,
        imagePadding: 12,
        fadeIn: 1000,
        clickToFront: 600,
        keep: false,
        imageMode: 'both',
        shuffleTags: true,
      }

      try {
        instance.Start(CANVAS_ID, TAG_LIST_ID, options)
        started = true
      } catch (error) {
        console.error('TagCanvas failed to start', error)
      }

      return started
    }

    if (!startTagCanvas()) {
      startTimer = setInterval(() => {
        if (startTagCanvas() && startTimer) {
          clearInterval(startTimer)
          startTimer = null
        }
      }, 150)
    }

    return () => {
      if (startTimer) {
        clearInterval(startTimer)
      }
      const tagCanvasInstance = ('TagCanvas' in globalThis
        ? (globalThis as typeof globalThis & { TagCanvas?: typeof TagCanvas }).TagCanvas
        : TagCanvas)
      if (tagCanvasInstance?.Delete) {
        try {
          tagCanvasInstance.Delete(CANVAS_ID)
        } catch (error) {
          console.warn('Unable to cleanup TagCanvas', error)
        }
      }
    }
  }, [])

  return (
    <div className="relative" id="myCanvasContainer">
      <div className="absolute left-0 top-0 z-10 size-full" id="canvasImg" />
      <canvas
        width={500}
        height={500}
        id={CANVAS_ID}
        style={{ maxWidth: '100%' }}
      />

      <ul
        id={TAG_LIST_ID}
        aria-hidden="true"
        style={hiddenTagStyles}
      >
        {skillsList.map((skill) => {
          const skillLabel = skill.replace('.png', '')
          return (
            <li key={skill}>
              <a
                href={`#${CANVAS_ID}`}
                aria-label={skillLabel}
              >
                <span className="sr-only">{skillLabel}</span>
                <img
                  src={`/images/logos/${skill}`}
                  alt={skillLabel}
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  loading="eager"
                  decoding="async"
                  style={{ display: 'block', objectFit: 'contain' }}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SkillsEffect
