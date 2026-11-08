import Link from 'next/link';


export default function Footer(){
    return (
        <footer className=' flex flex-col md:flex-row items-center justify-around gap-4 py-1 px-4 opacity-80 text-sm '>
            <div className='w-full flex justify-around'>
                <Link target='_blank' href='https://github.com/shani-tiwari/'>Github</Link>
                <Link target='_blank' href='https://linkedin.com/in/shani-tiwarii'>Linkedin</Link>
            </div>
            <div  className='w-full flex justify-around'>
                <Link target='_blank' href='https://instagram.com/shani.develops'>Instagram</Link>
                <Link target='_blank' href='https://x.com/shanidevelops'>Twitter</Link>
            </div>
        </footer>
    )
};