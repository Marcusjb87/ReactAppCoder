import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {itemId} = useParams();

    useEffect(() => {
        fetch("https://api.mercadolibre.com/items/" + itemId)
        .then((respuesta) => respuesta.json())
        .then((data) => {
            setItem(data);
        })
    }, [itemId]);

    return (
        <ItemDetail item={item} />      
    )
}

export default ItemDetailContainer;