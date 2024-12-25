import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addImages } from "../utils/imageSlice";

const useImage = () => {
    const dispatch = useDispatch();

    const fetchQuotes = async () => {
        const data = await fetch('https://api.sampleapis.com/beers/ale');
        const json = await data.json();

        console.log(json);

        dispatch(addImages(json));
    }

    useEffect(() => {
        fetchQuotes();
    }, []);
}

export default useImage;
