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
```

# What is MicroFrontends(MFEs)?

> MFEs — microservices approach for modern web.

<h2 align="center">
  <img src="https://miro.medium.com/max/711/1*xNMI0FGE3VrasgfBjqgJ0g.png" width="600px" />
  <br>
</h2>

The idea behind Micro Frontends is to think about a website or web app as a composition of features which are owned by independent teams. Each team has a distinct area of business or mission it cares about and specialises in. A team is cross functional and develops its features end-to-end, from database to user interface.

> “An architectural style where independently deliverable frontend applications are composed into a greater whole”

In ThoughtsWorks — Technology Radar May 2020 Techniques, MFEs are in “Adopt” stage.

<h2 align="center">
  <img src="https://miro.medium.com/max/584/1*N_oY0BzwASucr8hMItYJNg.png" width="600px" />
  <br>
</h2>

We’ve seen significant benefits from introducing microservices, which have allowed teams to scale the delivery of independently deployed and maintained services. Unfortunately, we’ve also seen many teams create a front-end monolith — a large, entangled browser application that sits on top of the back-end services — largely neutralizing the benefits of microservices. Micro frontends have continued to gain in popularity since they were first introduced.

### Pros:

- Incremental upgrades
- Multiple teams contribute to the frontend
- Simple & Decoupled codebases
- Development speed should be a constant despite a growing application
  
<h2 align="center">
  <img src="https://miro.medium.com/max/715/0*LmCJLugVVZreMyQn.png" width="600px" />
  <br>
</h2>

- External developers should be able to extend the UI
- Different teams should be able to use their own tooling (Technology Agnostic)
  
<h2 align="center">
  <img src="https://miro.medium.com/max/715/0*0EpNcJFqfnHNjBpr.png" width="600px" />
  <br>
</h2>

May be you have done Angular vs React vs VueJS but now we talking about — Angular + React +VueJS — how they can work together.

<h2 align="center">
  <img src="https://miro.medium.com/max/520/1*sJX61ZffvE3cQxog33NXng.png" width="600px" />
  <br>
</h2>

### Cons:

Micro frontends are not perfect for every project. They are a solution for scaling development. If you only have a hand full of developers and communication is no issue the introduction of micro frontends won’t bring much value.

- Increased Payload size
- Environment differences
- Operational and governance complexity
- Works best for big teams (hundreds of developer)
- No global standards of development
  
#### Implementation example 1:

<h2 align="center">
  <img src="https://miro.medium.com/max/715/0*PpgcsJVxuxLw00sr.png" width="600px" />
  <br>
</h2>

Code at, [neuland/micro-frontends](https://github.com/neuland/micro-frontends/tree/master/1-composition-client-only)

#### Implementation example 2:

<h2 align="center">
  <img src="https://miro.medium.com/max/643/0*zmzU-I2qvK8egPt7.png" width="600px" />
  <br>
</h2>

Code at, [micro-frontends-demo](https://github.com/micro-frontends-demo)

### A JavaScript framework for front-end microservices:

[single-spa/single-spa](https://github.com/single-spa/single-spa)

Build micro frontends that coexist and can (but don’t need to) be written with their own framework. This allows you to:

- Use multiple frameworks on the same page without refreshing the page (React, AngularJS, Angular, Ember, or whatever you’re using)
- Write new code, possibly with a new framework, without rewriting your existing app
- Lazy load code for improved initial load time.
  
<h2 align="center">
  <img src="https://miro.medium.com/max/715/0*FYCMONW5nbNnGk6-.jpeg" width="600px" />
  <br>
</h2>

Micro frontends are indeed quite popular in the e-commerce sector. In 2012 the Otto Group, a Germany based mail order company and one of the world’s largest e-commerce players started to split up its monolith. The Swedish furniture company IKEA and Zalando, one of Europes biggest fashion retailers, moved to this model. Thalia, a German bookstore chain, rebuilt its e-reader store into vertical slices to increase development speed.
But micro frontends are also used in other industries. Spotify organizes itself in autonomous end-to-end teams they call Squads. Canopy, an American tax software startup and the sports streaming service DAZN use micro frontends to build its applications.

## Conclusion:

Microfrontends are sections of your UI, often consisting of dozens of components, that use frameworks like React, Vue, and Angular to render their components. Each microfrontend can be managed by a different team and may be implemented using its own framework. It is practical and suggested to use just one framework for all your microfrontends, although you may add additional frameworks when migrating or when experimenting.

> We see it as a proven approach that we should be using when it makes sense to do so.

[Source](https://shahbhargav.medium.com/what-is-micro-frontends-mfes-e77af73414af)