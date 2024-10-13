import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from "next/image";

// Icons
import { FaArrowDown } from 'react-icons/fa';

const scenarios = {
    items: [
        {
            title: 'Wildlife',
            priceRange: '££(£)',
            shortIntro: 'A trip to see all that nature offers.', 
            featuredImg: '/scenarios/anelephant.jpg',
            step1: [
                "7am - 8am",
                "Breakfast & Gifts",
                "Opening presents and having breakfast, followed by getting ready for the day ahead."
            ],
            step2: [
                "9am - 11am",
                "Travel To Marwell / Longleat",
                "Travel to either Marwell via bus or Longleat via train."
            ],
            step3: [
                "11am - 4pm",
                "Enjoy The Day",
                "View all the animals, have some food and enjoy each other's company ;)."
            ],
            step4: [
                "11am - 4pm",
                "(Optional) VIP Experience",
                "Undertake a chosen VIP experience of your choosing (ranging from £75pp to £375pp)."
            ],
            step5: [
                "4pm - 6pm",
                "Travel From Marwell / Longleat",
                "Travel from either Marwell via bus or Longleat via train."
            ],
            step6: [
                "6pm - 8pm",
                "Evening Meal",
                "Evening meal at a local eatery of your choosing."
            ],
        },
        {
            title: 'London',
            priceRange: '£££',
            shortIntro: 'A trip to see the sights of our capital (again).', 
            featuredImg: '/scenarios/londonistan.jpeg',
            step1: [
                "8am - 9am",
                "Breakfast & Gifts",
                "Opening presents and having breakfast, followed by getting ready for the day ahead."
            ],
            step2: [
                "10am - Midday",
                "Travel To London Via Train",
                "Travel into London Waterloo via train."
            ],
            step3: [
                "Midday - 2pm",
                "Get lunch somewhere (Assa?)",
                "Enjoy a well-deserved food break for our troubles."
            ],
            step4: [
                "2pm - 3:30pm",
                "Horizon 22",
                "Go to the new highest viewing platform in London - 10m taller than the shard & completely free."
            ],
            step5: [
                "3:30pm - 5pm",
                "Shopping / Mooching About",
                "Pretty much up to you - shopping, mooching about, exploring, your call."
            ],
            step6: [
                "5pm - 7pm",
                "Puttshack & Food",
                "A game or two at Puttshack accompanied by a beverage and food of your choosing."
            ],
            step7: [
                "7pm - 8pm",
                "Evening Walk Along Waterfront",
                "A walk along the waterfront beside the London Eye."
            ],
            step8: [
                "8pm - 10pm",
                "Drinks & Afters At Rooftop Bar",
                "Drink and soak in the atmosphere at a rooftop bar in central london."
            ],
            step9: [
                "10pm - 11:30pm",
                "Travel Home From London Via Train",
                "Travel Home From London Waterloo via train."
            ],
        },
        {
            title: 'Isle Of Wight',
            priceRange: '£££',
            shortIntro: 'A Trip To The Island.', 
            featuredImg: '/scenarios/theneedles.jpg',
            step1: [
                "7am - 8am",
                "Breakfast, Gifts And Leaving The House",
                "Opening presents, having breakfast and walking to ferry terminal."
            ],
            step2: [
                "8am -  9am",
                "Travel To Cowes",
                "Travel from Southampton to West Cowes via the ferry."
            ],
            step3: [
                "9am - 10am",
                "Cowes to The Needles",
                "Enjoy the trip along the waterfront to The Needles"
            ],
            step4: [
                "10am - Midday",
                "The Needles",
                "Enjoy the sights, take the cable car, and enjoy the beach."
            ],
            step5: [
                "Midday - 12:30pm",
                "(Optional) The Needles Boat Ride",
                "Take a 20-minute boat ride or 15-minute rapid rib ride around the needles and white cliffs."
            ],
            step6: [
                "12:30pm - 1:30pm",
                "Travel to Sandown Zoo",
                "Hopefully we can go and find our talking friend :)."
            ],
            step7: [
                "1:30pm - 4pm",
                "Sandown Zoo",
                "See all the animals."
            ],
            step8: [
                "4pm - 5pm",
                "Beach Walk",
                "Enjoy the very clean and definitely not polluted beach."
            ],
            step9: [
                "5pm - 8pm",
                "Evening meal and travel home",
                "A meal at a place of your choosing (Isle Of Wight or Southampton based)."
            ],
        },
        {
            title: 'The Mountain',
            priceRange: '£££',
            shortIntro: 'A trip to truly push yourself.', 
            featuredImg: '/scenarios/snowdon.jpg',
            step1: [
                "4am - 5am",
                "Breakfast, Gifts And Leaving The House",
                "Opening presents, having breakfast and getting to the train station."
            ],
            step2: [
                "5:15am -  11:40am",
                "Travel To Snowdonia",
                "Travel 238miles to a village near snowdon, then get a taxi to the base of the mountain."
            ],
            step3: [
                "Midday - 5:30pm",
                "The Climb.",
                "The Climb."
            ],
            step4: [
                "6pm - 1am",
                "Return Home",
                "Return Home Via Public Transport."
            ],
        },
        {
            title: 'Go Ape',
            priceRange: '£',
            shortIntro: 'A Trip To The Treeline', 
            featuredImg: '/scenarios/goape.jpg',
            step1: [
                "8am - 9am",
                "Gifts",
                "Opening presents, followed by getting ready for the day ahead."
            ],
            step2: [
                "9am - 10am",
                "Go Out For Breakfast",
                "Go for breakfast in Southampton at a place of your choosing."
            ],
            step3: [
                "10am - 11am",
                "Travel To Itchen Valley Country Park",
                "Travel via bus / train / taxi to the park."
            ],
            step4: [
                "11:30am - 2:30pm",
                "Treeptop Challenge Plus",
                "Undertake the high-wires course followed by the zipline."
            ],
            step5: [
                "2:30pm - 3:30pm",
                "Post-Climb Picnic Lunch",
                "Enjoy food taken with us after the activity."
            ],
            step6: [
                "3:30pm - 4:30pm",
                "Travel To Southampton",
                "Return to Southampton From Itchen Valley."
            ],
            step7: [
                "4:30pm - 6:30pm",
                "Local Activity",
                "Axe-Throwing / Indoor Baseball / Arcade / Whatever else you want."
            ],
            step8: [
                "6:30pm - 8pm",
                "Evening Meal",
                "Enjoy an evening meal at a place of your choosing."
            ],
        },
        {
            title: 'Brighton',
            priceRange: '£',
            shortIntro: 'A Trip To The Gays', 
            featuredImg: '/scenarios/Brighton.jpg',
            step1: [
                "7am - 8:30am",
                "Gifts",
                "Opening presents, followed by getting ready for the day ahead."
            ],
            step2: [
                "9am - 10:30am",
                "Grab Breakfast And Travel To Brighton",
                "Grab Breakfast and travel from Woolston to Brighton."
            ],
            step3: [
                "11am - Midday",
                "(Optional) Enjoy A Spa Trip For Two (Hopefully Not With Me)",
                "Head To A Waterfront Spa To Get a procedure of your choice done."
            ],
            step4: [
                "Midday - 1:30pm",
                "Lunch",
                "Get lunch."
            ],
            step5: [
                "1:30pm - 2:30pm",
                "General Mooch / Beach",
                "Enjoy your surroundings."
            ],
            step6: [
                "2:30pm - 4:30pm",
                "Aquarium",
                "Go To Brighton Aquarium."
            ],
            step7: [
                "2:30pm - 4:30pm",
                "(Optional) Aquarium Experience",
                "Travel On The Glass-Bottom Boat Indoors."
            ],
            step8: [
                "4:30pm - 5:30pm",
                "General Sightseeing / Activty Of Your Choice",
                "Do whatever you want... go get em."
            ],
            step9: [
                "5:30pm - 8:30pm",
                "Evening Meal and Homeward Travel",
                "Meal in a spot of your choice & then travelling home."
            ],
        },
    ]
}

const LozSlider = () => {
    return (
        <Tabs defaultValue='Wildlife' className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                <TabsTrigger value='Wildlife'>Option 1</TabsTrigger>
                <TabsTrigger value='London'>Option 2</TabsTrigger>
                <TabsTrigger value='Isle Of Wight'>Option 3 (Out)</TabsTrigger>
                <TabsTrigger value='The Mountain'>Option 4 (Out)</TabsTrigger>
                <TabsTrigger value='Go Ape'>Option 5</TabsTrigger>
                <TabsTrigger value='Brighton'>Option 6 (Out)</TabsTrigger>
            </TabsList>
            <div className='min-h-[70vh] w-full'>
                {scenarios.items.map((item, index)=> {
                    return ( 
                        <TabsContent key={index} value={item.title} className='w-full h-full'>
                            <div className='flex flex-col gap-[10px] text-center xl:text-left'>
                                <h1 className='h2'>{item.title}</h1>
                                <span className='text-accent '>{item.priceRange} | {item.shortIntro}</span>
                                <Image src={item.featuredImg} priority quality={100} alt="Jordan Da Graca" width="512" height="72" className="rounded-2xl" />
                            </div>
                            <ScrollArea className="flex flex-col items-start justify-center h-[300px] my-4">
                                {item.step1 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step1[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step1[1]}</h1>
                                        <p className=''>{item.step1[2]}</p>
                                        <FaArrowDown className='text-accent h2'/>
                                    </div>
                                )}
                                {item.step2 && (
                                   <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step2[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step2[1]}</h1>
                                        <p className=''>{item.step2[2]}</p>
                                        <FaArrowDown className='text-accent h2'/>
                                    </div>
                                )}
                                {item.step3 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step3[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step3[1]}</h1>
                                        <p className=''>{item.step3[2]}</p>
                                        {item.step4 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                                {item.step4 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step4[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step4[1]}</h1>
                                        <p className=''>{item.step4[2]}</p>
                                        {item.step5 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                                {item.step5 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step5[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step5[1]}</h1>
                                        <p className=''>{item.step5[2]}</p>
                                        {item.step6 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                                {item.step6 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step6[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step6[1]}</h1>
                                        <p className=''>{item.step6[2]}</p>
                                        {item.step7 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                                {item.step7 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step7[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step7[1]}</h1>
                                        <p className=''>{item.step7[2]}</p>
                                        {item.step8 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                                {item.step8 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step8[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step8[1]}</h1>
                                        <p className=''>{item.step8[2]}</p>
                                        {item.step9 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                                {item.step9 && (
                                    <div className='flex flex-col justify-start items-start gap-1 mb-12 w-[500px]'>
                                        <p className='text-white/60'>{item.step9[0]}</p>
                                        <h1 className='h3 text-accent'>{item.step9[1]}</h1>
                                        <p className=''>{item.step9[2]}</p>
                                        {item.step10 && (
                                            <FaArrowDown className='text-accent h2'/>
                                        )}
                                    </div>
                                )}
                            </ScrollArea>
                        </TabsContent>
                    )        
                })}
            </div>
        </Tabs>
    )
}

export default LozSlider;