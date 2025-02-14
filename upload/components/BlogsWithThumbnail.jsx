import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const BlogsWithThumbnail = () => {
    return (
        <div>
            <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg overflow-hidden w-4/12">
                    <Image 
                        src="/images/blog-1.webp" 
                        alt="blog-1.webp" 
                        width={300} 
                        height={300}
                    />
                </div>
                <div className='w-8/12 text-sm'>
                    <h3 className='font-semibold mb-2'>Port de La Mer: Mediterranean Inspired Seaside Living in Dubai</h3>
                    <Link 
                        className='blueColor'
                        href="#">Read more
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg overflow-hidden w-4/12">
                    <Image 
                        src="/images/blog-1.webp" 
                        alt="blog-1.webp" 
                        width={300} 
                        height={300}
                    />
                </div>
                <div className='w-8/12 text-sm'>
                    <h3 className='font-semibold mb-2'>Port de La Mer: Mediterranean Inspired Seaside Living in Dubai</h3>
                    <Link 
                        className='blueColor'
                        href="#">Read more
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-4">
                <div className="rounded-lg overflow-hidden w-4/12">
                    <Image 
                        src="/images/blog-1.webp" 
                        alt="blog-1.webp" 
                        width={300} 
                        height={300}
                    />
                </div>
                <div className='w-8/12 text-sm'>
                    <h3 className='font-semibold mb-2'>Port de La Mer: Mediterranean Inspired Seaside Living in Dubai</h3>
                    <Link 
                        className='blueColor'
                        href="#">Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogsWithThumbnail