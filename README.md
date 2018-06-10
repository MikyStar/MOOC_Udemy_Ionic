# MOOC_Udemy_Ionic

## Description

In this repository, you can find the work I've done following [Paul Halliday's course on Udemy called _Learn Ionic 3 from scratch_](https://www.udemy.com/learn-ionic-3-from-scratch/learn/v4/overview).

## What I've learn

The most important part of the knowledge I get is in the code : Look for my commits names and the code associated to it

### Angular

#### Create an Angular project

```sh
ng new [Project name]
```

#### Structure of the folder

##### e2e

e2e is for 'End to end testing' it's different of the unit testing because it checks the userflow of the application.

Basically, it consists on checking the user experience, the flow and functionalities of the application like, will it goes to the page we wanted to if I'm doing this combinaisons of clicks ...

###### node_modules

It contains all the dependencies of the project

##### src

All the files directly link to the project

For instance, index.html is the very main page of the application

##### build

Appears after we build the app

It's like _the compilation_ of all our files in a language that the browser can understand

#### Run an Angular app

```sh
cd [folder of the project]

ng serve -o
```

It auto-reloads as you change the code

#### Add a component

```sh
ng generate component [name of the component]
```

This create all the files involved in the creation of a component and update the app.module.ts

The --dry-run flag at the end of a generation command specify that you just want a simulation of what will happen, it actually don"t make any creation.

#### Help

```sh
ng help generate
```

Gives the list of thing that the Angular CLI is able to generate such as enums, guards, class ...

#### Testing

```sh
ng test
```

Will run every tests inside the project

It usually opens a new page in the browser displaying the results but if it fails on it's only written on the CLI, the port in localhost where the page will be displayed is written in the CLI

The tests of each component are in the file containing 'specs.ts'

#### Deployement

```sh
ng build --prod
```

The --prod flag says it's for production

It basically compile all the code and optimize it to regular .js, .css and .html files so that the browser can understand it.

The compilation of all of that goes to the .dist folder

#### Angular's documentation online

```sh
ng doc [the angular thing I want to look up online]
```

#### Two-ways data binding

Need to use ngModel but first of all, in app.module.ts you need to import FormsModule

#### *ngIf else *ngFor

In the commit 20bdc59f58789e11a0b568d6debe73e95c12f2c2 we have seen that we can put the thing we want to display just after the if but for the else, we have to define the ng-template : Actually we can also do that for the very first if condition, the way I did is just a shorter way, but this shorter way doesn't exists for the else condition.

### Ionic

#### Create an Ionic project

```sh
ionic start [Project name] [Optional type of project] [optional --type=ionic[number]] [optional --no-git] [--no-link]
```

#### Listing all the kind of projects

```sh
ionic start --list
```

#### Run an app

With the browser
```sh
ionic serve
```

With a virtual device `needs the wanted SDK or the device wanted plugged to the computer`
```sh
ionic cordova platform add [android / ios] #First of all

ionic cordova run [android / ios] [for live reload -l] [--target="TARGET, iOS' version"]
```

To run in the browser directly in all the platforms we want, just do
```sh
ionic lab
```
It will basically allow us to use different user agents in the same page

#### Adding something to the app

```sh
ionic generate [optional thing to generate]
```

- Component
- Directive
- Page
- Pipe
- Provider
- Tabs

#### Ionic view

Upload the snapshot
```sh
ionic upload
```

#### Ionic DevApp

```sh
ionic serve -c
```

`Phone needs to be in same network as the computer`

If trouble, manually add the address and port specified in the CLI

#### Icons

Ther's a trick to automatically "export" our own splashscreen and icon to all resolution needed to iOS and Android :

1. Delete the content of the resources folder
2. Paste an icon and splash image file with .png or .psd extension
3.
```sh
ionic cordova resources
```
4. Source path doesn't exists ?
```sh
ionic cordova resources
```
#### Theming

In theme/variables.scss we can find variables that can be put in the html code like attributes and their volues

#### Page strusture

Every pages has an ion-header and a ion-content (and optionnaly an ion-footer)
