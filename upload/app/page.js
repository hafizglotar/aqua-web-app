'use client'
import GoogleReviews from "@/components/GoogleReviews";
import HomeBanner from "@/components/HomeBanner";
import LocationSliderIndex from "@/components/LocationSliderIndex";
import OffPlanHome from "@/components/OffPlanHome";
import PropertyTabs from "@/components/PropertyTabs";
import SelectionLocationIndex from "@/components/SelectionLocationIndex";
import ServiceBoxSlider from "@/components/ServiceBoxSlider";
import TheCommunityBox from "@/components/TheCommunityBox";

export default function Home() {
    return (
        <div className="homeOuter w-full">
            <HomeBanner />
            <div className="w-full max-w-7xl m-auto mt-24">
                <div className="homeContentTop">
                    <h2 className="text-[30px] font-semibold">Top Tiar</h2>
                    <h4 className="text-[20px] font-semibold mb-6">Real Estate Agency in Dubai</h4>
                    <p className="mb-10">Dubai's booming real estate market presents an excellent opportunity for individuals and investors to buy, sell, or rent properties. Established in 2005, AQUA Properties has earned prestigious awards for its innovative approach, becoming a trusted name in the industry. Our Dubai-based real estate company offers expert assistance for residential, commercial, and luxury properties. With over a decade of experience, our RERA-certified professionals prioritise personalised service, integrity, discretion, and effective communication. Whether you're searching for apartments, townhouses, or luxury villas, we streamline the process for buyers, sellers, and renters, providing reliable advice and comprehensive property management services in Dubai.</p>
                    <div className="mb-16">
                        <h4 className="text-[20px] font-semibold mb-6">What sets up apart?</h4>
                        <ul className="grid grid-cols-2 gap-6 text-xm">
                            <li><strong>Quick Response:</strong> We guarantee swift responses to client inquiries, ensuring their needs are promptly addressed by dedicated real estate brokers.</li>
                            <li><strong>Experienced Staff:</strong> Our team comprises diligent individuals with exceptional credentials and comprehensive training, providing top-notch services to clients.</li>
                            <li><strong>First-Class Service:</strong> We simplify the home buying and selling process, managing negotiations and paperwork on behalf of all parties involved.</li>
                            <li><strong>Trusted Agency:</strong> With over 2 decades of experience, RERA-certified agents, and prestigious awards, we are a trusted partner for buying and selling properties in Dubai.</li>
                            <li><strong>Wide Selection:</strong> Access our expanding portfolio of residential real estate listings for the latest properties and emerging neighborhoods.</li>
                            <li><strong>Marketing Promotions:</strong> We maximize property exposure through popular portals like Bayut, Property Finder, Dubizzle, social channels, and more.</li>
                        </ul>
                    </div>
                    <div className="mb-16">
                        <span className="text-xm">Our Property Services</span>
                        <h2 className="text-[30px] font-semibold mb-6">We do it best</h2>
                        <p>With over 20 years of industry experience, AQUA Properties is committed to creating impact & value for clients and communities. As one of Dubai's most trusted and leading real estate companies, AQUA Properties offers comprehensive services, including buying, selling, renting, property management, development management, off-plan projects, asset management, and handover services. With over 20 years of industry experience, we are committed to delivering trust, integrity, exceptional results, and value for our clients and communities.</p>
                    </div>
                </div>
                <div className="mb-16">
                    <ServiceBoxSlider />
                </div>
                <div className="mb-16">
                    <PropertyTabs />
                </div>
                <div className="mb-16">
                    <TheCommunityBox />
                </div>
            </div>
            <div className="mb-16">
                <OffPlanHome />
            </div>
            <div className="w-full max-w-7xl m-auto">
                <div className="mb-16">
                    <SelectionLocationIndex />
                </div>
                <div className="mb-16">
                    <GoogleReviews />
                </div>
                <div className="mb-16">
                    <LocationSliderIndex />
                </div>
            </div>
        </div>
    );
}