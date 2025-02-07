import Image from 'next/image'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-4'>
      <Image src={'/logo.svg'} alt='logo' width={200} height={200} />
    </div>
  )
}

export default Home