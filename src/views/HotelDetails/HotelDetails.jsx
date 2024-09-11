import React from 'react';
import { useParams } from 'react-router-dom';
import { hotels } from '../../components/utils/data/data';
import "./HotelDetails.scss"

export const HotelDetail = () => {
  const { id } = useParams();
  const hotel = hotels.find(hotel => hotel.id === parseInt(id, 10));

  if (!hotel) {
    return <div>Hotel no encontrado</div>;
  }

  return (
    <div className="hotelDetail">
      <div className='hotelDetail__menu'>
        <p className='hotelDetail__brand'>Hotel</p>
        <div className='hotelDetail__menu--options'>
          <span>1</span>
          <span>1</span>
        </div>
      </div>


      <section className='hotelDetail__details'>
        <div className='hotelDetail__details--reservation'>
          <di className='hotelDetail__details--search'>
            <p className='hotelDetail__city'>FIND YOUR STAY</p>
            <p> <span>ico</span> <span>date</span></p>
            <p> <span>ico</span> <span>date</span></p>
            <p> <span>ico</span> <span>person</span></p>
          </di>
          <button className='hotelDetail__details--action'>reser</button>
        </div>

        <p className='hotelDetail__roomsTitle'>Out rooms</p>

        <div className='hotelDetail__rooms'>
          <div className='hotelDetail__rooms--content'>
            <img src={hotel.image} alt="" className='hotelDetail__rooms--image'/>
            <div>
              <p className='hotelDetail__rooms--title'>{hotel.name}</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet molestias at quibusdam rem dolore</p>
              <p className='hotelDetail__rooms--price'>$12 / nigth</p>
            </div>
          </div>
          <div className='hotelDetail__rooms--content'>
            <img src={hotel.image} alt="" className='hotelDetail__rooms--image'/>
            <div>
              <p className='hotelDetail__rooms--title'>{hotel.name}</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet molestias at quibusdam rem dolore</p>
              <p className='hotelDetail__rooms--price'>$12 / nigth</p>
            </div>
          </div>
          <div className='hotelDetail__rooms--content'>
            <img src={hotel.image} alt="" className='hotelDetail__rooms--image'/>
            <div>
              <p className='hotelDetail__rooms--title'>{hotel.name}</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet molestias at quibusdam rem dolore</p>
              <p className='hotelDetail__rooms--price'>$12 / nigth</p>
            </div>
          </div>
          <div className='hotelDetail__rooms--content'>
            <img src={hotel.image} alt="" className='hotelDetail__rooms--image'/>
            <div>
              <p className='hotelDetail__rooms--title'>{hotel.name}</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet molestias at quibusdam rem dolore</p>
              <p className='hotelDetail__rooms--price'>$12 / nigth</p>
            </div>
          </div>
          <div className='hotelDetail__rooms--content'>
            <img src={hotel.image} alt="" className='hotelDetail__rooms--image'/>
            <div>
              <p className='hotelDetail__rooms--title'>{hotel.name}</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet molestias at quibusdam rem dolore</p>
              <p className='hotelDetail__rooms--price'>$12 / nigth</p>
            </div>
          </div>
          <div className='hotelDetail__rooms--content'>
            <img src={hotel.image} alt="" className='hotelDetail__rooms--image'/>
            <div>
              <p className='hotelDetail__rooms--title'>{hotel.name}</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero amet molestias at quibusdam rem dolore</p>
              <p className='hotelDetail__rooms--price'>$12 / nigth</p>
            </div>
          </div>
        </div>
      </section>


      <div className='hotelDetail__hotel'>
        <div className='hotelDetail__overlayProfile'>
          <span>login</span>
          <span>image</span>
        </div>
        <img src={hotel.image} alt="" className='hotelDetail__img' />
        <div className='hotelDetail__overlay'>
          <h1 className='hotelDetail__name'>{hotel.name}</h1>
          <p className='hotelDetail__city'>City: {hotel.city}</p>
          {/* <p className='hotelDetail__qualification'>Calificación: {hotel.rating}</p> */}
        </div>
      </div>
    </div>
  );
};
