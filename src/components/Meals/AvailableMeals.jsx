import React, { useState, useEffect } from 'react'
import classes from './AvailableMeal.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
    const [mealsData, setSetMealsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState(null)
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://food-react-880e7-default-rtdb.firebaseio.com/meals.json') 
            if (!response.ok) {
                throw new Error('Something went Wrong!')
            }
            const responseData = await response.json();
            const leadedMeals = []

            for (const key in responseData) {
                leadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,

                })
            }
            setSetMealsData(leadedMeals)
            setIsLoading(false)
        }
        fetchMeals().catch(err => {
            
            setHttpError(err.message)
        });
    }, [])

    return (
        <div>
            {httpError ? <div className={classes.mealError}>Error Fetching Data</div> :
                <div>
                    {isLoading ? <div className={classes.loading}>Loading....</div>
                        :
                        <section className={classes.meals}>
                            <Card>
                                <ul>
                                    {mealsData.map((item) => {
                                        return (
                                            <MealItem
                                                id={item.id}
                                                key={item.id}
                                                name={item.name}
                                                description={item.description}
                                                price={item.price}
                                            />
                                        )
                                    })}
                                </ul>
                            </Card>
                        </section>
                    }
                </div>}
        </div>
    )
}

export default AvailableMeals
