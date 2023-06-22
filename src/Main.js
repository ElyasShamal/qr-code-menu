
import React from "react";
import AddBtn from "./AddBtn";

const Main = () => {
    return (
        <div className="main-div">
        <main className="Main">
          <section className="Starters" id="Starters">
            <div>
          <h1>Starters</h1>
          </div>

            <div className="container-img">
            <div>
              <img
                src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
                width="300" />
                <p>Ice Cream</p>
                <AddBtn />
                </div>
    
            <div>
           <img src="https://static01.nyt.com/images/2018/12/11/dining/as-garlic-bread/as-garlic-bread-superJumbo.jpg"
                width="300" />
              <p>Garlic Bread</p>
              <AddBtn />
              </div>

              <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/1200px-Salad_platter.jpg"
                width="300" />
              <p>Salad</p>
              <AddBtn />
              </div>
              </div>

          </section>

          <section className="pizza">
            <h1>Pizza</h1>
            <div className="container-img">
            <div>
            <img
                src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                width="300" />
              <p>Cheese</p>
              <AddBtn />
              </div>
              <div>
              <img src="https://www.jennycancook.com/wp-content/uploads/2013/02/PeppPizza_600.jpg" width="300" />
              <p>Pepperoni</p>
              <AddBtn />
              </div>
              <div>
              <img
                src="https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg"
                width="300" height='200px' />
              <p>Hawaiian</p>
              <AddBtn />
              </div>
              </div>
          </section>

          <section className="Desserts">
            <h1>Desserts</h1>

            <div className="container-img">
                <div>
            <img
                src="https://static01.nyt.com/images/2021/11/02/dining/dg-Tall-and-Creamy-Cheesecake/dg-Tall-and-Creamy-Cheesecake-threeByTwoMediumAt2X.jpg"
                width="300" height='220px' />
              <p>Cheesecake</p>
              <AddBtn />
              </div>
              
              <div>
              <img
                src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
                width="300" />
                <p>Ice Cream</p>
                <AddBtn />
                </div>

             <div>  
             <img
                src="https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg"
                width="300"/>
              <p>Ice Cream</p>
              <AddBtn />
              </div> 

              </div>
          </section>
        </main>
        
        <footer className="footer">
            <a href="Starters">Back to top</a>
        </footer>
        </div>
        
        
    )
}

export default Main;