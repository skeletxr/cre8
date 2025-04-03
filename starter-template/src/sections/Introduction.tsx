import Tag from "@/components/Tag";

const text = ` Whether it's building your audience, monetizing your work, or scaling your brand—we're here to make it easier.`;

export default function Introduction() {
    return (
        <section  className="py-28 lg:40">
            <div className="container">
                <div className="flex justify-center">
                <Tag>Introducing Creatathon</Tag> 
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">                  
                    <span>"You create, we help you grow." </span>{""}
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400">That&apos;s why we built Createathon.</span>
                </div>
            </div>
        </section>
    );
}
