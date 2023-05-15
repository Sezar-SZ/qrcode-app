import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { useEffect, useState } from "react";
import { Browser } from "@capacitor/browser";
import isUrl from "is-url";

function Scanner() {
    const [isActive, setIsActive] = useState(false);
    const [result, setResult] = useState("");

    useEffect(() => {
        const checkPermission = async () => {
            const status = await BarcodeScanner.checkPermission();

            if (status.denied) {
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

        return () => {
            BarcodeScanner.showBackground();
            BarcodeScanner.stopScan();
            setIsActive(false);
        };
    }, []);

    useEffect(() => {
        const startScan = async () => {
            await BarcodeScanner.checkPermission({ force: true });
            BarcodeScanner.hideBackground();

            const result = await BarcodeScanner.startScan();
            if (result.hasContent) {
                setResult(result.content);
                BarcodeScanner.showBackground();
                BarcodeScanner.stopScan();
                setIsActive(false);
            }
        };
        if (isActive) {
            startScan();
        }
    }, [isActive]);

    useEffect(() => {
        if (result) {
            const handleResult = async () => {
                if (!isUrl(result)) {
                    await Browser.open({
                        url:
                            "https://www.google.com/search?q=" +
                            result.split(" ").join("+"),
                    });
                } else {
                    await Browser.open({
                        url: result,
                    });
                }
            };
            BarcodeScanner.showBackground();
            BarcodeScanner.stopScan();
            setIsActive(false);
            handleResult();
            setResult("");
        }
    }, [result]);

    return (
        <div className="flex flex-col w-full items-center">
            {!isActive && (
                <button
                    className="bg-[#003300] px-4 py-2 rounded mt-[30vh]"
                    onClick={() => setIsActive(true)}
                >
                    Scan
                </button>
            )}
        </div>
    );
}

export default Scanner;
