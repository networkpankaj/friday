# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import { RoundedBox, Scroll, ScrollControls } from "@react-three/drei"
import { Octopus } from "./components/Octopus"
// import { useRef } from "react"
// import { useFrame } from "@react-three/fiber"

function App() {
  // const test = useRef()

  // useFrame((state, delta) => {
  //   // console.log(test)

  //   test.current.rotation.z += delta
  // })
  return (
    <>
    <color attach="background" args={['#333333']} />

    <ambientLight intensity={0.2} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
    {/* <ambientLight intensity={1} />
    <RoundedBox args={[1,1,1,]}
     radius={0.05}
      smoothness={4}
      ref={test}
    >
      <meshPhongMaterial color="red"  />
    </RoundedBox> */}

    <ScrollControls pages={3} damping={0.1} >
        <Scroll>
        {/* <RoundedBox args={[1,1,1,]}
           radius={0.05}
            smoothness={4} >
           <meshPhongMaterial color="#f3f3f3" wireframe />
        </RoundedBox> */}
        <Octopus />
          
        </Scroll>
        {/* <Scroll html>
           <h1>html in here (optional)</h1>
          <h1 style={{ position:'absolute' ,top: '100vh' }}>second page</h1>
          <h1 style={{position:'absolute' ,top: '200vh' }}>third page</h1> 
        </Scroll> */}
         <Scroll html style={{width: '100%'}}>
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>THINKING</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2>Thinking is the power of Future.</h2>
            <p style={{ maxWidth: '400px' }}>Thinking is the foundation of our experience, the silent engine driving every action, decision, and perspective. It is both a gift and a responsibility, for the way we think shapes not only our inner world but also the reality we interact with. Our thoughts have the power to create meaning, solve problems, and define our sense of self. However, the complexity of human thinking also means that it can trap us in cycles of over-analysis, doubt, or negativity.</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Thinking</h2>
              <p style={{ maxWidth: '440px' }}>To think deeply is to pause and question, to seek understanding beyond the surface, but to think wisely is to know when to let go and allow life to unfold. In a world filled with constant distractions, the ability to focus and guide our thinking is becoming more crucial than ever. It is through careful, deliberate thought that we can unlock our creativity, navigate challenges, and discover new ways of being. </p>                
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>              
          
          <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
        </Scroll>
    </ScrollControls>
    </>
  )
}

export default App
