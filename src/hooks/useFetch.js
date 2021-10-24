import { useEffect, useState } from 'react';

const useFetch = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])
    return [foods, setFoods]
}

export default useFetch
