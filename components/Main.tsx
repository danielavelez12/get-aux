"use client";
import { useState } from "react";
import Spotify from "./Spotify";
import ProfilePicker from "./ProfilePicker";


const Main = () => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [playing, isPlaying] = useState(false);
    const [DJName, setDJName] = useState('' as string);
    return (
        <div className="flex flex-col gap-10 mt-20 mb-60">
            <div className="flex flex-col items-center justify-center text-center">
            <p className="mb-4 text-8xl bg-clip-text font-black text-melon">
                    STEAL THE AUX
                </p>
            <p className="max-w-md text-4xl font-bold text-base leading-relaxed text-blush">
                DJ for your friends. While you can.
            </p>
          </div>   
            <div className="animate-bounce flex flex-col items-center justify-center">
            </div>
            <ProfilePicker setIsDisabled={setIsDisabled} isDisabled={isDisabled} setDJName={setDJName} />
            <Spotify isDisabled={isDisabled} DJName={DJName}/>
        </div>
    )
}

export default Main;