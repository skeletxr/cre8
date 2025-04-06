export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex">
                <div className="flex flex-none text-7xl md:text-8xl gap-16 font-medium">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span>Join Now for Free</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
