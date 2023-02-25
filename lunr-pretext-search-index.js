var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "chapter-1",
  "level": "1",
  "url": "chapter-1.html",
  "type": "Chapter",
  "number": "1",
  "title": "The Command Line Interface",
  "body": " The Command Line Interface  "
},
{
  "id": "chapter-2",
  "level": "1",
  "url": "chapter-2.html",
  "type": "Chapter",
  "number": "2",
  "title": "Servers",
  "body": " Servers  "
},
{
  "id": "chapter-3",
  "level": "1",
  "url": "chapter-3.html",
  "type": "Chapter",
  "number": "3",
  "title": "HyperText Markup Language (HTML)",
  "body": " HyperText Markup Language (HTML)  "
},
{
  "id": "chapter-4",
  "level": "1",
  "url": "chapter-4.html",
  "type": "Chapter",
  "number": "4",
  "title": "Cascading Style Sheets (CSS)",
  "body": " Cascading Style Sheets (CSS)  "
},
{
  "id": "chapter-5",
  "level": "1",
  "url": "chapter-5.html",
  "type": "Chapter",
  "number": "5",
  "title": "Python!",
  "body": " Python!   Programming Environment  As Python is not your first programming langauge, a good place to start is to think about that things you can do in other languages, and ask how might you do those things in Python? But before we get to that, we should probably start with how to write and run a python program.  Python is an incredibly popular programming and as such, there are lot of different ways to write and run your programs. Most of these fall into 2 broad categoies either Integrated Development Environment (IDE) ) or Text Edtior + Terminal . For right now, we'll focus on the IDE approach  An IDE is just fancy talk for something you're already familiar with, since it is how you programmed in both NetLogo and Racket. An IDE is a computer program where you both write and run your code. When you used DrRacket , you would write your Racket code in the top pane, click Run and then see the result of your program in the bottom pane. The bottom pane also provided you with an interative console to test out small functions. If you want to use an IDE for Python, I highly suggest using Thonny , which provides an environment that will feel familiar. (Python also comes with its own IDE called Idle, which will be installed along with Python if you install from the main Python website.)     Getting Started  Now that you're ready to write and run code, let's get going! As a computer science instructor, I am legally required to start with \"hello, world\" :  print(\"Good News Everyone!\")    When run, you should see this:  Good News Everyone!    Ok, now that that's out of the way, let's get into some more interesting things. Actaully, we will start with the program above, as it does demonstrate the most useful function in Python, print() . At its core, print() will attempt to display whatver arguments you pass into it in the console, followed by a newline. What's quite nice about print() is that you can give it multiple arguments, separated by , and it will print each agrument to the console on one line, separated by spaces. So:  print(\"Hi\", 5)  Will output: Hi 5   With that out of the way, we can now focus on the common programming tools that we have seen before in Racket and NetLogo, so we can start Python on some familiar ground. Here's a reasonable list of things that could be done in both langauges:  Perform arithmetic operations on numbers.  Perform comparason operations on numbers.  Use boolean ( True, False ) values, perform boolean operations.  Make program decisions using conditional statements.  Write out own functions.  Run sections of code repeatedly.  We will look at all these tools in the next section, whith a slight detour at the beginning to discuss values, variables and data types.    Values & Varaiables   Literal Valuse  In code, a literal value is something whose value is exactly as it appears in code. For example, when you see a 51 in code, you know it represents the numeric value 51, you cannot assign it another value, or change it in any way. There are a few literal data types in Python, this is a good list to get started with:  Integers : Numbers (positive or negative), without a . . e.g. 33 , -24601  Float Points : Numbers (positive or negative) that contain a . (no numbers should have , s). e.g. 6.022  Strings : A series of characters placed inside quatation marks. In python, you can enclose single line strings in double quotes \"\" or single quotes '' , there is no difference between the two. If you want to have a multi-line string, you can use triple-double quotes \"\"\" \"\"\" . We'll go into much more detail on strings later.  Boolean Values : In python, booleans are represented as True and False .      Variables  A variable is a value that can (potentially) change while a program as runnning (as opposed to literals). Becuase variables can change, there are two different parts of any variable; its name and its value . A variable's name is important becuase it will allow us to keep track of the same piece of data regardless of how its value changes over time. Here are the rules for variable names in Python:  Names can only contain upper ( A-Z ) and lower ( a-z ) case letters, digits ( 0-9 ) and underscores ( _ ). Notable, this means no spaces in names!  Names cannot start with numeric digits.  Names are case sensitive. i.e. ypos and yPos would be two different variables.    This is actaully a pretty good set of rules to help guide you when naming variables in any programming language. Some languages are less restrictive, and some may have occassional odd rules (like not being case sensitive), but if you're learning a new language and stick to theses guidelines, you'll probbaly be safe.      "
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
