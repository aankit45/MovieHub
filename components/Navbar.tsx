import Link from "next/link";
import Image from "next/image";
import CustomButton from './CustomButton';

function Navbar() {
  return (
    <div>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href="/" className="flex justify-center items-center">
            <Image 
            src='/movie-logo.svg' 
            alt="Movie Hub Logo" 
            height={18} 
            width={48} 
            className="object-contain"/>
          </Link>
          <CustomButton 
            title='Sign In'
            btntype='button'
            containerStyles="bg-primary-blue rounded-full text-white min-w-[130px]"
          />
        </nav>
      </header>
    </div>
  )
}

export default Navbar