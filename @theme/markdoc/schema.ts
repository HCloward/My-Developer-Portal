export const functions = {
    isAfterDate: {
      transform(parameters) {
        const inputDateString = parameters[0]; 
        const inputDate = new Date(inputDateString);
  
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);  
  
        return inputDate < currentDate;
      }
    }
  }