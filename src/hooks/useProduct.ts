import {useEffect, useState} from "react";
import {IProduct} from "../models/models.ts";
import axios, {AxiosError} from "axios";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchProducts = async ()=> {
        try {
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(response.data)
            setLoading(false)
        } catch (err: unknown) {
            const error =  err as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(()=>{
        fetchProducts()
    }, [])
    return {products, loading, error}
}