
import React from "react";

const Main = () => {
    return (
        <div className="main-div">
        <main className="Main">
          <section className="Starters" id="Starters">
            <h1>Starters</h1>
            <img src="https://www.thespruceeats.com/thmb/IzI21XI-Gg07LQnFEu57xYVnA7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spinach-and-artichoke-dip-4157518-07-8685813570f34ac89c090084c042266d.jpg" width="300px"/>
            <p>Artichoke Dip</p>

           <img src="https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-superJumbo.jpg"
                width="300" />
              <p>Garlic Bread</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg"
                width="300" />
              <p>Salad</p>
          </section>

          <section className="pizza">
            <h1>Pizza</h1>
            <img
                src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                width="300" />
              <p>Cheese</p>

              <img src="https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg" width="300" />
              <p>Pepperoni</p>

              <img
                src="https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg"
                width="300" />
              <p>Hawaiian</p>
          </section>

          <section className="Desserts">
            <h1>Desserts</h1>
            <img
                src="https://static01.nyt.com/images/2021/11/02/dining/dg-Tall-and-Creamy-Cheesecake/dg-Tall-and-Creamy-Cheesecake-threeByTwoMediumAt2X.jpg"
                width="300" />
              <p>Cheesecake</p>

              <img
                src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
                width="300" />

             <img
                src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
                width="300" />
              <p>Ice Cream</p>
          </section>
        </main>
        
        <footer className="footer">
            <a href="Starters">Back to top</a>
        </footer>
        </div>
        
        
    )
}

export default Main;