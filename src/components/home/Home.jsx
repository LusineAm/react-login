import Footer from "../footer/Footer";
import Login from "../login/Login";

const Home = () => {
    return (
        <>
            <main className="main">
                <Login />
                <div className="background-container">
                    <div className="block block1"></div>
                    <div className="block block2"></div>
                    <div className="block block3"></div>
                    <div className="block block4"></div>
                    <div className="block block5"></div>
                </div>            
            </main>
            <footer className="footer">
                <Footer />
            </footer>
        </>
    );
}

export default Home;