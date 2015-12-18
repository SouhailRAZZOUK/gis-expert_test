# GIS EXPERT TEST

## Description:

### Task:

```
Choose an open source JavaScript mapping library (e.g. OpenLayers, Leaflet) and use it to create a simple web application that displays the OpenStreetMap (http://www.openstreetmap.org/).
Apart from the map, there also should be a button, which when clicked, will center and zoom the map over the place you live.

The application should run on any HTTP server (like Apache, IIS etc.) and it shouldn't require any server-side scripts.
Apart from the chosen mapping library, you can use a reasonable number of any other client-side libraries and frameworks.
If using a build system (e.g. Grunt), you should provide all the necessary sources, libraries and set of instructions that will allow to build the project into the resulting HTML+JavaScript+CSS.
```

### Solution:

Used technologies:

- HTML5 pre-processor: [Jade](http://www.jade-lang.com/)
- CSS (small work, the frameworks used are already packed with necessary utilities)
- Javascript

Frameworks:

- [WinJS](http://try.buildwinjs.com) a framework made by Microsoft Open Source Technologies for managing the app code, and UI/UX ergonomy.
- [LeafletJS](http://leafletjs.com/)
- OSM: [OpenStreetMaps](http://www.openstreetmap.org/)

Workflow and Development tools:

- [NPM](https://www.npmjs.com/) Node Package Manager.
- [Grunt](http://www.gruntjs.com): Task manager.
- [Bower](http://www.bower.io): Package manager.
- HTTP-SERVER (Node Package): ['Mini' Local HTML Server](https://www.npmjs.com/package/http-server) (This was **ONLY** for performance reason, the solution is working on IIS and/or Apache), it's not included in the project build tools.

### Execution:

Project started on Friday, December 18th 2015, and ended on the same day.

Duration: 

- Research: 2 hours.
- Development: 3 hours (Continous).

Changes and corrections my occure if needed, I will keep the doc updates about this.

## How To Use:

**Note**: *Pre-Builded code is ignored from the repository*

In your Commande line run the following commands, and please respact the order. 

1- Clone this repository:

```git clone https://github.com/SouhailRAZZOUK/gis-expert_test.git```

2- Install build tools using NPM:

``` npm install ```

3- Install Packages using Bower:

``` bower install ```

4- Build project using Grunt:

``` grunt build ```

You can run ```grunt``` if you want Grunt to keep watching the chages you're making on the project.

Only the following files and folders (and their subfolders and files) have to be kept:

```
index.html
/bower_components/*
/images/*
/styles/*
/js/*

```

## Additional Thoughts and Conclutions:

This was one of my favorite tests, I've ever gone through :)

By far, the requested frameworks, witch I knew nothing about before today, are well documented, and easy to use.

LeafletJS is a beautifull piece of software, a lightweight and easy to use framework, I might consedire using it in some of my future projects.

OSM is just awesome work at its best, their documentation has to get  some make-up, but it's enough to start with, I doubt why their last update to the API was back in 2012 ??

Technologies I choosed to work with was for performancce reasons and ergonomy. 

I was thinking of using SASS and CoffeeScript/TypeScript but the project did not needed that much of over-flow. 