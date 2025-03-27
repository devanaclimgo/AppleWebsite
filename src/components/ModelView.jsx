import React from 'react'
import { PerspectiveCamera, View } from '@react-three/drei'

import Lights from './Lights'
import IPhone from './IPhone'
import { Suspense } from 'react'

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${index === 2} ? 'right-[-100%] : ''`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`} position={[0, 0, 0]}>
        <Suspense fallback={<Html><div>Loading</div></Html>}>
          <IPhone />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView