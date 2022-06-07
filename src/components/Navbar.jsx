export default function Navar(props= {active: 0}) {
    const classes = {
        active: "hover:scale-[1.02] hover:text-slate-500 underline text-xl",
        inactive: "hover:scale-[1.02] hover:text-slate-500"
    }
    return (
        <div className="h-auto w-full">
            <div className="grid grid-cols-4 gap-4 m-4">
                <a href="/" className={(props.active === 0)? classes.active : classes.inactive}>
                    Me
                </a>
                <a href="/aboutme" className={(props.active === 1)? classes.active : classes.inactive}>
                    About Me
                </a>
                <a href="/coding" className={(props.active === 2)? classes.active : classes.inactive}>
                    Coding
                </a>
                <a href="/contact" className={(props.active === 3)? classes.active : classes.inactive}>
                    Contact
                </a>
            </div>
        </div>
    );
}