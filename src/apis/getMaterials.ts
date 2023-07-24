export const getMaterials = async () => {
    try {
        const response = await fetch("http://localhost:5065/materials", {
            mode: "no-cors",
        })
        return response
    } catch (e) {
        console.log(e)
    }
}
