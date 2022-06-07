import Navbar from "../components/Navbar";
import Chef from "../images/chef.png"

export default function Coding() {
    return (
        <div className="transition-all delay-300 duration-300 flex flex-col w-auto min-h-screen min-w-screen bg-amber-200 pb-4">
            <Navbar active={1}/>
            <div className="m-auto md:container md:mx-auto md:my-auto m-2">
                <div className="border-4 border-black">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="flex">
                            <div className="m-auto">
                                <img src={Chef} className="h-auto w-full" alt="..."/>
                            </div>
                        </div>
                        <div className="grid grid-rows-3 gap-4 p-4">
                            <div className="w-full text-9xl text-right align-text-bottom inline break-words overflow-hidden max-w-xl ml-auto">
                                About Me
                            </div>
                            <div className="text-4xl text-right align-text-top">
                                Food-Nerd
                            </div>
                            <div className="text-center">
                                Cooking is my most beloved hobby, it is the utmost fun for me to host a party and serve
                                my guests dishes from a variety of cuisines from around the world. Besides having an
                                addiction for cooking, I also like to spend my time learning chess. Chess tests my
                                tactical and logical capabilities just like solving coding challenges, which I love doing
                                online or in a group of friends. To counter all those inside activities my go to sport
                                is golf.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};