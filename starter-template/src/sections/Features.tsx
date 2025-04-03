import Tag from "@/components/Tag";
import { div } from "framer-motion/client";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
    "Audience Growth",
    "Monetization Tools",
    "Brand Building",
    "Creative Insights",
    "Collaboration Hub",
    "FMarketing Support",
    "Success Strategies",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Why choose us?</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 ">
                    Turn Passion Into{" "}
                    <span className="text-lime-400"> Growth </span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Trusted by 200+ Creators"
                        description="Join a growing community of creators who are building, thriving, and achieving more with us."
                    >
                        <div className="aspect-video flex items-center justify-center ">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span className="size-1,5 rounded-full bg-white inline-flex" key={i}></span>
                                    ))}
                                    
                                   
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Sustainable Career Building"
                        description="We help you go beyond growth and build a
                                lasting career."
                    />

                    <FeatureCard
                        title="Zero Cost, Maximum Support"
                        description="Everything you need is completely free, no strings attached!"
                    />
                </div>
                <div>
                    {features.map((feature) => (
                        <div key={feature}>
                            <span></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
