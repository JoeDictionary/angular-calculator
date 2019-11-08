# `main` is the nonterminal that nearley tries to parse, so
# we define it first.
@{% function sigma(n, end, func) {
    let result = 0
    for(n; n <= end; n++){
        result += func
    }

    // return [n, end, func, result]
    return result
} %}

main -> AS {% function(d) {return d[0]; } %}

# We define each level of precedence as a nonterminal.

# Parentheses
P ->
    "\\left(" AS "\\right)" {% function(d) {return d[1]; } %}
    | "{" AS "}"            {% ([a, b, c]) => b %}
    | N                     {% id %}
    | "-" N                 {% ([a, b]) => -b %}

# Exponents
E -> 
    P "^" E  {% function(d) {return Math.pow(d[0], d[2]); } %}
    | P      {% id %}

# Multiplication and division
MD -> 
    MD ("\\cdot" | "\\times") E  {% function(d) {return d[0]*d[2]; } %}
    | MD "\\div" E                 {% function(d) {return d[0]/d[2]; } %}
    | E                            {% id %}

# Addition and subtraction
AS -> 
    AS "+" MD {% function(d) {return d[0]+d[2]; } %}
    | AS "-" MD {% function(d) {return d[0]-d[2]; } %}
    | MD        {% id %}

# A number or a function of a number
N ->
    float                       {% id %}
    | "\\frac" P P              {% ([a, b, c]) => (b) / (c) %}
    | "\\sin" P                 {% function(d) {return Math.sin(d[1]); } %}
    | "\\cos" P                 {% function(d) {return Math.cos(d[1]); } %}
    | "\\tan" P                 {% function(d) {return Math.tan(d[1]); } %}
    | "\\arcsin" P              {% function(d) {return Math.asin(d[1]); } %}
    | "\\arccos" P              {% function(d) {return Math.acos(d[1]); } %}
    | "\\arctan" P              {% function(d) {return Math.atan(d[1]); } %}
    | "\\sqrt[]" P              {% function(d) {return Math.sqrt(d[1]); } %}
    | "\\log_" P P              {% ([a, b, c]) => Math.log(c) / Math.log(b) %}
    | "\\pi"                    {% function(d) {return Math.PI; } %}
    | "e"                       {% function(d) {return Math.E; } %}
    | "\\sum_{n=" P "}^" P P    {% ([a, b, c, d, e]) => sigma(b, d, (n) => e) %}

# I use `float` to basically mean a number with a decimal point in it
float ->
    int "." int     {% function(d) {return parseFloat(d[0] + d[1] + d[2])} %}
	| int           {% function(d) {return parseInt(d[0])} %}
    | sumVar        {% id %}

sumVar ->
    "i"  {% id %}
    |"n" {% id %}

int -> [0-9]:+    {% function(d) {return d[0].join(""); } %}
