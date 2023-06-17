import moment from "moment";

async function availability(datetime, reservations, timetables) {
    try{
    
        
        let date = moment(datetime).format('YYYY-MM-DD HH:mm:ss')
        let  result ={
            available: true
        }
            // if ((date >= timetables.timetables[0].opening && date <= timetables.timetables[0].closing) ||
            //  (date >= timetables.timetables[1].opening && date <= timetables.timetables[1].closing) ){
            //     if((date >= reservations.reservations[0].reservationStart && date <= reservations.reservations[0].reservationEnd) ||
            //         (date >= reservations.reservations[1].reservationStart && date <= reservations.reservations[1].reservationEnd) || 
            //         (date >= reservations.reservations[2].reservationStart && date <= reservations.reservations[2].reservationEnd) ){
            //             return { available: false } 
            //         }else{
            //             return { available: true}                    
            //         }
            //     }
            // else{
            //     return { available: false}     
            // }  

            for(let timetable of timetables.timetables){
                if(date >= timetable.opening && date <= timetable.closing){
                    for(let reservation of reservations.reservations){
                        if( date >= reservation.reservationStart && date <= reservation.reservationEnd){
                            result.available = false
                        }else{
                           result.available = true
                        }
                    }               
                }else{
                    result.available = false
                }
            }

            return result
        
        } catch (e){
        throw e;
    }
    
}

export = 
{availability}