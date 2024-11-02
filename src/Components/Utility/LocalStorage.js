import toast from "react-hot-toast";


const getStorageItem = () => {
    const getDatas = localStorage.getItem('appliedJob')
     if (getDatas) {
        return JSON.parse(getDatas)
     };
     return [];
}


const setStorageItem  = (id, title) => {
    const setData = getStorageItem()
    const data = setData.find(allData => allData === id)
    

    if (data) {
        setData.push(id)
        return(
            localStorage.setItem("appliedJob", JSON.stringify(setData)),
            toast.success('Applied Successfully')
        );
        
    
    }
}
export {getStorageItem, setStorageItem}