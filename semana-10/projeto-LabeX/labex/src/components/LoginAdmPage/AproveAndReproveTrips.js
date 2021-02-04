import React from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";

const AproveAndReproveTrips = () => {
    useProtectedPage();
    return <div>AproveAndReproveTrips</div>;
};

export default AproveAndReproveTrips;