import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    const goToUsers = () => {
        navigate("/users");
    }
    return(
        <div className="home">
            <Header></Header>
            <div className="home-container">
                <div className="home-content">
                    <h1>Discover Our Users Platform</h1>
                    <div className="home-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum qui sint exercitationem, labore facere obcaecati nesciunt molestias. Qui eius explicabo deleniti. Quam laudantium temporibus, quae sunt consequuntur fuga quos veniam?</p>
                        <button onClick={goToUsers}><strong>View Users</strong></button>
                    </div>
                </div>
                <img src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MjYyMDB8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NjY2NjcxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="" />
            </div>
            <Footer></Footer>
        </div>
    )
}