import React, { ReactNode } from 'react'

type Props = {children:ReactNode,
    
}

const Container = ({children}: Props) => {
  return (
    <section className='max-w-[1200px] mx-auto px-4'>
        {children}
    </section>
  )
}

export default Container