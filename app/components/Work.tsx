"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Work(){

    const works = [
        {
            logo: '/sds-logo.webp',
            name: 'SDS - Start Dev Server',
            desc: '• Runs your project server in a click and re-direct you to browser.',
            why: 'Why: Running server manually daily multiple times is so beginner level stuff to me.',
            link: 'https://open-vsx.org/extension/ShaniTiwari/sds-StartDevServer',
            install: '3.5k+'
        },
        {
            logo: '/pkg-logo.png',
            name: 'Pkg-Installer',
            desc: '• Install Packages in one click inside VS Code Sidebar.',
            why: 'Why: Search-copy-paste is too boring and cmd got wrong sometimes.',
            link: 'https://open-vsx.org/extension/ShaniTiwari/pkg-installer',
            install: '850+'
        },
    ];

    return (
        <section className='mt-4 flex flex-col gap-4'>

            <div className="contant">
                <p className='text-2xl tracking-tight leading-5'>Recent Works...</p>
            </div>

            {/* extension  */}
            <fieldset className='border p-1 md:p-2 rounded-lg border-gray-400'>
                <legend className='text-xs'>IDE Extentions</legend>
                <div className="works flex flex-col md:flex-row justify-center gap-4 -mt-1">
                    {
                        works.map((work,i) => (
                            <div key={i} className='flex flex-1 flex-col gap-2 bg-gray-50 rounded-xl p-4 md:text-balance border border-gray-200'>
                                <div className="top flex gap-4 items-center">
                                    <Image className='object-cover rounded-lg bg-black/80 border-2 max-h-12' src={`${work.logo}`} width='40' height='40' alt={`${work.name} logo`} />
                                    <p className='text-lg'>{work.name}</p>
                                </div>
                                <div className="bottom flex flex-col gap-2">
                                    <p className='text-base text-black/80 mb-2 leading-5'>{work.desc}</p>
                                    <p className='text-sm text-black/60 leading-5'>{work.why}</p>
                                    <div className="info flex items-center justify-between">
                                        <p className='w-fit text-xs leading-3 px-3 py-1 bg-black/10 rounded-full border border-stone-400'>{work.install} installs</p> 
                                        <Link className='text-xs' href={work.link}> Marketplace</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </fieldset>

            {/* sites  */}
            <fieldset className='border p-1 md:p-2 rounded-lg border-gray-400'>
                <legend className='text-xs'>Site Recreations</legend>
                
                <div className="content flex flex-col md:flex-row gap-4 -mt-1">
                    <div className='w-full h-54 rounded-xl overflow-hidden relative border border-gray-400'>
                        <Link href='https://plas-sandy.vercel.app/'>
                            <Image className='object-cover' src='/lpas.png' fill sizes='auto' alt=''/>
                        </Link>
                    </div>

                    <div className='w-full h-54 rounded-xl overflow-hidden relative border border-gray-400'>
                        <Link href='https://plas-sandy.vercel.app/' >
                            <Image className='object-cover' src='/neu.png' fill sizes='auto' alt=''/>
                        </Link>
                    </div>
                </div>

            </fieldset>

        </section>
    )
}