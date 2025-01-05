import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cloud1 from "../Clouds/cloud1.jpg";
import cloud2 from "../Clouds/cloud2.jpg";
import cloud3 from "../Clouds/cloud3.jpg";
import cloud4 from "../Clouds/cloud4.jpg";
import cloud6 from "../Clouds/cloud6.jpg";
import cloud7 from "../Clouds/cloud7.jpg";
import cloud8 from "../Clouds/cloud8.jpg";

function TheArchives() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const allProducts = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key.includes("saved")) continue;
            const value = localStorage.getItem(key);
            try {
                const parsedValue = JSON.parse(value);
                if (typeof parsedValue === "object" && parsedValue !== null) {
                    allProducts.push({ key, ...parsedValue });
                }
            } catch {
                console.warn(`Skipping invalid JSON for key: ${key}`);
            }
        }
        allProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setProducts(allProducts);
    }, []);

    const getProductImage = (background) => {
        switch (background) {
            case 1:
                return cloud1;
            case 2:
                return cloud2;
            case 3:
                return cloud3;
            case 4:
                return cloud4;
            case 5:
                return cloud6;
            case 6:
                return cloud7;
            case 7:
                return cloud8;
            default:
                return null;
        }
    };

    // Function to handle deleting a journal entry from localStorage
    const handleDelete = (key) => {
        localStorage.removeItem(key); // Remove the item with the specified key
        // After deletion, refresh the product list by updating the state
        setProducts((prevProducts) => prevProducts.filter((product) => product.key !== key));
    };

    return (
        <div className="journals-display">
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index} className="product-archives">
                        <Link to={`/dream/${product.key}`}>
                            <img
                                src={getProductImage(product.background)}
                                alt="cloud image"
                            />
                            <p className="title-display" style={{ color: product.fontColor || "#000000" }}>
                                <strong>Title:</strong> {product.title || "Untitled"}
                            </p>
                            <p className="date-display" style={{ color: product.fontColor || "#000000" }}>
                                <strong>Date:</strong> {product.date || "No Date Provided"}
                            </p>
                            <p className="category-display" style={{ color: product.fontColor || "#000000" }}>
                                <strong>Category:</strong> {product.category || "Not Selected"}
                            </p>
                            
                        </Link>
                        <button onClick={() => handleDelete(product.key)} className="delete-btn">
                            Delete
                        </button>
                        
                    </div>
                ))
            ) : (
                
                <p>No saved journals available. Add some to the archives!</p>

            )}
        </div>
    );
}

export default TheArchives;
