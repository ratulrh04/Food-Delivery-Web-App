'use client'

import { useEffect, useState } from "react";

import RestuarantFooter from "./_components/RestuarentFooter";
import { useRouter } from 'next/navigation';
import RestaurantHeader from "./_components/RestuarantHeader";

export default function Home() {

  const [locations, setLocations] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [showLocation, setShowLocation] = useState(false);
  const router = useRouter()

  useEffect(() => {
    loadLocations();
    loadRestaurants();
  }, []);

  const loadLocations = async () => {
    let response = await fetch('/api/customer/locations');
    response = await response.json();

    if (response.success) {
      setLocations(response.result);
    }
  };

  const loadRestaurants = async (params) => {

    let url = "http://localhost:3000/api/customer?";

    if (params?.location) {
      url = url + "location=" + params.location;
    }

    if (params?.restaurant) {
      url = url + "&restaurant=" + params.restaurant;
    }

    let response = await fetch(url);
    response = await response.json();

    if (response.success) {
      setRestaurants(response.result);
    }
  };

  const handleListItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);

    loadRestaurants({ location: item });
  };

  return (
    <main>

      <RestaurantHeader/>

      <div className="main-page-banner">

        <h1>Food Delivery App</h1>

        <div className="input-wrapper">

          <input
            type="text"
            className="select-input"
            placeholder="Select Place"
            value={selectedLocation}
            onClick={() => setShowLocation(true)}
            readOnly
          />

          {
            showLocation && (
              <ul className="location-list">

                {
                  locations.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleListItem(item)}
                    >
                      {item}
                    </li>
                  ))
                }

              </ul>
            )
          }

          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurant"
            onChange={(event) =>
              loadRestaurants({
                restaurant: event.target.value
              })
            }
          />

        </div>

      </div>

      <div className="restuarant-list-container">

        {
          restaurants.map((item, index) => (

            <div onClick={()=>router.push('explore/'+item.name+"?id="+item._id)} className="restuarnt-wrapper" key={index}>

              <div className="heading-wrapper">
                <h3>{item.name}</h3>
                <h5>Contact: {item.contact}</h5>
              </div>

              <div className="address-wrapper">

                <div>{item.city}</div>

                <div className="address">
                  {item.address}, Email: {item.email}
                </div>

              </div>

            </div>

          ))
        }

      </div>

      <RestuarantFooter />

    </main>
  );
}