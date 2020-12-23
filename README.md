# Microfrontends App

> A sample microfrontends app built with React (Container, Auth, Marketing) & Vue (Dashboard).

This project was originally developed by Stephen Grider and modified by [Arman Abkar](https://github.com/armanabkar/saas-microfrontends).

<h2 align="center">
  <img src="./screenshots.gif" alt="saas-microfrontends" width="600px" />
  <br>
</h2>

## Usage

### Install Dependencies

```bash
cd container
npm install

cd marketing
npm install

cd auth
npm install

cd dashboard
npm install
```

### Run

```bash
# Run all microfrontends together (with concurrently)
cd container
npm run dev

# You can also run each one separately e.g. for running only container :
cd container 
npm start
