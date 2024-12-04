'use client'

import { useEffect } from 'react'
declare let TagCanvas: any

const skillsList = [
  'HTML',
  'CSS',
  'React',
  'NextJs',
  'PHP',
  'MySql',
  'Node',
  'MongoDb',
  'Docker',
  'Javascript',
  'Git',
]

const SkillsEffect = () => {
  useEffect(() => {
    if (typeof TagCanvas !== 'undefined') {
      TagCanvas.wheelZoom = false
      TagCanvas.textColour = 'white'
      TagCanvas.textHeight = 26
      TagCanvas.outlineMethod = 'size'
      TagCanvas.outlineIncrease = 10
      TagCanvas.maxSpeed = 0.03
      TagCanvas.minBrightness = 0.2
      TagCanvas.depth = 0.92
      TagCanvas.pulsateTo = 0.6
      TagCanvas.initial = [0.1, -0.1]
      TagCanvas.decel = 0.98
      TagCanvas.reverse = true
      TagCanvas.hideTags = false
      TagCanvas.shadow = false
      TagCanvas.shadowBlur = 3
      TagCanvas.weight = false
      TagCanvas.imageScale = null
      TagCanvas.fadeIn = 1000
      TagCanvas.clickToFront = 600
      TagCanvas.width = window.innerWidth
      TagCanvas.height = window.innerHeight

      try {
        TagCanvas.Start('myCanvas', 'tags')
      } catch (e) {
        console.error('Canvas error.')
        console.error(e)
      }
    }
  }, [typeof TagCanvas !== 'undefined'])

  return (
    <div id="myCanvasContainer">
      <canvas
        width="500"
        height="500"
        id="myCanvas"
      >
        <ul id="tags">
          {skillsList.map((skill, index) => (
            <li key={`skill${index.toString()}`}>
              <a
                href="#"
                target="_blank"
              >
                {skill}
              </a>
            </li>
          ))}
        </ul>
      </canvas>
    </div>
  )
}

export default SkillsEffect
