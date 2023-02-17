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
  "body": " Python!   The Basics  As Python is not your first programming langauge, a good place to start is to think about that things you can do in other languages, and ask how might you do those things in Python?  x = 4 print(\"Good News Everyone!\", x)    $ python main.py  Good News Everyone! 4     "
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
