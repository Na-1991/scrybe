import Image from 'next/image'
import ImageComponent from '../ImageComponent'
import Link from 'next/link'

type Service = {
  id: number
  slug:string
  title: string
  description: string
  image: string
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition-all">
      <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl flex items-center justify-center">
        <ImageComponent
          src={service.image}
          alt={service.title}
          aspect='video'
          className='h-full  '
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
      <Link className='mt-8 p-4 cursor-pointer text-center block bg-indigo-500 text-white rounded-lg' href={`/services/${service.slug}`}>See More</Link>
    
    </div>
  )
}
