import React, { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/${currency}.json`);
            const json = await response.json();
            setData(json[currency]);
        };
        
        fetchData();
        
    }, [currency]);
    
    // console.log(response);
    // console.log(data);
    return data;
};

export default useCurrencyInfo;
