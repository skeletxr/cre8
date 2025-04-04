import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import Image from "next/image";
import IntegrationsColoumn from "@/components/IntegrationsColoumn";

const integrations = [
    {
        name: "Youtube",
        icon: figmaIcon,
        description: "YouTube is a popular online video-sharing platform.",
    },
    {
        name: "Instagram",
        icon: notionIcon,
        description:
            "Instagram is a social networking app that lets users share photos and videos.",
    },
    {
        name: "Twitter",
        icon: slackIcon,
        description:
            "Twitter is a social networking site where users can send and receive short messages called tweets.",
    },
    {
        name: "TikTok",
        icon: relumeIcon,
        description:
            "TikTok is a popular social media platform for creating, sharing, and discovering short-form videos.",
    },
    {
        name: "Facebook",
        icon: framerIcon,
        description:
            "Facebook is a social media platform  that allows users to connect with communities & share content.",
    },
    {
        name: "Twitch",
        icon: githubIcon,
        description:
            "Twitch is a video streaming platform that allows users to watch and broadcast live videos.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Intergration</Tag>
                        <h2 className="text-6xl font-medium text-center mt-6 ">
                            Grow on any{" "}
                            <span className="text-lime-400"> platform </span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            No matter where you create—Instagram, YouTube,
                            TikTok, or beyond—we've got the tools to help you
                            grow, engage, and succeed on any platform.
                        </p>
                    </div>
                    <div>
                        <div
                            className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 overflow-hidden"
                            style={{
                                maskImage:
                                    "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                                WebkitMaskImage:
                                    "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                            }}
                        >
                            <IntegrationsColoumn
                                integrations={integrations}
                            ></IntegrationsColoumn>
                            <IntegrationsColoumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                            ></IntegrationsColoumn>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
