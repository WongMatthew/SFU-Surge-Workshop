'use client'

import Image from "next/image";
import { useState } from "react";

export default function ValentinePopup() {
    const [yesSize, setYesSize] = useState(1);
    const [noSize, setNoSize] = useState(1);
    const [yesClicked, setYesClicked] = useState(false);

    function onNoClick() {
        setNoSize(noSize - (noSize*0.2));
        setYesSize(yesSize + (yesSize*0.2));
    }

    function onYesClick() {
        setYesClicked(true);
    }

    if (yesClicked === false) {
        return (
            <div className="flex flex-col bg-white w-50 h-50 justify-center items-center border border-black rounded-xl gap-7 pl-10 pr-10 pt-20 pb-20">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/stormyvalentine.png"
                        width="286"
                        height="223"
                        alt="Stormyvalentine"
                    />
                    <div className="text-center text-[#595959]">
                        Trust me, I’m Otterly Amazing!
                    </div>
                    <div className="text-center text-2xl text-black leading-tight font-normal w-52">
                        Will You Be My Valentine?
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center gap-2">
                    <button
                        className="text-white text-lg border bg-blue-900 rounded-lg pr-3 pl-3 pt-1 pb-1 transition-transform duration-200 z-20"
                        style={{ transform: `scale(${yesSize})` }}
                        onClick={onYesClick}
                    >
                        Yes
                    </button>
                    <button
                        className="text-gray-500 text-lg border bg-gray-200 rounded-lg pr-3 pl-3 pt-1 pb-1 transition-transform duration-200 z-10"
                        style={{ transform: `scale(${noSize})` }}
                        onClick={onNoClick}
                    >
                        No Thank You
                    </button>
                </div>
            </div>
        );
    }

    else{
        return (
            <div
                className="flex flex-col bg-white w-50 h-50 justify-center items-center border border-black rounded-xl pl-10 pr-10 pt-20 pb-20">
                <div className="flex flex-col items-center justify-center gap-5">
                    <Image
                        src="/togepi.gif"
                        width="286"
                        height="223"
                        alt="togepi"
                    />
                    <div className="text-center text-2xl text-black leading-tight font-normal w-52">
                        Thank you!!
                    </div>
                </div>
            </div>
        )
    }
}
