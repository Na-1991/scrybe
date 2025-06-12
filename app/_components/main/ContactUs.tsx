import { cn } from '@/lib/utils'
import React from 'react'
import Heading from '../Heading'

type Props = {className?:string}

const ContactUs = ({className}: Props) => {
  return (
    <div className={cn(className,'min-h-[300px]')}>
           <Heading title='Contact Us'/>
           <section className="max-w-6xl mx-auto   py-20">
   

   
    

        {/* Contact Info (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-700 gap-12">
          <div>
            <h4 className="font-bold mb-1">Email</h4>
            <p>hello@yourcompany.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-1">Phone</h4>
            <p>+*** ** *** ****</p>
          </div>
          <div>
            <h4 className="font-bold mb-1">Address</h4>
            <p>Office ***, Downtown Street<br />Dubai, UAE</p>
          </div>
        </div>
   
    </section>
    </div>
  )
}

export default ContactUs