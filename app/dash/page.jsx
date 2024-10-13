import LozSlider from "@/components/LozSlider";


export const metadata = {
    title: 'JordanDG | Dashboard',
    description: 'This is my private dashboard - if you are reading this, you should not be able to.',
}

const Dash = () => {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-col items-center justify-between xl:pt-8 xl:pb-24 gap-y-6">
                    <h1 className="h1 w-full text-center">Lauren's Birthday 2024</h1>
                    <span className="bg-accent h-[5px] w-48">&nbsp;</span>
                    <p>A selection of hypotheticals for day plans</p>
                </div>
                <LozSlider />
            </div>
        </section>
    )
}

export default Dash;