// @ts-ignore
import { Block } from "konsta/react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { useEffect, useState } from "react";

function Scanner({}) {
    const [isActive, setIsActive] = useState(false);
    const [result, setResult] = useState("");

    const startScan = async () => {
        // Check camera permission
        // This is just a simple example, check out the better checks below
        await BarcodeScanner.checkPermission({ force: true });

        // make background of WebView transparent
        // note: if you are using ionic this might not be enough, check below
        BarcodeScanner.hideBackground();

        const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

        // if the result has content
        if (result.hasContent) {
            setResult(result.content);
            console.log(result.content);
            stopScan();
        }
    };
    const stopScan = () => {
        BarcodeScanner.showBackground();
        BarcodeScanner.stopScan();
    };

    useEffect(() => {
        const checkPermission = async () => {
            const status = await BarcodeScanner.checkPermission();

            if (status.denied) {
                // the user denied permission for good
                // redirect user to app settings if they want to grant it anyway
                const c = confirm(
                    "If you want to grant permission for using your camera, enable it in the app settings."
                );
                if (c) {
                    BarcodeScanner.openAppSettings();
                }
            }
        };
        checkPermission();

        const prepare = async () => {
            BarcodeScanner.prepare();
        };
        prepare();
    }, []);

    useEffect(() => {
        if (isActive) {
            startScan();
        }
    }, [isActive]);

    return (
        <Block className="flex flex-col w-full justify-center items-center">
            {!isActive && (
                <button onClick={() => setIsActive(true)}>Scan</button>
            )}
            <p>{result}</p>
        </Block>
    );
}

export default Scanner;
