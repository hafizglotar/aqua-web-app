import React from 'react'
import EmailArrowIcon from './icons/EmailArrowIcon'
import SubscriptionForm from './SubscriptionForm'

const NewsletterSubs = () => {
    return (
        <div className='aquaGradient rounded-2xl px-8 py-5 flex items-center justify-between gap-2'>
            <div className="flex items-center gap-5 w-7/12">
                <div>
                    <EmailArrowIcon 
                        svgWidth={50}
                        svgHeight={50}
                        svgColor="#fff"
                    />
                </div>
                <h2 className='text-2xl text-white'>Subscribe to our Newsletter</h2>
            </div>
            <div className="w-5/12">
                <SubscriptionForm />
            </div>
        </div>
    )
}

export default NewsletterSubs