import { useGLTF } from '@react-three/drei'

const Model = () => {
  const model = useGLTF('/models/retro_computer.glb')

  return (
    <primitive
      object={model.scene}
      scale={0.04}
    />
  )
}

export default Model
