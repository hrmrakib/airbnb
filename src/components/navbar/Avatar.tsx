import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <Image 
        src={'/user.png'}
        className=''
        width={30} 
        height={30}
        alt='avatar'
    />
  )
}

export default Avatar;