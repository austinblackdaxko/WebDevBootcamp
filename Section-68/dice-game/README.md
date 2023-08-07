# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Requirements for our dice game

A set components for :
- Play a dice game with numDice number of dice
- Shows a win message when total equals goal
- A "roll again" button that re-rolls all the dice

### State Design Principle

Lift state as high as needed - but no higher

Where should the dice-rolls state live?
- App: don't need, so shouldn't lift it
- LuckyN: This is the game itself!
- Dice: should just be about showing a hand
- Die: need to know roll total; not just for one


### Decoupling logic from presentation

Generally, aim to have components be one of two types:
- Presentational
- - Doesn't have state; is primarily about appearance/UI
- Logical
- - Has state or related logic; isn't about a specific UI

