import React,{useState,useEffect} from 'react'

const useGeoLocation = () => {
   const [location,setLocation] = useState({
    loading:false,
    coordinates:{latitude:'',longitude:''}
   });


   //onSuccess
   const onSuccess = (location) => {
    setLocation({
        loading:true,
        coordinates:{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        }
    })
   }


  //onError
   const onError = (error) => {
    setLocation({
        loading:true,
        error
    })
   }

   useEffect(() => {
     if(!('geolocation' in navigator)){
        onError({
            code:0,
            message:'Geolocation not supported'
        })
     }
     navigator.geolocation.getCurrentPosition(onSuccess,onError);
   }, [])

   return location;
}

export default useGeoLocation