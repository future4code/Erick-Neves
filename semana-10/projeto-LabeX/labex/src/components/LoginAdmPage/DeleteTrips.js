import React from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";

const DeleteTrips = () => {
    useProtectedPage();
    return <div>DeleteTrips</div>;
};

export default DeleteTrips;

