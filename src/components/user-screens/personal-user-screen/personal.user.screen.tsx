import { useEffect, useState } from "react";
import { ICollectionResponse } from "../../../store/models/collection";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

const PersonalUserScreen = () => {
    const [page, setPage] = useState<number>(1);
    const [collections, setCollections] = useState<ICollectionResponse[]>([]);
    const navigate = useNavigate();
    
    const handleCreateCollection = () => {
        navigate('/collection-creation')
    }

    return <>
        
    </>
}

export default PersonalUserScreen;