import { useMemo } from "react"

export default function Header({cart, removeFromCart, increaseQuantity, decreaseQuantity, cleanCart}){

    //state derivado 
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const getTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart])

    return (
    <>
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html" className="logo-container">
                            <img className="img-fluid logo-img" src="./img/logo-lml.png" alt="imagen logo" />
                            <h3>Guitar LML</h3>
                        </a>
                    </div>
                    <aside className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>
                                ) : (
                                    <>
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map(guitar => (
                                                <tr key={guitar.id}>
                                                    <td>
                                                        <img className="img-fluid" src={`./img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                    </td>
                                                    <td>{guitar.name}</td>
                                                    <td className="fw-bold">
                                                            ${guitar.price}
                                                    </td>
                                                    <td className="flex align-items-start gap-4">
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => decreaseQuantity(guitar.id)}
                                                        >
                                                            -
                                                        </button>
                                                            {guitar.quantity}
                                                        <button
                                                            type="button"
                                                            className="btn btn-dark"
                                                            onClick={() => increaseQuantity(guitar.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger"
                                                            type="button"
                                                            onClick={() => removeFromCart(guitar.id)}
                                                        >
                                                            X
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <p className="text-end">Total pagar: <span className="fw-bold">${getTotal}</span></p>
                                    <button className="btn btn-dark w-100 mt-3 p-2" onClick={() => cleanCart()}>Vaciar Carrito</button>
                                    </>
                                )}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </header>
    </>
    )
}