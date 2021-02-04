import React from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";

const CreateTripPage = () => {
    useProtectedPage();
    return <div>CreateTripPage</div>;
};

export default CreateTripPage;