"use client"

const Header = () => {
    return (
        <div className={"flex relative"}>
            <h1 className={"fixed cursor-default left-0 right-0 text-center font-ailerons text-[35px] text-white"}>
                Tristan Brattinga
            </h1>

            <ul className={"ml-auto flex justify-between items-center gap-x-6 text-white font-semibold uppercase"}>
                <li>Work</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header
