import { cn } from '@/lib/utils'
import React from 'react'
import Heading from '../Heading'

type Props = {className?:string}

const MainSection = ({className}: Props) => {
  return (
    <div className={cn(className,'min-h-screen')}>
        <Heading title='Main Section'/>
    </div>
  )
}

export default MainSection