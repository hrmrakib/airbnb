"use client";

import { TbBeach } from 'react-icons/tb'
import Container from '../Container'
import { GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from './CategoryBox';
import { useSearchParams, usePathname } from 'next/navigation';

export const categories = [
    {  
        label: "Beach",
        icon: TbBeach,
        description: "The property is close to the beach!"
    },
    {
        label: "Windmils",
        icon: GiWindmill,
        description: "This property has windmills"
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "This property is modern!"
    } 
]

const Categories = () => {
    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()
  return (
    <Container>
        <div className="pt-14 flex flex-row items-center justify-between overflow-x-auto">
            {categories.map((category)=> (
                <CategoryBox 
                    key={category.label}
                    label={category.label}
                    icon={category.icon}
                />
            ))}
        </div>
    </Container>
  )
}

export default Categories