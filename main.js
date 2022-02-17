import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
import { Camera } from 'three'
import { Scene } from 'three'

const ratio = innerWidth / innerHeight
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, ratio, 0.1, 100)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(ratio)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)

const box = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color : 0x000 })
const mesh = new THREE.Mesh(box, material)

scene.add(mesh)


camera.position.x = 2
camera.position.y = 3
camera.position.z = 5

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()