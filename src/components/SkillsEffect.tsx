'use client'

import Image from 'next/image'
import { useEffect } from 'react'
declare let TagCanvas: any

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

const SkillsEffect = () => {
  useEffect(() => {
    if (typeof TagCanvas !== 'undefined') {
      TagCanvas.wheelZoom = false
      TagCanvas.textColour = 'white'
      TagCanvas.textHeight = 26
      TagCanvas.outlineMethod = 'size'
      TagCanvas.outlineIncrease = 10
      TagCanvas.maxSpeed = 0.01
      TagCanvas.minBrightness = 0.2
      TagCanvas.depth = 0.92
      TagCanvas.pulsateTo = 0.6
      TagCanvas.initial = [0.1, -0.1]
      TagCanvas.decel = 0.98
      TagCanvas.reverse = true
      TagCanvas.hideTags = false
      TagCanvas.shadow = true
      TagCanvas.shadowBlur = 3
      TagCanvas.weight = false
      TagCanvas.imageScale = null
      TagCanvas.fadeIn = 1000
      TagCanvas.clickToFront = 600
      TagCanvas.width = window.innerWidth
      TagCanvas.height = window.innerHeight
      TagCanvas.keep = false
      TagCanvas.initSpeed = 'fast'

      try {
        TagCanvas.Start('myCanvas', 'tags')
      } catch (e) {
        console.error('Canvas error.')
        console.error(e)
      }
    }
  }, [typeof TagCanvas !== 'undefined'])

  return (
    <div id="myCanvasContainer relative">
      <div className="absolute left-0 top-0 z-10 size-full" />
      <canvas
        width="500"
        height="500"
        id="myCanvas"
        style={{ maxWidth: '100%' }}
      >
        <ul id="tags">
          {skillsList.map((skill, index) => (
            <li key={`skill${index.toString()}`}>
              <a>
                <Image
                  src={`/images/logos/${skill}`}
                  alt={skill}
                  width={30}
                  height={30}
                />
              </a>
            </li>
          ))}
        </ul>
      </canvas>

  <div>test</div>
    </div>
  )
}

export default SkillsEffect
