import { cn } from '@/app/lib/utils'
import React from 'react'
import { footerData } from '@/data/footer/footer'
import Link from 'next/link'


function Information() {
const {information} = footerData
const { sectionsStyle:className } = footerData
  return (
    <div className='w-full '>
        <h1 className={ cn("text-center md:text-left",className[0].className )}>
            INFORMATION
        </h1>
        <div className=' px-4 flex flex-col items-center md:items-start  '>
            { 
              information.map((item) => (
                <Link href={item.href} key={item.id}>
                  <div className='md:text-base lg:text-[18px] font-semibold capitalize  leading-normal text-[#03523C]'>{item.label}</div>

                </Link>


              ))
            }
        </div>
    </div>
  )
}

export default Information