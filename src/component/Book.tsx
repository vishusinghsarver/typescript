import React, { useState } from "react"
import ViewDetail from "./ViewDetail"
interface FormValue{
    title:string,
    author:string,
    price:string
}
export interface Books {
    id:number
    title:string,
    author:string,
    price:string
}

const Book = () => {
    const [books, setBooks] = useState<Books[]>([])
    const [data,setData] = useState<FormValue>({
        title: "",
        author: "",
        price: ""
    })
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const {title,author,price} = data
        
        setBooks([...books, {id:Math.random(), title:title, author:author,price:price}])

    }
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = event.target
        setData({
            ...data, [name]:value
        })
    }
    return(
        <div>
            <div className="form-container">
                <form onSubmit = {handleSubmit}>
                    <label htmlFor="">title</label>
                    <input type="text" name="title" value ={data.title} onChange={handleChange}></input>
                    <label htmlFor="">author</label>
                    <input type="text" name="author" value ={data.author} onChange={handleChange}></input>
                    <label htmlFor="">price</label>
                    <input type="text" name="price" value ={data.price} onChange={handleChange}></input>
                    <button type="submit">
                        Add
                    </button>
                    <button type="submit">
                        update
                    </button>
                </form>

            </div>
            <ViewDetail books = {books} />
    
        </div>
    )

}

export default Book;