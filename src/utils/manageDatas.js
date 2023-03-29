export const manageDatas = (newDatas, storedDatas) => {
    let localArray = [];

    const localDatas = JSON.parse(localStorage.getItem("employees"));
    if (localDatas) {
        localArray = localDatas;
    };
    
    localArray.push(newDatas);
    localStorage.setItem("employees", JSON.stringify(localArray));

    return localArray;
};

