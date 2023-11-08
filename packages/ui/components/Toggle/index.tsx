import React from "react"
import * as Switch from "@radix-ui/react-switch"

const Toggle = () => (
    <form>
        <div className="flex items-center">
            <label className="text-white text-[15px] leading-none pr-[15px]">Airplane mode</label>
            <Switch.Root className="">
                <Switch.Thumb className="block w-[21px]" />
            </Switch.Root>
        </div>
    </form>
)

export default Toggle
