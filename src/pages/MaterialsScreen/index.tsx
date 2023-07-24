import React, { useEffect } from "react"
import Layout from "../../components/Layout"
import { getMaterials } from "../../apis/getMaterials"

const MaterialsScreen: React.FC = () => {
    const fetchMaterials = async () => {
        const data = await getMaterials()
        console.log(data, "DATA")
    }

    useEffect(() => {
        fetchMaterials()
    }, [])
    return (
        <Layout namePage="Materials">
            <div>MaterialsScreen</div>
        </Layout>
    )
}

export default MaterialsScreen
