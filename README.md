# geo-location-hook

A ReactJS hook to get the geo-location of the users.

## 🫶 Support
Liked it? You can show your support with a STAR(⭐).


🔧 Features:
  ⭐ Retrieves the user's current coordinates (latitude and longitude) using the Geolocation API.
  ⭐ Handles cases where geolocation is not supported or the user denies permission.
  ⭐ Returns a state object with loading status , coordinates and error, making it easy to manage location data in your components.


## How to use it?

You can use the project in this way:

### Install
```bash
# with npm
npm install geo-location-hook

# with yarn
yarn add geo-location-hook
```

### Usage

```javascript
import React from 'react';
import {useGeoLocation} from 'geo-location-hook';

const MyComponent = () => {
  const { loading, coordinates, error } = useGeoLocation();

  if (!loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
    </div>
  );
};

export default MyComponent;

```