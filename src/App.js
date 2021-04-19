import logo from './logo.svg';
import './App.css';
import Model from "./grandeDisco"
import {Canvas} from "@react-three/fiber"
import { Suspense } from 'react'
import { OrbitControls, Html, useProgress } from "@react-three/drei"


function Loader() {
  const { progress } = useProgress()
  return <Html center color="black">{progress} % loaded</Html>
}

function App() {
  return (
    <div className="App">
      
      <Canvas style={{height: 1000,}}>
      <ambientLight intensity={1} />
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} autoRotate={true}/>

    </Canvas>
    </div>
  );
}

export default App;
