/*@@@@
@a Mastering extension in node JavaScript
@d Nov 8, 2018 at 3:37 PM
@tlid 181108143738
@kw extension,JavaScript,type

@metatxt I want to extend a type in in JavaScript so I need to learn how to do this in JavaScript
@turir http://afelia.jgwill.com/tlid/181108143738
@s Created
@CR 

@ECR
@CTlid 0

@Thanks https://davidwalsh.name/extend-prototypes
*/

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(term) {
    return this.substr(0, term.length) === term;
  };
}

//Extending Contains

if (!String.prototype.contains) {
  String.prototype.contains = function(term) {
    return this.indexOf(term) > -1;
  };
}

//Replaces all
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function(from, to) {
    var arr = this.split(from);
    var r = this.replace(from, to);

    arr.forEach(element => {
      r = r.replace(from, to);
    });
    return r;
  };
}
