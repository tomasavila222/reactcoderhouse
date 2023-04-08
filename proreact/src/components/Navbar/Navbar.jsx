import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <CartWidget cantcarrito={0}/>
        </div>
    );
}

export default Navbar;
