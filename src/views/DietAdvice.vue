<template>
    <ion-page>
      <ion-header>
        <ion-toolbar color="secondary" style="text-align: center;">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
          <ion-title>Diet Advice</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <!-- <ion-fab slot="fixed" vertical="center" horizontal="center">
          <ion-fab-button >
            <ion-icon size="large" :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab> -->
        <ion-grid style="background-color: white;">
            
            <ion-row>
                <img src="/public/dietary/61.png" alt="">
            </ion-row> 
            <ion-row class="" style="padding: 1rem;">
            
              <ion-text class="" style="text-transform: none;font-weight: normal;">
                As you embark on hemodialysis, various adjustments to your daily routine may be necessary. Your physician likely emphasized the potential need for dietary modifications. Your well-being will be influenced by factors such as:
              </ion-text>
              <ul>
                <li>adhering to a suitable diet</li>
                <li>following the prescribed hemodialysis treatments</li>
                <li>taking the medications as directed by our healthcare professional.
</li>
              </ul>

              <ion-grid>
                <ion-row>
                <ion-col size="auto"><img src="/public/dietary/62.png" alt="" width="100" height="150"></ion-col>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                  Given the altered functioning of your kidneys, which now struggle to efficiently eliminate waste products and excess fluids from your bloodstream, your dietary choices become a critical aspect of your treatment. Consequently, adjustments like fluid restriction and modifications in certain food consumption are imperative. The kidney dietitian at your dialysis 
                  center will assist you in devising a dietary plan tailored to your specific requirements.
                        </ion-text>
                </ion-col>
                
                </ion-row>
            </ion-grid>

              <br>
              <ion-text class="" style="text-transform: none;font-weight: normal;">
                In the interim, use this blogs as a reference until your dietitian formulates a personalized meal plan. Key recommendations includes:
              </ion-text>
              <ul>
                <li>incorporating more high-protein foods into your diet</li>
                <li>reducing intake of high-salt, high-potassium, and high-phosphorus foods</li>
                <li>familiarize yourself with the permissible fluid intake, encompassing beverages like coffee, tea, water, and any liquid foods at room temperature.
</li>
              </ul>
            </ion-row>

            <ion-row class="" >
              <img src="/public/protiens.jpg" alt="">
            </ion-row>
            <ion-row class="" style="padding: 1rem;">
              <ion-label style="margin-bottom: 1rem;font-size: x-large;">
                Salt & Sodium
              </ion-label>
            <ion-text class="" style="text-transform: none;font-weight: normal;">
For hemodialysis patients, managing salt (sodium) intake is crucial to maintaining overall health and well-being. Here are some dietary recommendations:
            </ion-text>
            <ul>
              <li>adhering to a suitable diet</li>
              <li>following the prescribed hemodialysis treatments</li>
              <li>taking the medications as directed by our healthcare professional.</li>
            </ul>
          </ion-row>
          
          <ion-label style="margin-bottom: 1rem;font-size: large;">
              Limit High-Sodium Foods
          </ion-label>

          <ion-grid style="margin-top: -25px;"  >
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Avoid processed and packaged foods, as they often contain high levels of sodium.</li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/64.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>
            
            <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Stay away from canned soups, sauces, and ready-to-eat meals, as they are typically 
                  high in sodium.</li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/65.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Processed meats, such as bacon, sausage, and deli meats, should be minimized due to their 
                     sodium content. </li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/66.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-label style="margin-bottom: 1rem;font-size: large;">
              Read Food Labels
            </ion-label>

             <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Pay close attention to food labels, and choose products labeled as low-sodium or sodium-free. </li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/67.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-label style="margin-bottom: 1rem;font-size: large;">
              Use Herbs and Spices
            </ion-label>

             <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Pay close attention to food labels, and choose products labeled as low-sodium or sodium-free.</li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/68.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Experiment with fresh herbs, garlic, onion, lemon juice, and vinegar to add variety to your dishes.
.</li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/69.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-label style="margin-bottom: 1rem;font-size: large;">
              Choose Fresh Foods
            </ion-label>
            <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Opt for fresh fruits and vegetables, as they are naturally low in sodium.</li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/70.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-label style="margin-bottom: 1rem;font-size: large;">
              Limit High-Sodium Condiments

            </ion-label>

            <ion-grid style="margin-top:-25px ;">
                <ion-row>
               
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                <ul>
                 <li>Be cautious with condiments like soy sauce, ketchup, and mustard, 
                  as they can contribute to increased sodium intake.</li>
                  <li>Consider using low-sodium alternatives or using them sparingly.</li>
               </ul>
                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/71.png" alt="" width="75" height="75"></ion-col>
                </ion-row>
            </ion-grid>

            <ion-label style="margin-bottom: 1rem;font-size: large;">
              Meat/Protein
            </ion-label>

            <ion-grid style="margin-top: ;">
                <ion-row>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                  Individuals undergoing dialysis should increase their protein intake. Consuming sufficient 
                  protein is beneficial for maintaining healthy blood protein levels and enhancing overall
                   well-being. Protein plays a vital role in preserving muscle strength, accelerating wound 
                   healing, fortifying the immune system, and promoting overall health. Aim to include a 
                   high-protein source such as meat, fish, poultry, fresh pork, or eggs in every meal, 
                   totaling around 8-10 ounces of high-protein foods daily.

                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/72.png" alt="" width="100" height="230"></ion-col>
                </ion-row>
            </ion-grid>
            
            <ion-row style="margin-top: 5px;">
              <ion-label style="margin-bottom: 1rem;font-size: large; margin-top: -50px;">
              To provide a visual reference:
            </ion-label>
             </ion-row>
            
               <ion-row ><img src="/public/dietary/73.png" alt="" ></ion-row>

               <ion-grid style="margin-top: ;">
                <ion-row>
                  <ion-text class="" style="text-transform: none;font-weight: normal;">
                    - 3 ounces equals the size of a deck of cards, a medium pork chop, a ¼ pound 
                    hamburger patty, half a chicken breast, or a medium fish fillet.
                    - 1 ounce is equivalent to 1 egg or ¼-cup egg substitute, ¼-cup tuna, 
                    ¼-cup ricotta cheese, one slice of low-sodium lunchmeat, one tablespoon 
                    of peanut butter, or half an ounce of nuts or seeds.
                    <br>  <br>
                    It's important to note that while peanut butter, nuts, seeds, dried beans, 
                    peas, and lentils contain protein, they are generally restricted due to their 
                    selevated levels of both potassium and phosphorus. 
                  </ion-text>
               </ion-row>
            </ion-grid>
          
            <ion-row>
                <img src="/public/dietary/74.png" alt="">
            </ion-row>    
            <ion-grid style="margin-top: ;">
                <ion-row>
                  <ion-text class="" style="text-transform: none;font-weight: normal;">
                    Unless there's a need to restrict calorie consumption for weight management or control 
                    carbohydrate intake for blood sugar regulation, you are free to consume as desired from 
                    the grains, cereals, and breads food group. These foods are rich in calories, and most 
                    individuals typically require 6 to 11 servings from this group daily.
                     <br><br>
                    To manage phosphorus intake, it is advisable to avoid "whole grain" and "high fiber" 
                    options such as whole wheat bread, bran cereal, and brown rice. Additionally, 
                    by moderating the intake of dairy-based products, you contribute to the protection
                    of your bones and blood vessels.
                  </ion-text>
               </ion-row>
            </ion-grid>

            <ion-row style="margin-top: 5px;">
              <ion-label style="margin-bottom: 1rem;font-size: large; ">
                Milk/Yogurt/Cheese

            </ion-label>
             </ion-row>
             <ion-grid style="margin-top: ;">
                <ion-row>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal;">
                  Restrict your consumption of milk, yogurt, and cheese to ½ cup of milk, ½ cup of yogurt, or 1 ounce
                   of cheese daily. The majority of dairy products have elevated phosphorus levels.
                   It's important to note that the phosphorus content remains consistent across all varieties of milk – whether skim, low fat, or whole!

                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/75.png" alt="" width="100" height="100"></ion-col>
                </ion-row>
            </ion-grid>
            <ion-row>
                <img src="/public/dietary/76.png" alt="">
            </ion-row>
            <ion-grid style="margin-top: ;">
                <ion-row>
                  <ion-text class="" style="text-transform: none;font-weight: normal;">
                   
                    Every fruit contains potassium, but specific fruits have higher potassium 
                    levels and should be restricted or completely avoided to safeguard your heart. 
                  </ion-text>
               </ion-row>
            </ion-grid>
            
            <ion-grid style="margin-top: ;">
                <ion-row>
                <ion-col><ion-text class="" style="text-transform: none;font-weight: normal; ">
                  Choose: <br>
Apple (1)<br>
Berries (½ cup)<br>
Cherries (10)<br>
Fruit cocktail, drained (½ cup)<br>
Grapes (15)<br>
Peach (1 small fresh or canned, drained)<br>
Pear, fresh or canned, drained (1 halve)<br>
Pineapple (½ cup canned, drained)<br>
Plums (1-2)<br>
Tangerine (1)<br>
Watermelon (1 small wedge)<br>

                        </ion-text>
                </ion-col>
                <ion-col size="auto"><img src="/public/dietary/77.png" alt="" width="100" height="250" ></ion-col>
                </ion-row>
            </ion-grid>

          

            
        </ion-grid>
      </ion-content>
    </ion-page> 
  </template>
  
  <script setup lang="ts">
  import { IonPage,
     IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonFab, 
    IonFabButton, 
    IonIcon,
    IonCol, 
    IonGrid, 
    IonRow,
    IonText,
    IonTextarea,
    IonLabel,
    IonButton,
    IonBackButton,
    IonButtons,
    IonImg
   } from '@ionic/vue';
   import { create, ellipsisHorizontal, stopwatch, water, listSharp, logOut, star,chevronForward } from 'ionicons/icons';
  import { add } from 'ionicons/icons';
  import { useAppWriteAccount } from '../composable/useAppWriteAccount';
  import { ref,onMounted } from 'vue';
  
  
  const { accountSession } =  useAppWriteAccount();
  
  
  const initialize = async () => {
       
       const response = await accountSession();
       console.log(response);
    };
  
      onMounted(()=>initialize())
  </script>
  
  <style>
   ion-content{
    --background: #4479AF;
    font-family: tt-lake-bold !important;
    text-transform: uppercase;
   }
  
   ion-col {
      text-align: center;
    }
    ion-button.output{
      width: 6rem;
      height: 6rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      /* background-color: #A6DAF1; */
    }
    ion-button.records{
      width: 6rem;
      height: 6rem;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      border-radius: 4rem !important;
      /* background-color: #A6DAF1; */
    }
    ion-button.mainButton{
        width: 15rem;
        height: 15rem;
        border-radius: 4rem !important;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
    ion-button.mainButton ion-icon{
      width:200px;
      height: 300px;
    }
    .mb-3{
      margin-bottom: 3rem;
    }
    .border-circle{
      border:5px solid white;
      padding: 2rem;
      border-radius: 10rem;
      border-style: dotted;
      animation: flip 2s;
        animation-iteration-count:1;
        animation-fill-mode: forwards;
        animation-direction:alternate;
    }
    .middle-icon{
      width:6rem;
      height: 6rem;
    }
    
    @keyframes flip {
        0%{
          transform: rotateY(200deg);
        }
        25%{
          transform: rotateY(360deg);
        }
        50%{
          transform: rotateY(200deg);
        }
        100%{
          transform: rotateY(360deg);
        }
        
      }
  </style>
  