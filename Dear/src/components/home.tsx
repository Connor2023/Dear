
import React, { useState } from "react";
import FoodSelection from "./foodselection";
import ActivitySelection from "./activityselection";
import InstructionsModal from "./instructionsmodal";
import { Button, Image } from "@nextui-org/react";

const Home: React.FC<{}> = () => {
    const [isMyValentine, setIsMyValentine] = useState(false);

    return (
        <div className="flex flex-col">
            <Button className= { isMyValentine ? "w-24 self-center mt-4 h-5 text-tiny text-white" : "w-52 self-center mt-60 text-white"}
            onPress={() => {setIsMyValentine(!isMyValentine)}}
            color = { isMyValentine ? "warning" : "danger"}>
                { isMyValentine ? "Not for you? :(" : "Be My Valentine?"}
            </Button>
            { isMyValentine ?   <div className="flex flex-col items-center gap-4 m-4">
                                    <FoodSelection />
                                    <ActivitySelection />
                                    <InstructionsModal />
                                </div>
                : <div className="self-center mt-12"><Image
                isZoomed
                width={200}
                alt="Cartoon heart"
                src="https://npr.brightspotcdn.com/1a/a2/f322553e43b78aefe2824628ca33/hearts-istock-happy-lucky.jpg"
              /></div>}
        </div>
    );
}

export default Home;