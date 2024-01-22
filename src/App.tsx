
import './App.css'
import Navbar from '@components/Navbar'
import { Card,CardContent,CardFooter,CardHeader } from '@components/shadcn/ui/card'

function App() {

  return (
    <>
      <div className=' xl:w-lvw'>
        <div className='pb-16'>
          <Navbar />
        </div>

        <div>
          <h1 className='text-5xl text-center font-bold mt-8'>Can't Play Tarkov?</h1>
        </div>
        
        
        <div className='flex flex-col xl:flex-row items-center justify-center transition-all'>
          <Card className='flex flex-col items-center my-8 xl:mx-16 w-80 h-80 hover:-translate-y-5 transition-all'>
            <CardHeader className='flex flex-col items-center justify-center pb-0'>
              <h1>At Work?</h1>                
            </CardHeader>
            <CardContent className='bg-work bg-cover bg-center flex-grow w-full p-0' />
            <CardFooter className='flex flex-col items-center justify-center pt-0' />
          </Card>

          <Card className='flex flex-col items-center my-8 xl:mx-16 w-80 h-80 hover:-translate-y-5 transition-all'>
            <CardHeader className='flex flex-col items-center justify-center pb-0'>
              <h1>Pooping?</h1>                
            </CardHeader>
            <CardContent className='bg-bored bg-cover bg-top flex-grow w-full p-0' />
            <CardFooter className='flex flex-col items-center justify-center pt-0' />
          </Card>

          <Card className='flex flex-col items-center my-8 xl:mx-16 w-80 h-80 hover:-translate-y-5 transition-all'>
            <CardHeader className='flex flex-col items-center justify-center pb-0'>
              <h2>Between Raids?</h2>
            </CardHeader>
            <CardContent className='bg-server bg-cover bg-center flex-grow w-full p-0' />
            <CardFooter className='flex flex-col items-center justify-center pt-0' /> 
            
          </Card>

        </div>

        <div className='container max-w-screen-md mb-8'>
          <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
            What is it?
          </h2>
          <p className=' text-2xl'>EFT Raid-Runner will be a way to experience those 
            common Tarkov encounters with a choose-your-own-adventure style raid system!
          </p>
        </div>

        <div className='flex flex-col xl:flex-row items-center justify-center transition-all'>
          <Card className='flex flex-col items-center my-8 xl:mx-16 w-80 h-80 hover:-translate-y-5 transition-all'>
            <CardHeader className='flex flex-col items-center justify-center pb-0'>
              <h1>Choose Gear</h1>                
            </CardHeader>
            <CardContent className='bg-gear bg-cover bg-top flex-grow w-full p-0' />
            <CardFooter className='flex flex-col items-center justify-center pt-0' />
          </Card>

          <Card className='flex flex-col items-center my-8 xl:mx-16 w-80 h-80 hover:-translate-y-5 transition-all'>
            <CardHeader className='flex flex-col items-center justify-center pb-0'>
              <h1>Make Choices</h1>                
            </CardHeader>
            <CardContent className='bg-planning bg-cover bg-top flex-grow w-full p-0' />
            <CardFooter className='flex flex-col items-center justify-center pt-0' />
          </Card>

          <Card className='flex flex-col items-center my-8 xl:mx-16 w-80 h-80 hover:-translate-y-5 transition-all'>
            <CardHeader className='flex flex-col items-center justify-center pb-0'>
              <h2>Don't get clapped</h2>
            </CardHeader>
            <CardContent className='bg-clapped bg-cover bg-top flex-grow w-full p-0' />
            <CardFooter className='flex flex-col items-center justify-center pt-0' /> 
            
          </Card>

        </div>
        
      </div>
    </>
  )
}

export default App
