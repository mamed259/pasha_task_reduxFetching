
export const fetchData = () => {

    return (dispatch) => {
        return fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            // .then(json => dispatch({ type: "LOADING" }))
            .then(json => dispatch({ type: "SUCCESS", data: json }))
            .catch(err => dispatch({ type: "ERROR", msg: "Error..." }))
    }

};
