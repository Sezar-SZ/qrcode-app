// @ts-ignore
import { App, Page, Tabbar, TabbarLink, Block } from "konsta/react";
import { useState } from "react";
import Scanner from "./Components/Scanner";
import Generator from "./Components/Generator";
function MyApp() {
    const [activeTab, setActiveTab] = useState<"scan" | "generate">("generate");
    return (
        <App safeAreas theme="material">
            <Page>
                <Tabbar labels={true} className="left-0 bottom-0 fixed">
                    <TabbarLink
                        active={activeTab === "scan"}
                        onClick={() => setActiveTab("scan")}
                        label={"Scan"}
                    />
                    <TabbarLink
                        active={activeTab === "generate"}
                        onClick={() => {
                            setActiveTab("generate");
                        }}
                        label={"Generate"}
                    />
                </Tabbar>
                <Block className="mt-4">
                    {activeTab === "scan" && <Scanner />}
                    {activeTab === "generate" && <Generator />}
                </Block>
            </Page>
        </App>
    );
}

export default MyApp;
