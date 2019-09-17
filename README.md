# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When I hit https://www.techtonic.com/ from the web browser application in my computer,   my computer starts asking,  “Can you find a set of files from Techtonic and send them to my computer?” More specifically, my browser is asking to be sent web pages built with HTML, otherwise known as web.html documents. Also included in my brower’s request is information about the file formats that my browser can accept.

My browser, which is considered the “client” in the client/server model of information delivery, decodes the uniform resource locator (URL) by first checking the prefix of the URL to see what type of resource is being requested. In this case, my computer detects that the resource is http:// (HyperText Transfer Protocol) which indicates the resource is a web page. Next, it gets the URL’s domain (techtonic.com), and asks the domain name system (DNS) to translate it into a unique location or internet protocol (IP) address.  An IP address is a combination of numbers that act as unique identifiers for any device that’s connected to the internet, similar to the way a house number and street mark the location of where someone lives.

The transmission control protocol (TCP), which is the language used by computers to communicate over the Internet, breaks the information contained in the request into “packets.” Packets are  smaller blocks of information, less than about 1,500 characters, that also contain other data that helps the packets travel across the Internet.

The packets travel through various levels of networks, computers, and communication lines before reaching the final destination. When the data is sent between two different networks, a series of switches, called routers, ensure the packets arrive at the correct destination. Routers do most of the work of directing Internet traffic, and they examine the packets to see where the data is headed. They calculate the best route and send each packet individually to another router, or several, closer to the packet’s final destination.

This is the beginning of a multi step journey for my browser’s request, but it’s basically what happens in that moment when I hit https://www.techtonic.com/.  

(Some of this information was paraphrased from the book “Web Coding and Development All in One,” by Paul McFedries.)


## From start to finish, how does data reach you to be rendered in the browser?

The journey continues as the packets arrive at the web server, or host,  that techtonic.com uses.  Servers are powerful computers that store webpages, data and/or server software. They “serve” the client by delivering information; they may also host information for multiple clients.

After the packets arrive, the host’s TCP recombines the packets into their original form. Next, the web server decodes the server request. The web server downloads a copy of the requested web page file and sends it back to the web browser via the same method as it arrived, although not necessarily along the same route.

The web browser decodes the web page file, meaning it looks for text to display, the instructions on how to display the text, and other resources such as images and fonts. For each of the requested resources, the web server locates the associated file and sends it to the browser. The browser gathers all the resources and displays the page in the browser’s content window.



## What code is rendered in the browser?

The code rendered in the browser is Hypertext Markup Language (HTML) from an HTML document, or web.html document. What the browser receives, however, could also be a PDF, image, or some other type of content. The coding in the HTML files tells the browser how it should display the text, graphics, links, and multimedia files on the home page. The HTML file itself doesn’t actually have the graphics, sound, multimedia files and other resources on it. Instead, it contains HTML references to those graphics and files, plus links to other websites or web resources.
(Paraphrased from the book “How the Internet Works,” by Preston Gralla).


## What is the server-side code’s main function?

The server is a machine at a remote location whose main function is to process web requests and send pages to the client; a client is typically considered to be any device connected to the Internet. Web servers wait for client request messages, process them when they arrive, and reply to the web browser with an HTTP response message. Most of the processing happens on the server and not on the client’s internet browser.

Servers can also performs these duties:
render pages to the client
process user input
user validation
saving and retrieving data
navigating to other pages

## What is the client-side code’s main function?

Though a client is typically considered to be any device connected to the internet, most of the time the client is actually a web browser like Google Chrome, Firefox, or Safari. Client side coding is done almost exclusively in the scripting language of JavaScript. Its main function is to interact directly with the page’s HTML elements like text boxes, buttons, list-boxes and tables to produce dynamic web content for the user.


## What is runtime?

Runtime is the period of time when a program is running or being executed.  When you start a program running in a computer, it’s considered “runtime” for that program. The term “runtime” can also describe software/instructions that are executed while your program is running. Low-level languages like C have a very small runtime. More complex languages like Objective-C, are said to have a much more extensive runtime.


## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

This question is indeed tricky and my best interpretation is that the question refers back to the first question about what happens when you hit https://www.techtonic.com/. During the process of what happens to the request, there is a connection between the client and server. This connection is maintained only during the actual exchange of information. But after a web page is transferred from the host, or server computer, the HTTP connection between that computer and the client is broken.  The information gets displayed on the computer screen in the web browser.  So in answer to the question, I’d say there is one instance of the client-side assets being created for each request that gets sent back to the client from the server.  


## How many instances of the server-side code are available at any given time?

Similar to the last question, it seems that  there should only be one instance of the server-side code at any given time.  Because there is never a live, constant connection between the page displayed in the client’s browser and a web or database server, there’s always a back and forth exchange of data, one exchange at a time. In this way, it ensures that you get the latest version of the file.


## How many instances of the databases connected to the server application are created?

As with the last two questions, I think there should also be just one instance created per request. The database returns the data to the web server in the form of a new HTML page. The server then sends the page back to the client browser as a new HTML page.
