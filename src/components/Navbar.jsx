export default function Navar(props= {active: 0}) {
    return (
        <div className="h-auto w-full">
            <div className="grid grid-cols-4 gap-4 m-4">
                <a href="/" className={(props.active === 0)? "underline text-xl" : ""}>
                    Me
                </a>
                <a href="/aboutme" className={(props.active === 1)? "underline text-xl" : ""}>
                    About Me
                </a>
                <a href="/coding" className={(props.active === 2)? "underline text-xl" : ""}>
                    Coding
                </a>
                <a href="/contact" className={(props.active === 3)? "underline text-xl" : ""}>
                    Contact
                </a>
            </div>
        </div>
    );
}