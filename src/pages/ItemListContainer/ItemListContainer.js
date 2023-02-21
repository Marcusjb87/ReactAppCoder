import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (categoryId ? categoryId : "celular") + "&limit=30")
        .then((respuesta) => respuesta.json())
        .then((data) => {
            setItems(data.results);
        })
    }, [categoryId]);

    return (
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>
        </div>
    )
}

export default ItemListContainer