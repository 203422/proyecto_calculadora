# This is the grammar for basic arithmetic operations

expression -> null
    | expression _ "+" _ expression {% ([left, , , , right]) => left + right %}
    | expression _ "-" _ expression {% ([left, , , , right]) => left - right %}
    | expression _ "*" _ expression {% ([left, , , , right]) => left * right %}
    | expression _ "/" _ expression {% ([left, , , , right]) => left / right %}
    | "(" _ expression _ ")" {% ([, , expr]) => expr %}
    | number {% id %}

number -> [0-9]:+ {% ([digits]) => Number(digits.join('')) %}

_ -> %ws {% null %}