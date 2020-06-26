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

export const getDataFromApi = () => {
    return (dispatch) => {
        fetch(
            "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0"
        )
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
