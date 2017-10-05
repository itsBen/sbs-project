/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import { getTotalPrice, capitalize } from '../index';

it('returns total price of 3 products 2.50 each', () => {
  const products = [{ price: 2.5 }, { price: 2.5 }, { price: 2.5 }];
  const tree = getTotalPrice(products);
  expect(tree).toEqual((2.5 * 3).toFixed(2));
});

it('returns total price of 4 products 1.50, 5.40, 3.50, 6.40 each', () => {
  const products = [
    { price: 1.5 },
    { price: 5.4 },
    { price: 3.5 },
    { price: 6.4 },
  ];
  const tree = getTotalPrice(products);
  expect(tree).toEqual((1.5 + 5.4 + 3.5 + 6.4).toFixed(2));
});

it('returns total price of 3 products 2.50 each with string values', () => {
  const products = [{ price: '2.50' }, { price: '2.50' }, { price: '2.50' }];
  const tree = getTotalPrice(products);
  expect(tree).toEqual((2.5 * 3).toFixed(2));
});

it('returns total price of 3 products 2.00 each with int values', () => {
  const products = [{ price: 2 }, { price: 2 }, { price: 2 }];
  const tree = getTotalPrice(products);
  expect(tree).toEqual((2 * 3).toFixed(2));
});

it('capitalize one word', () => {
  const tree = capitalize('alepa');
  expect(tree).toEqual('Alepa');
});

it('capitalize a sentence', () => {
  const tree = capitalize('alepa is a grocery store');
  expect(tree).toEqual('Alepa is a grocery store');
});
