
export const useCreateDate = () => {
    const currentDate = new Date();

    let hrs = currentDate.getHours();
  
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    let min = currentDate.getMinutes();
    min = min < 10 ? "0" + min : min;

    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}, ${hrs}:${min} ${amPm}`;
    
    return date;
};