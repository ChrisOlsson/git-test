/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Theme from '../api/theme/theme.model';

Theme.find({}).remove()
  .then(() => {
    Theme.create({
      title: 'Theme 1',
      category: 'Cat',
      rating: '3.0',
      price: '$10'
    }, {
      title: 'Theme 2',
      category: 'Dog',
      rating: '4.0',
      price: 'Free'
    }, {
      title: 'Theme 3',
      category: 'Nature',
      rating: '2.6',
      price: '$5'
    }, {
      title: 'Theme 4',
      category: 'Cat',
      rating: '3.2',
      price: '$10'
    }, {
      title: 'Theme 5',
      category: 'Dog',
      rating: '3.5',
      price: '$10'
    });
  });

