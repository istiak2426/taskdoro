import React, { useEffect } from 'react'
import { useState } from "react";
import List from "./List"

import {createCategory, createProduct, getProducts } from './apiCalls';


const Home = () => {

    const [products, setProducts] = useState([]);
    // const [categories, setCategories] = useState([])
    // const [term, setTerm] = useState(false);
    const [values, setValues] = useState({
        name: '',
        category: '',
    });

    const [ selector, setSelector]= useState({
        select:''
    });



    useEffect(() => {

        getProducts()
            .then((response) => {
                setProducts(response.data);
            })

        // getCategories()
        //     .then(response => {
        //         setCategories(response.data)
        //     })

    }, [values]);


    const {name,category} = values;

    const {select}= selector;

    const handleChange = (e) => {
            setValues({
                ...values,
                [e.target.name]: e.target.value,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        createProduct(values)
        setValues({name: '',category: ''})
        // setTerm(!term)
    }

    
    const handleChangeSelector = (e) => {
        setSelector({
            [e.target.name]: e.target.value,
    });
}


    const submitSelector = (e) => {
        e.preventDefault();
        createCategory(selector)
        setSelector({select: ''})
       
    }


    const productForm = () => (
        <form className="mb-3"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label className="text-muted">Task Name:</label>
                <input
                    name="name"
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    value={name}
                    required
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Chunk Size:</label>
                <select name="category" value={category} onChange={handleChange} className="form-control" required>
                    <option value="">----Select one----</option>
                    <option value="Heavy">Heavy</option>
                    <option value="Medium">Medium</option>
                    <option value="Light">Light</option>
                 

                    {/* {categories && categories.map(item => (
                        <option value={item._id} key={item._id}>{item.name}</option>
                    ))} */}
                </select>
                <br />

            </div>


            {/* <label>
                <input type="checkbox"
                    value={term}
                    onChange={() => setTerm(!term)}
                    required
                />
                &nbsp;&nbsp; Agree to term
            </label> */}
      
            <button className="btn btn-outline-primary" type="submit" >Save</button>
        </form>
    );


    const categoryForm = () => (
        <form className="mb-3"
            onSubmit={submitSelector}
        >
            <div className="form-group">
                <label className="text-muted">Selector:</label>
                <input
                    name="name"
                    onChange={handleChangeSelector}
                    type="text"
                    className="form-control"
                    value={select}
                    required
                />
            </div>


            <br />

            <button className="btn btn-outline-primary" type="submit" >Save</button>
        </form>
    );

    return (
       
        <div>
    
            <div className="row ">
                <div className="col-3"></div>
                <div className="col-6 ml-3">

                    <br/>
                    <br/>
                    <h2>Minimum Effort, Maximum Result</h2>

                    {productForm()}
                    <br />
                    {products.map((product) => (
                        <List
                            product={product}
                            key={product._id}
                        />
                    ))}
                </div>
                <div className="col-3"></div>


            </div>
            <div className="row ">
                <div className="col-3"></div>

                <div className="col-6">
                    <h1>*</h1>
                    <h1>***</h1>
                    <h1>*****</h1>
                </div>
      
                <div className="col-3"></div>


            </div>

            </div>





            
        
    
    );
};

export default Home;


