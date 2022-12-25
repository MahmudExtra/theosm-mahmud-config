import { gql } from "@apollo/client";
import { client } from "../../index";

export const getInitialBuoy =async()=>{
   const response = await client.query({
     query: gql`
       query Buoy {
         Buoy {
           name
           data {
             id
             name
             value
           }
           CO2 {
             data
             categories
           }
           Tide {
             data
             categories
           }
           wind
           date
           time
         }
       }
     `,
   });
    return response.data.Buoy;
}

export const getAllBuoys = async () => {
  const response = await client.query({
    query: gql`
      query AllBuoys {
        AllBuoys {
          id
          name
          data {
            id
            value
            name
          }
          lat
          lng
          wind
          date
          time
          CO2 {
            categories
            data
          }
          Tide {
            categories
            data
          }
        }
      }
    `,
  });
  return response.data.AllBuoys;
};
