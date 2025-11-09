'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.01)

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)

    // Canvas styling
    renderer.domElement.style.position = 'fixed'
    renderer.domElement.style.top = '0'
    renderer.domElement.style.left = '0'
    renderer.domElement.style.zIndex = '-1'
    renderer.domElement.style.pointerEvents = 'none'

    // Larger space for scattering
    const boundsX = 80
    const boundsY = 55
    const boundsZ = 40

    const shapes: THREE.Mesh[] = []

    const geometryTypes = [
      new THREE.BoxGeometry(1.5, 1.5, 1.5),
      new THREE.CylinderGeometry(1, 1, 2, 8),
      new THREE.OctahedronGeometry(1),
      new THREE.TetrahedronGeometry(1.2),
      new THREE.IcosahedronGeometry(1)
    ]

    const colors = [
      0x8B5CF6, 0x6366F1, 0xEC4899, 0x3B82F6,
      0x10B981, 0xF59E0B, 0xEF4444, 0x06B6D4
    ]

    function getRandomPosition(existingShapes: THREE.Mesh[], minDistance = 10) {
      let position = new THREE.Vector3()
      let safe = false
      let attempts = 0
      while (!safe && attempts < 100) {
        position.set(
          (Math.random() - 0.5) * 2 * boundsX,
          (Math.random() - 0.5) * 2 * boundsY,
          (Math.random() - 0.5) * 2 * boundsZ
        )
        safe = existingShapes.every(shape => position.distanceTo(shape.position) > minDistance)
        attempts++
      }
      return position
    }

    // Create 25 colorful, scattered, solid shapes (increased size by 200%)
    for (let i = 0; i < 25; i++) {
      const geometry = geometryTypes[Math.floor(Math.random() * geometryTypes.length)]
      const material = new THREE.MeshPhongMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: Math.random() * 0.15 + 0.35, // decreased visibility
        shininess: 100,
        specular: new THREE.Color(0xffffff),
        wireframe: false
      })

      const shape = new THREE.Mesh(geometry, material)
      const pos = getRandomPosition(shapes, 25)
      shape.position.copy(pos)

      shape.rotation.x = Math.random() * Math.PI * 2
      shape.rotation.y = Math.random() * Math.PI * 2
      shape.rotation.z = Math.random() * Math.PI * 2

      // Increased shape size by 200%
      const scale = Math.random() * 3 + 7
      shape.scale.set(scale, scale, scale)

      ;(shape as any).velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.006
      )
      ;(shape as any).rotationSpeed = new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      )
      ;(shape as any).pulseSpeed = Math.random() * 0.002 + 0.001
      ;(shape as any).pulseOffset = Math.random() * Math.PI * 2

      shapes.push(shape)
      scene.add(shape)
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8)
    directionalLight.position.set(3, 4, 2)
    scene.add(directionalLight)

    const pointLight1 = new THREE.PointLight(0x8B5CF6, 1.2, 100)
    pointLight1.position.set(20, 10, 15)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xEC4899, 0.9, 100)
    pointLight2.position.set(-25, -10, -20)
    scene.add(pointLight2)

    camera.position.z = 45

    const animate = () => {
      const time = Date.now() * 0.001

      shapes.forEach(shape => {
        shape.position.add((shape as any).velocity)
        shape.rotation.x += (shape as any).rotationSpeed.x
        shape.rotation.y += (shape as any).rotationSpeed.y
        shape.rotation.z += (shape as any).rotationSpeed.z

        const pulse = Math.sin(time * (shape as any).pulseSpeed + (shape as any).pulseOffset) * 0.1 + 1
        shape.scale.setScalar(pulse)

        if (Math.abs(shape.position.x) > boundsX) (shape as any).velocity.x *= -1
        if (Math.abs(shape.position.y) > boundsY) (shape as any).velocity.y *= -1
        if (Math.abs(shape.position.z) > boundsZ) (shape as any).velocity.z *= -1

        shape.position.y += Math.sin(time * 0.25 + shape.position.x * 0.1) * 0.003
        shape.position.x += Math.cos(time * 0.15 + shape.position.y * 0.1) * 0.002
      })

      camera.position.x = Math.sin(time * 0.08) * 7
      camera.position.y = Math.cos(time * 0.06) * 6
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 -z-10" />
}
