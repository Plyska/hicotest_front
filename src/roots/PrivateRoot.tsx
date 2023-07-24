import React from "react"
import LoginScreen from "../pages/LoginScreen"

interface PrivateRootProps {
    children: React.ReactElement
}

const PrivateRoot: React.FC<PrivateRootProps> = ({ children }) => {
    const token = localStorage.getItem("token");

    return token ? children : <LoginScreen />
}

export default PrivateRoot
