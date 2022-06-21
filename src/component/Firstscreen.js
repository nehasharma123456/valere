import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from 'three'

function Dots() {
  const ref = useRef()
  const { vec, transform, positions } = useMemo(() => {
    const vec = new THREE.Vector3()
    const transform = new THREE.Matrix4()
    const positions = [...Array(10000)].map((_, i) => {
      const position = new THREE.Vector3()
      // Place in a grid
      position.x = (i % 100) - 50
      position.y = Math.floor(i / 100) - 50

      // Offset every other column (hexagonal pattern)
      position.y += (i % 2) * 0.5

      // Add some noise
      position.x += Math.random() * 0.3
      position.y += Math.random() * 0.3
      return position
    })
    return { vec, transform, positions }
  }, [])
  useFrame(({ clock }) => {
    const scale = 3 + Math.sin(clock.elapsedTime) * 0.3
    for (let i = 0; i < 10000; ++i) {
      vec.copy(positions[i]).multiplyScalar(scale)
      transform.setPosition(vec)
      ref.current.setMatrixAt(i, transform)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })
  return (
    <instancedMesh ref={ref} args={[null, null, 10000]}>
      <circleBufferGeometry args={[0.15]} />
      <meshBasicMaterial />
    </instancedMesh>
  )
}

export default function Firstscreen() {
  return (
      <div>
     
    <Canvas orthographic camera={{ zoom: 5 }} colormanagement="false" style={{height:'100vh' ,width:"100vw"}}>
      <color attach="background" args={['#002147']} />
      
      <Dots />
    </Canvas>
    <h1 className='first-heading'> WE BUILD APPS THAT BEND THE UNIVERSE</h1>
    </div>
  )
}
