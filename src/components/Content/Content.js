import React from 'react'
import styles from './Content.module.css'
import Features from '../Features/Features'

const Content = () => {

  const dataHealthy = [  
    {id:0, emoji: `🍋`, text: `Support Heart Health.
    Help Control Weight. 
    Prevent Kidney Stones. 
    Protect Against Anemia. 
    Reduce Cancer Risk. 
    Improve Digestive Health.
    Yellow power`} , 
    {id:1, emoji: `🍎`, text: `May Lower High Cholesterol and Blood Pressure. 
    Eating Foods With Fiber, Including Apples, Can Aid Digestion. 
    Apples Can Support a Healthy Immune System. 
    Apples Are a Diabetes-Friendly Fruit. 
    The Antioxidants in Apples May Play a Role in Cancer Prevention. 
    Eating Apples Can Support Healthy Weight Loss.
     Apples May Help Prevent Alzheimer’s Disease`}, 
    {id:2, emoji: `🥑`, text: `Reduces risk of heart disease.
    May support brain health.
    Good for the gut.
    Aids digestion.
    Helps optimize nutrient absorption.
    Supports eye health.
    May aid in weight management`},
    {id:3, emoji:`🍄`, text:`Provide immune support*
    Full of antioxidants*
    Support a healthy inflammation response*
    Help to balance blood sugar*
    Support brain health and cognition*
    Support the nervous system*
    Increase energy and stamina` } ];

    const dataWatchout = [
      {id:0, emoji: `🍺`, text: `It contributes to our daily nutrient intake.
      It may make your heart healthier.
      It may build stronger bones.
      It may boost brain power.
      It cleans your teeth.
      It may reduce inflammation.
      It may help you live longer.
    Yellow power`} ,{id:1, emoji: `🍷`, text: `Helps Fight Heart Disease. 
    Corrects Cholesterol Levels.
    Lowers Blood Sugar.
    Maintains Memory Function.
    Fights Certain Cancers.
    Controls Fat Cells.
    Protects Your Pearly Whites`} ,{id:2, emoji: `🍸`, text: `Vodka is a cure-all.
    It can relieve stress.
    It's heart-healthy.
    It can be used as a skincare product.
    It contributes to oral hygiene.
    It can alleviate symptoms caused by arthritis.
    It reduces risks associated with diabetes`} ,
    ];

  return ( <>
          <div loading="lazy" className={styles['content_hero']}>
            <p>Choose your trip</p>
          </div>
          <br/>
          
          <div className={styles['features']}>
            <Features textTitle={'Healthy'} items={dataHealthy} clasx={'items-4'} />
            
            <Features textTitle={'Hey Ho, lets go'} items={dataWatchout} clasx={'items-3'}/>
            
            {/* <Features textTitle={'Down the rabbit hole'} items={[`🍄`, `🍬`]} clasx={'items-2'}/> */}
          </div>
        </>
  )
  
}

export default Content