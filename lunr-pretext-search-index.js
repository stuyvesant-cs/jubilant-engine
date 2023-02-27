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
  "body": " Python!   Programming Environment  As Python is not your first programming langauge, a good place to start is to think about that things you can do in other languages, and ask how might you do those things in Python? But before we get to that, we should probably start with how to write and run a python program.  Python is an incredibly popular programming and as such, there are lot of different ways to write and run your programs. Most of these fall into 2 broad categoies either Integrated Development Environment (IDE) ) or Text Edtior + Terminal . For right now, we'll focus on the IDE approach  An IDE is just fancy talk for something you're already familiar with, since it is how you programmed in both NetLogo and Racket. An IDE is a computer program where you both write and run your code. When you used DrRacket , you would write your Racket code in the top pane, click Run and then see the result of your program in the bottom pane. The bottom pane also provided you with an interative console to test out small functions. If you want to use an IDE for Python, I highly suggest using Thonny , which provides an environment that will feel familiar. (Python also comes with its own IDE called Idle, which will be installed along with Python if you install from the main Python website.)     Getting Started  Now that you're ready to write and run code, let's get going! As a computer science instructor, I am legally required to start with \"hello, world\" :  print(\"Good News Everyone!\")    When run, you should see this:  Good News Everyone!    Ok, now that that's out of the way, let's get into some more interesting things. Actaully, we will start with the program above, as it does demonstrate the most useful function in Python, print() . At its core, print() will attempt to display whatver arguments you pass into it in the console, followed by a newline. What's quite nice about print() is that you can give it multiple arguments, separated by , and it will print each agrument to the console on one line, separated by spaces. So:  print(\"Hi\", 5)  Will output: Hi 5   With that out of the way, we can now focus on the common programming tools that we have seen before in Racket and NetLogo, so we can start Python on some familiar ground. Here's a reasonable list of things that could be done in both langauges:  Perform arithmetic operations on numbers.  Perform comparason operations on numbers.  Use boolean ( True, False ) values, perform boolean operations.  Make program decisions using conditional statements.  Write out own functions.  Run sections of code repeatedly.  We will look at all these tools in the next section, whith a slight detour at the beginning to discuss values, variables and data types.    Values & Varaiables   Literal Values  In code, a literal value is something whose value is exactly as it appears in code. For example, when you see a 51 in code, you know it represents the numeric value 51, you cannot assign it another value, or change it in any way. There are a few literal data types in Python, this is a good list to get started with:  Integers : Numbers (positive or negative), without a . . e.g. 33 , -24601  Float Points : Numbers (positive or negative) that contain a . (no numbers should have , s). e.g. 6.022  Strings : A series of characters placed inside quatation marks. In python, you can enclose single line strings in double quotes \"\" or single quotes '' , there is no difference between the two. If you want to have a multi-line string, you can use triple-double quotes \"\"\" \"\"\" . We'll go into much more detail on strings later.  Boolean Values : In python, booleans are represented as True and False .      Variables  A variable is a value that can (potentially) change while a program as runnning (as opposed to literals). Becuase variables can change, there are two different parts of any variable; its name and its value . When you need a variable in Python, you just type the name you want to give it, and assign it a value using = . Here are a few examples of variable creation & assignment:  s = \"ahoy!\" fred = True top_score = 100  A variable's name is important becuase it will allow us to keep track of the same piece of data regardless of how its value changes over time. Here are the rules for variable names in Python:  This is actaully a pretty good set of rules to help guide you when naming variables in any programming language. Some languages are less restrictive, and some may have occassional odd rules (like not being case sensitive), but if you're learning a new language and stick to theses guidelines, you'll probbaly be safe.    Names can only contain upper ( A-Z ) and lower ( a-z ) case letters, digits ( 0-9 ) and underscores ( _ ). Notable, this means no spaces in names!  Names cannot start with numeric digits.  Names are case sensitive. i.e. ypos and yPos would be two different variables.      Variable Types  A variable can represent any kind of data, and we call the kind of data that a variable refers to its type . When you assign a value to a variable, you are also giving that variable a type. In the example above the variable top_score is given the value 100 , which also means that top_score is an integer type.  Technically, this is called dynamic typing. That is to say Python figures out the type for your variables while the program is running. This is in contrast to other langauges (like Java, for example), where you have to explicitely declare the type for any variable before you use it. That is called static typing.    A variable's type helps Python keep track of what we're allowed to do with the variable. For example, since s is a string, we would not be able to use arithmetic operations on it, like s \/ 2 . If you tried to run that line in Python, you would get a TypeError , which is a pretty good name to help describe what went wrong.  At any point, you can reassign (using = ) a variable to any value you like, regardless of type. When you do this, it will update the type of the variable automatically. So the following code is valid:  s = \"this is a string!\" print(s) s = -84 print(s - 3)  Just to be clear, if we didn't have s = -84 , then the subsequent line would not work, resulting in a TypeError .  One last note about types. There is a special literal value in Python, None . One use of None is when you know you're going to need a variable, but you don't have a value for it. The type for None is, conveniently, NoneType . When you're starting out in Python, you shouldn't run into None , but its fairly easy to make a mistake that results in None as a value, at which point you'll get some kind of message that won't make any sense at all if you didn't know about None .     Arithmetic Operations  Back to our list of programming tools we've used before, the first item was Perform arithmetic operations on numbers . We took a slight detour to discuss variables and types, largely because those things will be useful in demonstrating the other programming tools. Python has the same basic arithmetic operations as Racket and NetLogo, namely:  + for addition . - for subtraction . * for multiplication . \/ for division . These operations work as you would expect. If you have two number values (either literals or variables), you can perform an operation on them using infix notataion (i.e. x + 5 , 9.76 - 4 ).  With one spectial exception, if you use 2 values of the same number type (integer or floating point), the result will be a value of the same type. If the types are mixed, the result will be a floating point. The one exception is \/ , which always returns a floating point value, regardless of whether the divsion could result in an integer value.   print(10 * 5) print(8.4 + 2.3) print(10 - 3.0) print(32 \/ 8) print(32 \/ 5)    50 10.7 7.0 4.0 6.4     There are also a few other arithmetic operators that Python offers that are not as universal amongst programing languages:  \/\/ for floor division. Unlike normal division, a \/\/ b will return the floor of . % for modulo. Given positive values, the result of a % b will be the remainder of . ** for exponentiation. . For these operations, the result will always match the type of the operands if the operands are the same, but will be a floating point in the case of mixed operands.   print(10 \/\/ 4) print(10 \/\/ -4) print(10 % 3) print(2**3.0)    2 -3 1 8.0       Comparason Operations  The second item on our list of programming tools we've used before, was Perform comparason operations on numbers . These operators take numbers as parameters and return boolean values based on the result.  > for greater than . >= for greater than or equal . < for less than . <= for less than or equal . == for equals . != for not equals . Most of theses are straighforward. The main thing you should pay attention to is the difference between = and == in python code. = is always for assignment, never for comparason. If you want to check the equality of two values, you must use == .    Boolean Operations  The third item on our list of programming tools we've used before, was Use boolean (True, False) values, perform boolean operations . We've already covered boolean values. Boolean operators take boolean values as parameters and return boolean values based on the result.  and : p and q is True when p and q are both  True , and False for all other cases . or : p or q is False when p and q are both  False , and True for all other cases . not : !p returns the opposite boolean value of p .    "
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
