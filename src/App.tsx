import './App.css'
import {Product} from "./components/product/Product.tsx";
import {useProducts} from "./hooks/useProduct.ts";
import {Loading} from "./components/loading/Loading.tsx";
import {ErrorMessage} from "./components/errorMessage/ErrorMessage.tsx";

function App() {
    const {products, loading, error} = useProducts()

    return (
        <div className="container mx-auto max-w-2xl pt-5 flex-col gap-7">
            {products.map(product => <Product product={product} key={product.id}/>)}
            {loading && <Loading/>}
            {error && <ErrorMessage error={error}/>}
        </div>
    )
}

export default App
