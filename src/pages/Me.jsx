import Navbar from "../components/Navbar";
import Face from "../images/face.jpeg";

export default function Me() {
    return (
        <div
            className="transition-all delay-300 duration-300 flex flex-col w-auto min-h-screen min-w-screen bg-amber-200 pb-4">
            <Navbar active={0}/>
            <div className="m-auto md:container md:mx-auto md:my-auto m-2">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid grid-rows-4 text-right">
                        <div className="text-9xl">Hi,</div>
                        <div className="text-3xl">my name is</div>
                        <div className="text-7xl">Justus Baumhove</div>
                        <div className="text-2xl text-slate-500">Business Information Systems Student</div>
                    </div>
                    <div className="">
                        <img src={Face} alt="..."
                             className="rounded-full m-auto h-auto max-w-xs shadow-xl transition-all duration-300
                             hover:scale-[1.005] hover:shadow-2xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
}