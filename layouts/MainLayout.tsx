import Nav from "../components/Navigation/NavigationContainer";
import Footer from "../components/Footer/FooterContainer";
import './styles.scss';
const MainLayout = (props: any) => {
    return (
            <div className="d-flex flex-column">
                <div className="w-100">
                    <Nav />
                </div>
                <div>
                    <div className=" d-flex justify-content-center content">
                        {props.children}
                    </div>
                    <div className="d-flex align-items-center w-100">
                        <Footer />
                    </div>
                </div>
        </div>
    )
}

export default MainLayout