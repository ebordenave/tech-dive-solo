import ExamsTable from "../components/ExamsTable"
import ResponsiveAppBar from "../components/AppBar"

const Home = () => {
    return (
        <div className="home">
            <ResponsiveAppBar />
            <ExamsTable />
        </div>
    )
}

export default Home
