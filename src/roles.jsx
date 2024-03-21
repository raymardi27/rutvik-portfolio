import "./App.css"
import React, {useState,useEffect} from "react"

const ChangingRolesComponent = () => {
    const roleNames = [
        "Backend Developer",
        "Software Engineer",
        "Data Scientist"
    ];

    const [currentRoleIndex, setCurrentRoleIndex] = useState(1);
    const [currentRole, setCurrentRole] = useState(roleNames[1]);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roleNames.length);
        },3000);

        return () => clearInterval(intervalID);
    }, [roleNames.length]);

    useEffect(() => {
        setCurrentRole(roleNames[currentRoleIndex]);
    },[currentRoleIndex,roleNames]);

    return currentRole;
};

export default ChangingRolesComponent;