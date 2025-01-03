import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF , useScroll } from '@react-three/drei';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';


export function Octopus(props) {
  const { nodes, materials } = useGLTF('/models/purple.glb'); // Fix path (don't use `/public` directly)

  const octopus = useRef();
  const scroll = useScroll();
  const tl = useRef()


  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({defaults: {duration: 2, ease: 'power1.inOut'}})

    tl.current
    .to(octopus.current.rotation, {y: -1}, 2)
    .to(octopus.current.position, {x: 1}, 2)

    .to(octopus.current.rotation, {y: 1}, 6)   
    .to(octopus.current.position, {x: -1}, 6)

    .to(octopus.current.rotation, {y: 0}, 11)
    .to(octopus.current.rotation, {x: 1}, 11)
    .to(octopus.current.position, {x: 0}, 11)

    .to(octopus.current.rotation, {y: 0}, 13)
    .to(octopus.current.rotation, {x: -1}, 13)    
    .to(octopus.current.position, {x: 0}, 13)

    .to(octopus.current.rotation, {y: 0}, 16)   
    .to(octopus.current.rotation, {x: 0}, 16) 
    .to(octopus.current.position, {x: 0}, 16)    

    .to(octopus.current.rotation, {y: 0}, 20)   
    .to(octopus.current.rotation, {x: 0}, 20) 
    .to(octopus.current.position, {x: 0}, 20)  
  }, [])

  return (
    <group {...props} dispose={null} ref={octopus} >
      
      {/* First Octopus Mesh (Light Purple for main body) */}
      <mesh geometry={nodes.Pulpo_LowPoly_Default_Material_0.geometry} material={materials.Default_Material} scale={0.2} castShadow>
        <meshPhysicalMaterial
          color="#7F3FBF"  // Light Purple Color
          roughness={0.4}   // Slightly rough for a natural look
          metalness={0.1}   // Low metalness since octopus skin is non-metallic
          clearcoat={0.5}   // Slight shiny effect to simulate skin texture
          reflectivity={0.2} // Light reflection
          iridescence={0.4}  // Slight iridescence for a shiny, natural look
          iridescenceIOR={1.3} // Index of refraction for iridescence
          iridescenceThicknessRange={[50, 500]}  // Range for iridescence thickness
        />
      </mesh>

      {/* Second Octopus Mesh (Dark Purple for suckers or accent areas) */}
      <mesh geometry={nodes.Pulpo_LowPoly_Default_Material_0.geometry} material={materials.Default_Material} scale={0.2} castShadow>
        <meshPhysicalMaterial
          color="#4C2A8D"  // Dark Purple for contrast
          roughness={0.5}   // Slightly rough texture for suckers
          emissive="#3F1F7F" // Light emissive glow for some parts
          emissiveIntensity={0.1} // Subtle glow for the suckers or parts of the body
          clearcoat={0.3}   // A little shine to reflect light
          reflectivity={0.15}  // Low reflectivity for organic material
          metalness={0.05}   // Very low metalness for the non-metallic body
          iridescence={0.3}  // Slight iridescence on certain areas for natural look
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[100, 1000]} 
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/models/purple.glb'); // Ensure correct path to model
