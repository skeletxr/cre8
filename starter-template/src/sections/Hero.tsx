import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";

function Hero() {
    return (
        <>
            <section className="py-94 overflow-x-clip ">
                <div className="container relative ">
                    <div className="absolute -left-32 top-16">
                        <Image
                            src={designExample1Image}
                            alt="Design Example 1"
                        />
                    </div>
                    <div className="absolute -right-64 -top-16">
                        <Image
                            src={designExample2Image}
                            alt="Design Example 2"
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                            ✨ Trusted by 2k+ creators
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                        Supporting Creators, Fueling Growth
                    </h1>
                    <p className="text-xl text-white/50 text-center mt-8 mx-auto max-w-2xl">
                        Level up your content creation journey with tools,
                        tutorials, and collaboration opportunities all for free!
                    </p>
                    <form className="flex border border-white/15 mx-auto rounded-full p-2 mt-8 max-w-lg">
                        <input
                            className="bg-transparent px-4 md:flex-1"
                            type="email"
                            placeholder="Enter your e-mail"
                            id=""
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            className="whitespace-nowrap"
                            size="sm"
                        >
                            Join Now
                        </Button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Hero;
