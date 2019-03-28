//Solution 1

var toLowerCase = function(str) {
  return str.split("")
            .map((c) => {
              console.log(c);
              const u = c.charCodeAt(0);
              console.log(u);
              return u >= 65 && u <= 90 ? String.fromCharCode(u + 32) : c
            })
            .join("")
};

toLowerCase('IMRAN')


//Solution 2

var toLowerCase = function(str) {
    
    str = str.toLowerCase();
    return str;
    
};

toLowerCase('IMRAN');
