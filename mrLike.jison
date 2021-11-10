%{

%}



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
[a-zA-Z]\b               return 'CTE_C';
[a-zA-Z][a-zA-Z_0-9]+\b  return 'CTE_S';


<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* Asociación de operadores y precedencia */

%left '+' '-'
%left '*' '/'
%left UMINUS

%start PROGRAMA

%% /* Definición de la gramática */

PROGRAMA
	: program id ';' OPT_VARS FUNCTIONS MAIN EOF
;

FUNCTIONS
	: FUNCTIONS FUNCTION 
	|
;

FUNCTION 
	: function FUNC_TYPE id '(' OPT_PARAMS ')' OPT_VARS BLOQUE
;

MAIN 
	: function void main '('  ')' OPT_VARS BLOQUE 
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

OPT_VARS
	: VARS
	| 
;

VARS 
	: vars TYPE ':' id LISTAS_IDS ';' MULT_VARS
;

MULT_VARS
	: TYPE ':' id LISTAS_IDS ';' MULT_VARS
	|
;

LISTAS_IDS 
	: ',' id LISTAS_IDS
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
	| CTE_S MULT_WRITE
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