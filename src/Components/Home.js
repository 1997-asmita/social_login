import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {

    const [allData, setAllData] = useState({
        name: " ",
        redirect: false
    });

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        console.log(data);
        setAllData({
            name: data.userData.name
        });
    });

    if (!sessionStorage.getItem("userData") || allData.redirect) {
        return (<Navigate to={"/"} />)
    }

    return (
        <>
            <div>
                Welcome {allData.name}
            </div>
        </>
    )
}
export default Home;


