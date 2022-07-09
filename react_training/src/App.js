import Header from "./components/Header";
import Layout from "./components/Layout";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";

import background from "./assets/bg.png";
import images from "./assets/img.png";

import POKEMONS from "./pokemon.js";

const App = () => {
    return (
        <>
            <Header title="Hello World" descr="Dima Gashuk"/>
            <Layout title="Layout 1" descr="Dima Gashuk" urlBg={background}>
                <p>12345</p>
                <p>12345</p>
                <p>12345</p>
                <p>12345</p>
            </Layout>
            <Layout title="Layout 2" descr="Dima Gashuk" colorBg="#e2e2e2">
                <div className="flex">
                    {
                        POKEMONS.map((item) => <PokemonCard key={item.id} name={item.name} img={item.img} id={item.id} type={item.type} values={item.values} />)
                    }
                </div>
            </Layout>
            <Layout title="Layout 3" descr="Dima Gashuk" urlBg={images}>
                <p>12345</p>
                <p>12345</p>
                <p>12345</p>
                <p>12345</p>
            </Layout>
            <Footer/>
        </>
    );
};

export default App;
