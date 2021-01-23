
import Header from "./Header.js"

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <div className="bg-div"></div>
        </div>
    )
}

export default Layout