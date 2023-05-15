// @ts-ignore
import { useState } from "react";
import Scanner from "./Components/Scanner";
import Generator from "./Components/Generator";
function MyApp() {
    const [activeTab, setActiveTab] = useState<"scan" | "generate">("scan");
    return (
        <div className="flex flex-col-reverse justify-center items-center ">
            <div className="left-0 bottom-0 fixed w-full flex justify-center items-center">
                <div
                    className={`flex-1 flex justify-center items-center bg-[#003300] py-4 ${
                        activeTab === "scan" && "bg-[#004400]"
                    }`}
                    onClick={() => setActiveTab("scan")}
                >
                    <h2 className="text-white">Scan</h2>
                </div>
                <div
                    className={`flex-1 flex justify-center items-center bg-[#003300] py-4 ${
                        activeTab === "generate" && "bg-[#004400]"
                    }`}
                    onClick={() => {
                        setActiveTab("generate");
                    }}
                >
                    <h2 className="text-white">Generate</h2>
                </div>
            </div>
            <div className="w-[90vw] flex  mt-8">
                {activeTab === "scan" && <Scanner />}
                {activeTab === "generate" && <Generator />}
            </div>
        </div>
    );
}

export default MyApp;
