const getApiData = async () => {
    const response = await fetch("https://twinword-word-association-quiz.p.rapidapi.com/type1/?level=3&area=sat", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "twinword-word-association-quiz.p.rapidapi.com",
            "x-rapidapi-key": "74a833b20emsh77124847c9c6736p1d8798jsn24167f5f8926"
        }
    });
    if (!response.ok) return;
    const data = await response.json();
    return data;
}

export default getApiData;