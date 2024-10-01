import Image from "next/image";

const Logo = () => {
  return (
    <Image 
        src={'/logo.png'}
        className="hidden md:block cursor-pointer"
        width={100}
        height={100}
        alt="logo"
    />
  )
}

export default Logo