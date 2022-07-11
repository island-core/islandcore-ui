import { useState } from "react";
import { AlertItem } from "../Item/AlertItem";

export const useAlert = () => {
    const [alerts, setAlerts] = useState<AlertItem[]>([]);

    /**
     * Adds new alert to the list and immediately rerenders the base component
     */
    const sendAlert = (item: AlertItem): void => {
        setAlerts([...alerts, item]);
    }

    return {
        alerts,
        sendAlert,
    };
}