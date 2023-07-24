import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MaterialsScreen from "../pages/MaterialsScreen"
import TasksScreen from "../pages/TasksScreen"
import HomeScreen from "../pages/HomeScreen"

import PrivateRoot from "../roots/PrivateRoot"
import PublicRoot from "../roots/PublicRoot"
import LoginScreen from "../pages/LoginScreen"
import RegisterScreen from "../pages/RegisterScreen"
import Screen404 from "../pages/Screen404"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <PublicRoot>
                            <LoginScreen />
                        </PublicRoot>
                    }
                />

                <Route
                    path="/register"
                    element={
                        <PublicRoot>
                            <RegisterScreen />
                        </PublicRoot>
                    }
                />

                <Route
                    path="/"
                    element={
                        <PrivateRoot>
                            <HomeScreen />
                        </PrivateRoot>
                    }
                />

                <Route
                    path="/materials"
                    element={
                        <PrivateRoot>
                            <MaterialsScreen />
                        </PrivateRoot>
                    }
                />

                <Route
                    path="/tasks"
                    element={
                        <PrivateRoot>
                            <TasksScreen />
                        </PrivateRoot>
                    }
                />

                {/* <Route
              path="/tasks/:id"
              element={
                <PrivateRoot>
                  
                </PrivateRoot>
              }
            /> */}
                <Route path="*" element={<Screen404 />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
