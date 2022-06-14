import Navbar from "../components/Navbar";
import ContactPNG from "../images/contact.png"

export default function Contact() {
    return (
        <div
            className="flex flex-col w-auto min-h-screen min-w-screen">
            <Navbar active={3}/>
            <div className="m-auto md:container md:mx-auto md:my-auto m-2">
                <div className="border-4 border-black transition-all shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="flex">
                            <div className="m-auto max-w-lg">
                                <img src={ContactPNG} className="h-auto w-full" alt="..."/>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-4 p-4">
                            <div
                                className="w-full text-9xl text-right inline break-words overflow-hidden max-w-xl ml-auto">
                                Contact Me
                            </div>
                            <div className="text-right grid grid-rows-2 text-xl">
                                <div className="my-auto">
                                    E-Mail:
                                    <a href="mailto:ju.baumhove@gmail.com"> ju.baumhove@gmail.com</a>
                                </div>
                                <div className="my-auto">
                                    Github:
                                    <a href="https://github.com/JohnFranclin"> Justus Baumhove </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};