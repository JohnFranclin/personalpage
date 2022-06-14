import Navbar from "../components/Navbar";
import CoWorking from "../images/coworking.png"

export default function Coding() {
    return (
        <div className="flex flex-col w-auto min-h-screen min-w-screen">
            <Navbar active={2}/>
            <div className="m-auto md:container md:mx-auto md:my-auto m-2">
                <div className="border-4 border-black shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="grid grid-rows-3 gap-4 p-4">
                            <div
                                className="w-full text-9xl md:text-9xl text-left align-text-bottom inline break-words overflow-hidden max-w-xl">
                                Coding
                            </div>
                            <div className="text-2xl md:text-4xl text-left align-text-top">
                                Teamplayer
                            </div>
                            <div className="text-center">
                                Through the years of programming I came to the realisation that it is the most fun
                                if done in a team. With a couple of friends I developed a bunch of projects,
                                including a web application to monitor our investments through stock APIs and data
                                science. Developing those has given me the opportunity to work with languages like
                                Python, Java-/Typescript, SQL and PHP. In my web development endeavors I came
                                across features like React, Bootstrap and Tailwind.
                            </div>
                        </div>
                        <div className="flex">
                            <div className="m-auto">
                                <img src={CoWorking} className="h-auto w-full" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};