import React from 'react'
import InnerPageBanner from '@/components/InnerPageBanner'

const page = () => {
    return (
        <div className="">
            <div className="listingHeader">
                <InnerPageBanner PageTitle="Search Here" />
            </div>
            <div className="max-w-7xl mx-auto py-10">
                <div className='formOuter w-[500px] mx-auto'>
                    <form method='post'>
                        <div className="flex gap-4 items-center">
                            <div className="">
                                <select className='border px-4 py-3 rounded-lg'>
                                    <option value="">Property For</option>
                                    <option value="sale">Sale</option>
                                    <option value="rent">Rent</option>
                                </select>
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    id="id"
                                    name="name"
                                    placeholder="Property Name"
                                    className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
                                />
                            </div>
                            <div className="">
                                <button type='submit' className='bg-gray-300 px-6 py-3 rounded-lg cursor-pointer'>Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page