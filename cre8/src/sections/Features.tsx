import Tag from "@/components/Tag";
import { div } from "framer-motion/client";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";

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
            <div className="container sm:max-w-[447px] md:max-w-[768px] lg:min-w-[1200px]">
                <div className="flex items-center justify-center">
                    <Tag className="flex items-center justify-center font-medium">
                        Why choose us?
                    </Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto ">
                    Turn Passion Into{" "}
                    <span className="text-lime-400"> Growth </span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Trusted by 200+ Creators"
                        description="Join a growing community of creators who are building, thriving, and achieving more with us."
                        className="md:col-span-2 lg:col-span-1"
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
                                        <span
                                            className="size-1,5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Sustainable Career Building"
                        description="We help you go beyond growth and build a
                                lasting career."
                        className="md:col-span-2 lg:col-span-1"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We've achived{" "}
                                <span className="bg-gradient-to-r from bg-purple-400 to pint-400 bg-clip-text text-transparent ">
                                    incredible
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Zero Cost, Maximum Support"
                        description="Everything you need is completely free, no strings attached!"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">Create</Key>
                            <Key>Grow</Key>
                            <Key>Win</Key>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">
                                ★
                            </span>
                            <span className="font-medium md:text-lg truncate">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}