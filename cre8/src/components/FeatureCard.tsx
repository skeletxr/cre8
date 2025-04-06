import React, { Children } from "react";
import { twMerge } from "tailwind-merge";

function FeatureCard(props: { title: string; description: string; className?: string; children?: React.ReactNode }) {
    const { title, description,className, children } = props;
    return (
        <>
            <div className={twMerge("bg-neutral-900 border border-white/10 p-6 rounded-3xl", className)}>
                <div className="aspect-video">{children}</div>
                <div>
                    <h3 className="text-3xl font-medium mt-6">{title}</h3>
                    <p className="text-white/50 mt-2" >
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default FeatureCard;
