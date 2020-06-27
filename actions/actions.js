export const CURRENT_ID = "CURRENT_ID";
export const SCREEN_DATA = "SCREEN_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";

export const setCurrentId = (id = "") => {
    return {
        type: CURRENT_ID,
        id,
    };
};

export const setScreenData = (screen, navigation) => {
    return {
        type: SCREEN_DATA,
        payload: { screen: screen, navObj: navigation },
    };
};

export const getDataFromApi = (url) => {
    return (dispatch) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
            })
            .catch((error) => {
                dispatch({ type: FETCH_DATA_ERROR, payload: [] });
            });

        // setTimeout(() => {
        //     console.log("I got tracks");
        //     dispatch({ type: FETCH_DATA_SUCCESS, payload: [{ id: 1 }, { id: 2 }, { id: 3 }] });
        // }, 2000);
    };
};
