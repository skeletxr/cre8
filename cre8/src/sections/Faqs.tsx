import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How is CRE8 different from other agencies?",
        answer: "CRE8 is a unique agency that combines the power of AI with human creativity. We focus on delivering personalized solutions that are tailored to your specific needs, rather than using a one-size-fits-all approach.",
    },
    {
        question: "Is there a learning curve?",
        answer: "CRE8 is designed to be user-friendly and intuitive. Most users find they can start using it effectively within a few hours. We also provide tutorials and support to help you get started.",
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 customer support through chat, email, and phone. Our team is always ready to assist you with any questions or issues you may have.",
    },
    {
        question: "Can I work remotely with CRE8?",
        answer: "Yes, CRE8 allows you to work from anywhere with an internet connection. You can access your projects and collaborate with your team in real-time.",
    },
    {
        question: "How does CRE8 handle brand collaboration?",
        answer: "CRE* reaches out to brands and partners to create unique collaborations that benefit both parties. We focus on building long-term relationships that enhance our clients' visibility and reach.",
    },
];

export default function Faqs() {
    const selectedIndex = 0;
    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex items-center justify-center">
                    <Tag className="flex items-center justify-center font-bold">
                        FAQs
                    </Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-xl mx-auto">
                    Questions? We've got you{" "}
                    <span className="text-lime-400">covered.</span>{" "}
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto ">
                    {faqs.map((faq , faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 border border-white/10 rounded-2xl p-6"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question} </h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge("feather flex-shrink-0 feather-plus text-lime-400", selectedIndex === faqIndex && "rotate-45")}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <div className={twMerge("mt-6" , selectedIndex !== faqIndex && "hidden" )} >
                                <p className="text-white/50">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
