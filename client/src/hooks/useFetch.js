import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (url) => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if (!res.ok) {
                setError('failed to fetch the data');
                // alert('Failed to fetch the data')
            }

            const result = await res.json();
            setData(result.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    return { data, error, loading }
}

export default useFetch