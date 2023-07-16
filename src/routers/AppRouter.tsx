import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MaterialsScreen from "../pages/MaterialsScreen"
import TasksScreen from "../pages/TasksScreen"
import HomeScreen from "../pages/HomeScreen"

import PrivateRoot from "../roots/PrivateRoot"
import PublicRoot from "../roots/PublicRoot"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* <Route
              path="/"
              element={
                <PublicRoot>
                  <LogInScreen />
                </PublicRoot>
              }
            /> */}

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
                {/* <Route path="*" element={<Screen404 />} /> */}
            </Routes>
        </Router>
    )
}

export default AppRouter
