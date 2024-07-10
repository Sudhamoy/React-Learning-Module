import React from 'react'
import shopping from '../../assets/shopping.gif'
import "./LandingPage.css"

const parastyle={
  border:'1px solid black',
  borderRadius:'7px',
  fontWeight:'500'
}

function LandingPage() {
  return (
    <div className="LandingPage">

      <div className="header">
        <h1 id='header-title'>Welcome to my E-Commerce App.</h1>
        <img src={shopping} alt='shopping'/>
        <p>Happy Buying...</p>
      </div>

      <div className="main">
        <h2>What is this app?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis repudiandae consequuntur enim excepturi deleniti laborum assumenda explicabo quo accusantium dolor maiores et cum doloremque debitis, voluptas ratione atque obcaecati maxime. Totam quibusdam, fugiat atque fugit assumenda tenetur nam nemo vitae corporis vero cumque obcaecati molestiae provident unde quasi laboriosam debitis dolores rem incidunt quia! At cupiditate ratione eaque quasi soluta, dolorem deserunt corporis voluptate nam possimus cum ut quidem obcaecati minima aperiam? Minima asperiores sed libero labore, cupiditate commodi quod, nisi nesciunt, ad eum tempore? Vel quaerat et, minima similique voluptates quasi alias sint doloribus inventore aliquid magni provident tenetur odit autem cumque nam laborum assumenda voluptatum laudantium libero neque velit accusamus dignissimos totam? Ea harum vero deleniti fugit, perferendis libero illum minus rerum eveniet dolore, optio corporis? Itaque dolores maiores deserunt repudiandae. Sint incidunt possimus dolorem laudantium pariatur ipsum nesciunt culpa exercitationem voluptate id aliquid accusantium commodi reprehenderit tempore nostrum optio dolor similique animi illum, enim minus, quae voluptatum molestias. Nobis quibusdam ad sequi vero quia error harum. Impedit, aliquid? Laborum sit eligendi vel eaque similique voluptatem reiciendis tenetur quod ut necessitatibus tempora, eius ipsam exercitationem praesentium officia, delectus, porro repellat? Fuga nisi tenetur aliquam cumque atque hic, minus impedit velit nemo, qui dolores. Nesciunt pariatur, vel cum nulla aspernatur possimus incidunt recusandae, autem atque quasi molestiae qui quo nobis ipsam vero magnam, dignissimos perferendis aliquid. Voluptate, laboriosam incidunt aliquam exercitationem, laborum minima doloribus libero ea atque obcaecati sit harum totam necessitatibus nulla fugit ad laudantium! Quia nulla tempore amet, temporibus sit repellat facere eius dolore. Eligendi eveniet iste quibusdam? Nihil dolorum magnam beatae porro fuga voluptas nesciunt reprehenderit, sequi incidunt quo in quam eveniet ipsum, possimus rerum nisi tenetur praesentium illum cupiditate culpa, nostrum minima atque placeat debitis! Ea ab, modi, expedita delectus, laborum odio veritatis illo id dolore eum beatae ratione earum blanditiis sit omnis sunt asperiores rem aliquam facere voluptatum possimus repudiandae. Qui, esse aperiam aut, facere sint accusantium odio corrupti quidem officia voluptas, molestiae laudantium ducimus possimus dicta repellat dolores dolor nobis tempore culpa laboriosam consectetur sed soluta sunt incidunt. Beatae suscipit praesentium, ducimus quae, veniam vero vel nobis impedit magnam nisi culpa excepturi necessitatibus ea unde dolore dolorem dignissimos esse numquam, inventore omnis blanditiis? Nobis sunt suscipit accusamus quasi, cumque et aperiam aspernatur harum eum totam, nisi exercitationem voluptatibus voluptas veniam ratione voluptatem est corporis praesentium, mollitia dolorem quaerat! Totam sit quaerat ullam!</p>
      </div>

      <div className="section-2">
        <p style={parastyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit cum, soluta repellendus eius animi, voluptate dolorem dolor mollitia maxime quas omnis ea optio quod labore? Harum iure, dolorem, autem dolore molestiae, cupiditate culpa quam aperiam odio quaerat dignissimos obcaecati. Vel molestias eligendi labore temporibus illum fugiat dolore corrupti commodi.</p>
        <p style={parastyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit cum, soluta repellendus eius animi, voluptate dolorem dolor mollitia maxime quas omnis ea optio quod labore? Harum iure, dolorem, autem dolore molestiae, cupiditate culpa quam aperiam odio quaerat dignissimos obcaecati. Vel molestias eligendi labore temporibus illum fugiat dolore corrupti commodi.</p>
      </div>
        
    </div>
  )
}

export default LandingPage
