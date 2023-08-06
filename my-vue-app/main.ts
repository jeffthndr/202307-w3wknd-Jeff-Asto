/* eslint-disable no-unused-vars */

import { Component } from './components/component';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './components/main/main';

const components: Component[] = [
  new Header('#root'),
  new Main('#root'),
  new Footer('#root'),
];
