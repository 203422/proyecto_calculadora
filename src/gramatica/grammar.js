function id(x) { return x[0]; }

const grammar = {
   Lexer: undefined,
   ParserRules: [
      {"name": "expression", "symbols": ["term", "_", {"literal":"+"}, "_", "expression"], "postprocess": ([left, , , , right]) => left + right},
      {"name": "expression", "symbols": ["term", "_", {"literal":"-"}, "_", "expression"], "postprocess": ([left, , , , right]) => left - right},
      {"name": "expression", "symbols": ["term"], "postprocess": id},
      {"name": "term", "symbols": ["factor", "_", {"literal":"*"}, "_", "factor"], "postprocess": ([left, , , , right]) => left * right},
      {"name": "term", "symbols": ["factor", "_", {"literal":"/"}, "_", "factor"], "postprocess": ([left, , , , right]) => left / right},
      {"name": "term", "symbols": ["factor"], "postprocess": id},
      {"name": "factor", "symbols": [{"literal":"("}, "_", "expression", "_", {"literal":")"}], "postprocess": ([, , expr]) => expr},
      {"name": "factor", "symbols": ["number"], "postprocess": id},
      {"name": "number$ebnf$1", "symbols": [/[0-9]/]},
      {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
      {"name": "number", "symbols": ["number$ebnf$1"], "postprocess": ([digits]) => Number(digits.join(''))},
      {"name": "_$ebnf$1", "symbols": [/[ \t\n\r]*/], "postprocess": id},
      {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": null}
   ],
   ParserStart: "expression"
}

export const { ParserRules, ParserStart } = grammar;