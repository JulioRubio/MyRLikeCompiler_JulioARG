
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
"="                 return '=';
">"                 return '>';
"<"                 return '<';
"=="                return '==';


"+"                 return '+';
"-"                 return '-';
"*"                 return '*';
"/"                 return '/';

/* WhiteSpace */
[ \r\t]+            {}
\n                  {}

/*Palabras reservadas*/
"program"           return "program"
"int"               return "int"
"float"             return "float"
"print"             return "print"
"if"                return "if"
"else"              return "else"
"var"				return "var"



/*variables*/
[a-zA-Z][a-zA-Z_0-9]*\b  return 'id' 
[0-9]+("."[0-9]+)\b    	 return 'CTE_F';
[0-9]+\b                 return 'CTE_I';

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
	: program id ';' BLOQUE EOF
	| program id ';' VARS BLOQUE EOF
;

VARS 
	: var id VAR_ID ':' TIPO ';'
;

VAR_ID 
	: VAR_ID ',' id
	| 
;

TIPO 
	: int
	| float
;

BLOQUE 
	: '{' BLOQUE_EST '}'
;

BLOQUE_EST 
	: ESTATUTO BLOQUE_EST 
	|
;

ESTATUTO 
	: ASIGNACION
	| CONDICION
;

ASIGNACION 
	: id '=' EXPRESION ';'
;

EXPRESION 
	: EXP EXPRESION_PRIME
;
EXPRESION_PRIME 
	: EXPRESION_EQL EXP
	| 
;

EXPRESION_EQL 
	: '>' 
	| '<'
	| '<>'
;  

CONDICION 
	: if '(' EXPRESION ')' BLOQUE CONDICION_ELSE
;

CONDICION_ELSE
	: else BLOQUE
	|
;

EXP 
	: TERMINO EXP_PRIME
;

EXP_PRIME 
	: EXP_SIGN EXP 
	|
;

EXP_SIGN
	: '+'
	| '-'
;

TERMINO 
	: FACTOR TERMINO_PRIME
;

TERMINO_PRIME 
	: TERMINO_SIGN TERMINO
	| 
;

TERMINO_SIGN
	: '*'
	| '/'
;

FACTOR 
	: '(' EXPRESION ')' 
	| FACTOR_SIGN VAR_CTE
	| VAR_CTE
;

FACTOR_SIGN
	: '+'
	| '-'
;

VAR_CTE 
	: id 
	| CTE_I 
	| CTE_F
;