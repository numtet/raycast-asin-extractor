import {Clipboard, showHUD} from "@raycast/api";
import {useEffect} from "react";

export default function Command() {
    useEffect(() => {
        (async () => {
            const {text} = await Clipboard.read();

            const asin = text.match(/[0-9A-Z]{10}/)?.at(0);
            if (asin) {
                await Clipboard.copy(asin);
                await showHUD(`ASIN: ${asin} copied.`);
            } else {
                await showHUD("No ASIN found.");
            }
        })();
    }, []);
}
