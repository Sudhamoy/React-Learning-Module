import React from 'react';
/* import logo1 from '../assets/logo1'; */
import avatar1 from '../assets/avatar1.jpeg';
import avatar2 from '../assets/avatar2.jpeg';
import avatar3 from '../assets/avatar3.jpeg';
import avatar4 from '../assets/avatar4.jpeg';

import "./Main.css"

function Main() {

  const information=[
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "first_name": "Michael",
      "last_name": "Lawson",
      "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "first_name": "Tobias",
      "last_name": "Funke",
      "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "first_name": "Byron",
      "last_name": "Fields",
      "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
  ]

/*  https://reqres.in/api/users?page=2 */

  return (
    <>
    <hr/>
    <div className="paragraph">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam harum magni dolor adipisci similique repellendus sapiente hic ipsa omnis distinctio, cum iure reprehenderit odit excepturi pariatur mollitia maiores, consequuntur quibusdam quis. Vero rerum impedit facilis accusamus quidem in aliquam suscipit, laudantium numquam, voluptatem dolores velit ad ipsum, dolorem labore ullam amet doloremque recusandae quisquam aliquid. Laudantium commodi, quibusdam consequuntur sapiente molestiae maxime et, temporibus quaerat minus magnam, dicta quisquam numquam possimus provident assumenda libero. Quisquam cumque quos commodi, fuga dolor vitae rerum consequatur error ratione sunt vel ipsam ut adipisci laudantium eum quasi assumenda! Unde pariatur dicta ad nobis natus reprehenderit repudiandae quisquam cum repellat cumque, architecto voluptatibus veniam quam quia at magni quidem ut laboriosam dolor accusamus ducimus! Temporibus, eius voluptates. Amet qui illo, sunt tempora enim itaque placeat fugit eum reprehenderit, distinctio nesciunt optio nemo minima molestias mollitia. Eos exercitationem commodi et beatae dolore nihil molestias pariatur omnis nesciunt deleniti, officia magnam. Ab fugit labore esse. Dolore et, ipsum necessitatibus numquam officiis minus facere explicabo fugiat est odit doloremque veritatis, cumque at maiores possimus cum voluptates natus dignissimos quam velit ipsa. Voluptates, nulla odit vero tempora id voluptatum eos soluta facere, enim repellat labore sunt praesentium, autem porro amet cumque. Sint omnis mollitia atque temporibus ab id expedita? Harum ratione dicta sequi vitae, voluptate aspernatur. Adipisci corrupti ab hic! Minima dolorem omnis blanditiis perferendis, provident unde placeat delectus quibusdam officia eum porro minus, esse natus consequatur expedita sapiente similique exercitationem quod rerum eveniet voluptas. Maiores atque deleniti eius cupiditate sunt in, velit porro eum mollitia voluptates consectetur ipsam aut sint unde asperiores ab qui dolor totam quas eveniet consequuntur eos alias consequatur dolores? Provident id voluptate, minima assumenda laborum dignissimos voluptas explicabo voluptatibus laboriosam voluptatum harum sint, vel error distinctio amet deserunt rerum! Nihil et pariatur rerum veritatis?</p>
      <br/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi doloremque quod quam fuga praesentium minus natus consectetur autem deserunt illum neque, suscipit, quis dolorum amet veritatis impedit possimus eligendi. Ab!</p>
    </div>

    <div className="profiles">
      <div className="user">
        <img src={avatar1} alt="avatar1"/>
        <span>{information[0].id}</span>
        <p>{`${information[0].first_name} ${information[0].last_name}`}</p>
        <span>{information[0].email}</span><br/>
      </div>
      <div className="user">
        <img src={avatar2} alt="avatar2" />
        <span>{information[1].id}</span>
        <p>{`${information[1].first_name} ${information[1].last_name}`}</p>
        <span>{information[1].email}</span><br/>
      </div>
      <div className="user">
        <img src={avatar3} alt="avatar3" />
        <span>{information[2].id}</span>
        <p>{`${information[2].first_name} ${information[2].last_name}`}</p>
        <span>{information[2].email}</span><br/>
      </div>
      <div className="user">
        <img src={avatar4} alt="avatar4" />
        <span>{information[3].id}</span>
        <p>{`${information[3].first_name} ${information[3].last_name}`}</p>
        <span>{information[3].email}</span><br/>
      </div>
    </div>
    </>
  )
}




export default Main



/*
Displaying of data using {} in profiles section
*/
