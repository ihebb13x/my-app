import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
//import List from "../../components/List/List";
import "./Sortp.css";

const Sortprod = () => {
    const [maxPrice, setMaxPrice] = useState(1000);


    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>

                    <div className="inputItem"  >
                        <input
                            type="checkbox"

                        />
                        <label  >title</label>
                    </div>

                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0$</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                        <span>{maxPrice}$</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="asc"
                            value="asc"
                            name="price"
                        />
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input
                            type="radio"
                            id="desc"
                            value="desc"
                            name="price"
                        />
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img
                    className="catImg"
                    src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Sortprod;