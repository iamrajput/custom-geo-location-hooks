# geo-location

A ReactJS hook to get the geo-location of the users.

## 🫶 Support
Liked it? You can show your support with a STAR(⭐).

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
import useGeoLocation from 'geo-location-hook';

const MyComponent = () => {
  const { loaded, coordinates, error } = useGeoLocation();

  if (!loaded) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
    </div>
  );
};

export default MyComponent;

```