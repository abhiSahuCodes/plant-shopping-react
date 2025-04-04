import { createSlice } from '@reduxjs/toolkit';

import snakePlant from '../assets/snake-plant.jpg';
import lavender from '../assets/lavender.jpg';
import peaceLily from '../assets/peace-lily.jpg';
import rosemary from '../assets/rosemary.jpg';
import monsteraDeliciosa from '../assets/monstera-deliciosa.jpg';
import aloeVera from '../assets/aloe-vera.jpg';
import fiddleLeafFig from '../assets/fiddle-leaf-fig.jpg';
import echeveria from '../assets/echeveria.jpg';
import birdOfParadise from '../assets/bird-of-paradise.jpg'

const initialState = {
  plants: [
    {
      id: 1,
      name: 'Snake Plant',
      category: 'Air Purifying',
      price: 29.99,
      description: 'Low-maintenance plant known for its air-purifying qualities',
      image: snakePlant,
    },
    {
      id: 2,
      name: 'Lavender',
      category: 'Aromatic',
      price: 24.99,
      description: 'Fragrant herb known for its calming properties',
      image: lavender,
    },
    {
      id: 3,
      name: 'Peace Lily',
      category: 'Air Purifying',
      price: 34.99,
      description: 'Beautiful flowering plant that helps clean indoor air',
      image: peaceLily,
    },
    {
      id: 4,
      name: 'Rosemary',
      category: 'Aromatic',
      price: 19.99,
      description: 'Aromatic herb perfect for cooking and decoration',
      image: rosemary,
    },
    {
      id: 5,
      name: 'Monstera Deliciosa',
      category: 'Tropical',
      price: 39.99,
      description: 'Popular tropical plant with distinctive split leaves',
      image: monsteraDeliciosa,
    },
    {
      id: 6,
      name: 'Aloe Vera',
      category: 'Succulent',
      price: 22.99,
      description: 'Medicinal succulent known for its healing properties',
      image: aloeVera,
    },
    {
      id: 7,
      name: 'Fiddle Leaf Fig',
      category: 'Tropical',
      price: 45.99,
      description: 'Trendy tropical plant with large, violin-shaped leaves',
      image: fiddleLeafFig,
    },
    {
      id: 8,
      name: 'Echeveria',
      category: 'Succulent',
      price: 18.99,
      description: 'Beautiful rosette-forming succulent with colorful leaves',
      image: echeveria,
    },
    {
      id: 9,
      name: 'Bird of Paradise',
      category: 'Tropical',
      price: 49.99,
      description: 'Exotic tropical plant with striking orange and blue flowers',
      image: birdOfParadise,
    },
  ],
};

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {},
});

export const selectAllPlants = (state) => state.plants.plants;
export const selectPlantsByCategory = (state, category) =>
  state.plants.plants.filter((plant) => plant.category === category);

export default plantsSlice.reducer;