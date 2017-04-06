# ~~Yo:da~~ Yo:uiframework home page and documentation

A wroking demo - [here](http://10.148.44.84/target/dist/#/welcome).

#### Confluence [page](https://confluence.fx.srv.westpac.com.au/display/PS/UI+Framework)

This site:
Demos a ~~yo:da~~ yo:uiframework instance
Acts as a user guide
Shows global and project components
Has detailed instructions to get ~~yo:da~~ yo:uiframework working and explains the way to code 


## Nginx box 

##### Setup by 
* Peter Svehla (peter.svehla@westpac.com.au)

##### Admin
* Arun Baghel (arun.baghel@westpac.com.au)

# ~~Yo:da~~ Yo:uiframework  (uiframwork) 

## Contacts

##### Main
* Arun Baghel (arun.baghel@westpac.com.au)

##### Good Knowledge and key contributors

* Divpreet Singh (divpreet.singh@westpac.com.au) – Sol+ 
* Mahesh Sangwar (msangawar@westpac.com.au) – Branch Wow
* Harish Kanna (harish.kanna@westpac.com.au)  - HLTP

## Repository

Hosted on [BitBucket](https://bitbucketpilot.srv.westpac.com.au:50910/projects/CC-000/repos/yoda/browse).

### Rules:    
	 Develop main branch
	 Master for new major features – updated
	 Feature branches to be setup then pull requests sent to Arun for changes to Develop


## ~~yo:da~~ Yo:uiframework  moving forward

#### Common component level

* All Common components to have extensive Unit tests
* Text field component has 61 written by Harish and is a good example of where to start and what is expected/needed
* Have common components downloadable from the web – ie select the ones you want like GEL

#### Project Level

* All components to be reviewed by UI lead on project and merged back to **develop** branch
* All components to have working unit tests before can be added to the **develop branch**
* When a component has potential to be a global component (Used in multiple projects) this is brought to the attention of ~~yo:da~~ yo:uiframework architect

#### Scaffold Level

* Look at moving to later versions on Angular
* Typescript
* ES6
* Should we (plan to) be moving to Angular 2
* Ensure grunt job is standard across all yo:da instances (where possible)
* Is Yeoman the best way to build the project – more thought needed


## ~~yo:da~~ Yo:uiframework  community

It is vital that the UI devs keep meeting at regular intervals – I would suggest fortnightly – to keep ~~yo:da~~ yo:uiframework alive and kicking and the vision moving.

## Dynamic Form example (one of the common components)

In the last couple of weeks we built a dynamic form (http://10.148.44.60/target/dist/#/testform).

The way this works is when the page is loading a request is made to an API with a JSON response. This JSON response contains the form data. The form is then generated from this response including its label and validation.

The attached image – FORMS.png – explains this visually.

Working with other teams

Breck there is also a team in BT doing some good Angular work who are looking at Angular 2 and ES6. Contact is Freislich, Joshua (Joshua.Freislich@btfinancialgroup.com)

## Install
### Install Yeoman

```bash
npm install -g yo
```
### Link the generator

Into the generator directory
```
bash cd uiframework
npm i
npm link

bash cd uicommon
npm i
npm link

```
## Create a new project

Navigate where you want your project to be generated.

#### Install (all files and dependencies)

```
bash cd uiframework
yo uiframework:install
yo uicommon:install
yo uiframework:application
```
## Generate a component

```
bash
yo uiframework:component

```
## Generate a factory

```
bash
yo uiframework:factory

```

## Delete a component
delete modules and sub-modules

```
bash
yo uiframework:delete

```

_Follow the prompt thereafter_


## Steps to build UI war locally with maven using yoda:

	1. Install Maven 3.1.0 or higher
	2. Set environment variables pointing to latest maven repository
	3. Configure maven proxy in settings.xml
	4. Put correct mirror in maven settings.xml (<url>http://10.148.44.55:8081/nexus/content/repositories/public</url>)
	5. Update the below fields in the pom file attached 
		<artifactId>myapp-war</artifactId>
		<version>1.0</version>
	6. Run maven install

### Note: You might need to check the latest version of **yoda-starter-parent** from the repository. To be on a safer side download the project and do maven install for this as well.


## License

Apache
"# YoDa" 
"# YoDa" 
