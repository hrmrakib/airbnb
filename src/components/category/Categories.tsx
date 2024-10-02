"use client";

import { categories } from '@/constants';
import Container from '../Container'
import CategoryBox from './CategoryBox';
import { useSearchParams, usePathname } from 'next/navigation';



const Categories = () => {
    const params = useSearchParams()
    const categoryParam = params?.get('category')
    const pathname = usePathname()
    const isHomePage = pathname === '/';

    if(!isHomePage) {
        return null;
    }

  return (
    <Container>
        <div className="pt-14 flex flex-row items-center justify-between overflow-x-auto">
            {categories?.map((category)=> (
                <CategoryBox 
                    key={category.label}
                    label={category.label}
                    icon={category.icon}
                    selected={categoryParam === category.label}
                />
            ))}
        </div>
    </Container>
  )
}

export default Categories