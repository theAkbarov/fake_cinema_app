import Noresult from "../../assets/images/no-results.png";
const NoResult = () => {
    return (
        <div style={{display: "flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width: "100%"}}>
            <img style={{ paddingTop: "5rem", display: "block", margin: "auto" }} src={Noresult} alt="Noresult" />
            <p style={{ color: "hsla(0, 0 %, 100 %, .5)"}}>Nothing found</p>
        </div>
    )
}

export default NoResult
