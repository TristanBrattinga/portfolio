"use client"

const Header = () => {
    return (
        <div className={"bg-gray-300 flex w-full justify-between items-center px-14"}>
            <div className={"block w-20 h-10 bg-red-500"}>Logo</div>
            <ul className={"flex gap-10 py-5"}>
                <li>Work</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Header
