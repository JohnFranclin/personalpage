import Navbar from "../components/Navbar";
import ContactPNG from "../images/contact.png"

export default function Contact() {
    return (
        <div className="transition-all delay-300 duration-300 flex flex-col w-auto min-h-screen min-w-screen bg-amber-200">
            <Navbar active={3}/>
            <div className="m-auto md:container md:mx-auto md:my-auto m-2">
                <div className="border-4 border-black transition-all">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="flex">
                            <div className="m-auto max-w-lg">
                                <img src={ContactPNG} className="h-auto w-full" alt="..."/>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-4 p-4">
                            <div className="w-full text-9xl text-right inline break-words overflow-hidden max-w-xl ml-auto">
                                Contact Me
                            </div>
                            <div className="text-right grid grid-rows-3 text-xl">
                                <div>E-Mail: <a href="mailto:ju.baumhove@gmail.com">ju.baumhove@gmail.com</a></div>
                                <div>Github: <a href="https://github.com/JohnFranclin">Justus Baumhove</a></div>
                                <div>Discord: JohnFranclin#4099</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};