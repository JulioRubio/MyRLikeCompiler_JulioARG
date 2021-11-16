
/* Definición Léxica */
%lex

%%

";"                 return ';';
":"                 return ':';
","                 return ',';
"("                 return '(';
")"                 return ')';
"{"                 return '{';
"}"                 return '}';

"+"                 return '+';
"-"                 return '-';
"*"                 return '*';
"/"                 return '/';
">"                 return '>';
"<"                 return '<';
">="                 return '>=';
"<="                 return '<=';
"!="                return '!=';
"=="                return '==';
"="                 return '=';
"&"                 return '&';
"|"                 return '|';


/* WhiteSpace */
[ \r\t]+            {}
\n                  {}

/*Palabras reservadas*/
"vars"				return "vars"
"program"           return "program"
"read"           	return "read"
"write"           	return "write"
"function"          return "function"
"return"           	return "return"
"int"               return "int"
"float"             return "float"
"char"           	return "char"
"void"           	return "void"
"print"             return "print"
"if"                return "if"
"else"				return "else"
"for"              	return "for"
"to"              	return "to"
"do"              	return "do"
"while"             return "while"
"main"	            return "main"





/*variables*/
[a-zA-Z][a-zA-Z_0-9]*\b  return 'id' 
[0-9]+("."[0-9]+)\b    	 return 'CTE_F';
[0-9]+\b                 return 'CTE_I';
\'[a-zA-Z]\'             return 'CTE_C';
\"(\\.|[^\"])*\"  	 	 return 'CTE_S';


<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* Asociación de operadores y precedencia */

%right '='
%left '<' '>' '<=' '>=' '==' '!='
%left '+' '-'
%left '*' '/'

%start PROGRAMA

%% /* Definición de la gramática */

PROGRAMA
	: program id ';' PROG_OPT_VARS gotoMain MAIN EOF 
	| program id ';' PROG_OPT_VARS gotoMain FUNCTION  MAIN EOF 
;

gotoMain
	: {
		codigo.gotoMain();
	};


FUNCTION 
	: function FUNC_TYPE id '(' OPT_PARAMS ')' FUNC_OPT_VARS BLOQUE
	| FUNCTION function FUNC_TYPE id '(' OPT_PARAMS ')' FUNC_OPT_VARS BLOQUE
;

MAIN 
	: function void main '('  ')' FUNC_OPT_VARS BLOQUE 
;

FUNC_TYPE
	: void
	| TYPE
;

TYPE
	: int
	| float
	| char
;

BLOQUE 
	: '{' ESTATUTO ESTATUTOS '}'
;

PROG_OPT_VARS
	: PROG_VARS
	|
;


FUNC_OPT_VARS
	: FUNC_VARS
	|
;

PROG_VARS
	: vars TYPE ':' LISTAS_IDS id  ';' MULT_VARS {
		console.log($2, $5)
	}
;

FUNC_VARS 
	: vars TYPE ':' id LISTAS_IDS ';' {
		console.log($2, $4, $5)
	}
;

MULT_VARS
	: TYPE ':' LISTAS_IDS id ';' MULT_VARS {
		console.log($1, $3)
	}
	|
;

LISTAS_IDS 
	: LISTAS_IDS id ','   {
		console.log($2)
		currentGlobalVars.push($2)
	}
	|
;

OPT_PARAMS
	: PARAMS
	| 
;

PARAMS 
	: TYPE ':' id MULT_PARAMS
;

MULT_PARAMS 
	: ',' PARAMS
	|
;

ESTATUTOS
	: ESTATUTO ESTATUTOS
	|
;

ESTATUTO	
	: ASIGNACION
	| LLAMADA_VOID
	| RETURN
	| READ
	| WRITE
	| CONDITION
	| WHILE
	| FOR
;

ASIGNACION
	: id '=' EXPRESSION ';'
	| id '=' LLAMADA_VOID
;

LLAMADA_VOID
	: id '(' EXPRESSION MULT_EXPRESSION ')' ';'
;

RETURN
	: return '(' EXP ')' ';'
;

READ
	: read '(' id LISTAS_IDS ')' ';'
;

WRITE
	: write '(' WRITE_TYPE ')' ';' 
;

WRITE_TYPE
	: EXPRESSION MULT_WRITE
	| CTE_S  MULT_WRITE
;

MULT_WRITE
	: ',' WRITE_TYPE
	|
;

CONDITION
	: if '(' EXPRESSION ')' BLOQUE CONDITION_ELSE
;

CONDITION_ELSE
	: else BLOQUE
	|
;

WHILE
	: while "(" EXPRESSION ')' do BLOQUE
;

FOR
	: for id '=' EXP to EXP do BLOQUE
;

EXPRESSION
	: EXP EXPRESSION_TYPE EXP EXPRESSION_CONJ EXPRESSION
	| EXP EXPRESSION_CONJ EXPRESSION
	| EXP EXPRESSION_TYPE EXP
	| EXP

;

EXPRESSION_TYPE
	: '<'
	| '>'
	| '<='
	| '>='
	| '=='
	| '!='
;

EXPRESSION_CONJ
	: '&' 
	| '|'
;

MULT_EXPRESSION
	: ',' EXPRESSION MULT_EXPRESSION
	|
;

EXP
	: TERM EXP_TYPE EXP
	| TERM
;

EXP_TYPE
	: '+'
	| '-'
;

TERM
	: FACTOR TERM_TYPE TERM
	| FACTOR
;

TERM_TYPE
	: '*'
	| '/'
;

FACTOR	
	: '(' EXPRESSION ')'
	| EXP_TYPE VAR_CTE
	| VAR_CTE
;

VAR_CTE
	: id
	| CTE_I
	| CTE_F
	| CTE_C
;

%%

const codigoInt = require('./codigoInt')
const cuboSemantico = require('./cuboSemantico')
const cuadruplos = require("./cuadruplos");
const mapaMemoria = require('./mapaMemoria');
const manejadorMemoria = require('./manejadorMemoria');

	
//variables usadas en jison lexer
let codigo = new codigoInt();
let cuadruplo = new cuadruplos();
let manejador = new maquinaVirtual();

let pointerGlobal;
let currentGlobalVars = []



