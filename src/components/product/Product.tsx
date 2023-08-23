import {IProduct} from "../../models/models.ts";
import {useState} from "react";

type Props = {
    product: IProduct
}

export function Product({product}: Props) {
    const [details, setDetails] = useState(false)
    const btnClassName = ['px-4 py-2', details? 'bg-blue-400': 'bg-yellow-400']

    return (
        <div className="border rounded flex flex-col items-center py-2 mb-2">
            <img className="w-1/6" src={product.image} alt={product.title}/>
            <p>{product.title}</p>
            <span>{product.price}</span>
            <button onClick={()=> {
                setDetails(!details)
            }} className={btnClassName.join(' ')}>{details? 'Hide Details': 'Show Details'}</button>
            {details && <p className="text-center w-3/4">{product.description}</p>}
        </div>
    );
};