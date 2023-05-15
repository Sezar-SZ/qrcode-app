import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

function Scanner() {
    const [value, setValue] = useState("Change this!");
    const [color, setColor] = useState("#007700");
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <QRCodeCanvas
                className="w-[70vmin]"
                size={256}
                level="Q"
                value={value}
                bgColor={color}
                fgColor="#ffffff"
            />
            <div className="flex flex-col justify-center items-start w-full max-w-sm">
                <label>QR Value</label>
                <input
                    type="text"
                    className="w-full rounded py-1 px-2 text-black"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

                <label className="mt-4">Color</label>
                <input
                    type="color"
                    className="w-full rounded "
                    value={color}
                    onChange={(event) => setColor(event.target.value)}
                />
            </div>
        </div>
    );
}

export default Scanner;
