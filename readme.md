##Sample JavaScript Library and Use with TypeScript

This is a simple example of using TypeScript to create a single JavaScript file and a definition file of a library for use by external users.

In the `Helper` folder the library is created from the `source` folder and is output to the `output` folder.

In the `Site` folder the contents of the `Helper` `output` folder has been copied manually to the `libs` folder for use.  In the `js` folder a `app.ts` was created to create a Helper.Setup with proper parameters.  The Index page contains references to both the `helper.js` and the `app.js` along with a text box and a paragraph element.

This is just a simple sample and not something that should be considered as a best practice as it only proves it's possible to output multiple ts files into one and create a definition file for it.


The blog post this sample code was created for can be found at https://wipdeveloper.com/2015/09/04/intro-to-typescript-1-5-creating-a-library-to-share/
