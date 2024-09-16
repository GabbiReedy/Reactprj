import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Food.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 
export default function Food1() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
 
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);
 
    const fetchMealsByCategory = (category) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(res => {
                setMeals(res.data.meals);
                setSelectedCategory(category);
            })
            .catch(error => {
                console.error(`Error fetching meals for category ${category}: `, error);
            });
    };
 
    const resetCategorySelection = () => {
        setSelectedCategory(null);
        setMeals([]);
    };
 
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
 
    const filteredMeals = meals.filter(meal => {
        return meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase());
    });
 
    return (
        <div className='container-fluid' id='food'>
            {selectedCategory ? (
                <>
                    <button className='btn btn-link mb-3' onClick={resetCategorySelection}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='50px'><path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-320c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3l0 41.7 0 41.7L459.5 440.6zM256 352l0-96 0-128 0-32c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29l0-64z"/></svg>
                    </button>
                    <h2 className="text-center mb-4">{selectedCategory}</h2>
                    <div className='row mb-20'>
                        <div className='col-md-5'>
                            <input
                                type='text'
                                placeholder='What do you want to Order...'
                                className='form-control'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center mt-5'>
                        {filteredMeals.map(meal => (
                            <div key={meal.idMeal} className='col-md-6 col-lg-3 mb-3'>
                                <div className="card text-center" id='foodcard1'>
                                    <img
                                        src={meal.strMealThumb}
                                        className='card-img-top img-fluid'
                                        alt={meal.strMeal}
                                    />
                                        <div className="card-body" id='foodcard'>
                                            <h5 className="card-title text-light">{meal.strMeal}</h5>
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='row justify-content-center mb-4'>
                    {categories.map(category => (
                        <div key={category.idCategory} className='col-md-auto mb-3 text-center' id='foodcard2'>
                            <button className='btn btn-link' onClick={() => fetchMealsByCategory(category.strCategory)}>
                                <img
                                    src={category.strCategoryThumb}
                                    className='img-fluid'
                                    alt={category.strCategory} width='250px' height='200px'
                                    style={{marginRight:'10px'}}
                                />
                                <br/>
                                <br/>
                                <hr/>
                                <button className='btn btn-danger'>{category.strCategory}</button>
                                
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}