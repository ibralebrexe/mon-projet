import axios from "axios";
import {Request, Response} from 'express';
import moment from "moment";
import reservationService from "./reservation.service";



export const availability = async (req: Request, res: Response) => {
    try {


      const datetime: string = req.params.datetime;

      if (!moment(datetime, moment.ISO_8601, true).isValid()) {
        res.status(400).json({ "error": "wrong format for param startDatetime" });
        return;
     }

    
      const reserve = await axios.get('http://localhost:8080/reservations?date=2023-06-17&resourceId=1337');
      const reservations = reserve.data;

      const time = await axios.get('http://localhost:8080/timetables?date=2023-06-17&resourceId=1337');
      const timetables = time.data;
      
    
   
      const response = await reservationService.availability(datetime, reservations, timetables);
      return res.send(response);

            
      
    } catch (e) {   
      
    }

};


