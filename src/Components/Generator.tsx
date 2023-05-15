// @ts-ignore
import { Block } from "konsta/react";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

function Scanner() {
    const [value, setValue] = useState("Change this!");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [fgColor, setFgColor] = useState("#007700");
    return (
        <Block className="flex flex-col w-full justify-center items-center">
            <QRCodeCanvas
                className="w-[70vmin]"
                size={256}
                level="Q"
                value={value}
                bgColor={bgColor}
                fgColor={fgColor}
            />
            <Block className="flex flex-col justify-center items-start w-full max-w-sm">
                <label>QR Value</label>
                <input
                    type="text"
                    className="w-full rounded py-1 px-2 text-black"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

                <label className="mt-4">Background Color</label>
                <input
                    type="color"
                    className="w-full rounded "
                    value={bgColor}
                    onChange={(event) => setBgColor(event.target.value)}
                />

                <label className="my-2">Foreground Color</label>
                <input
                    type="color"
                    className="w-full rounded mb-4"
                    value={fgColor}
                    onChange={(event) => setFgColor(event.target.value)}
                />
            </Block>
        </Block>
    );
}

export default Scanner;
