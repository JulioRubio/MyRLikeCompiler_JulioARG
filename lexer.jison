
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
">="                 return '>=';
"<="                 return '<=';
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
\'[a-zA-Z]\'             return 'CTE_C';
\"(\\.|[^\"])*\"  	 	 return 'CTE_S';


<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex

/* Asociación de operadores y precedencia */



%right '='
%left '|'
%left '&'
%left '<' '>' '<=' '>=' '==' '!='
%left '+' '-'
%left '*' '/'


 


%start PROGRAMA

%% /* Definición de la gramática */

PROGRAMA
	: program id ';' PROG_OPT_VARS gotoMain MAIN EOF {
		funcTable.insertFunc({type: "program", name:$2, varTable: globalVarTable})
		// console.log("=============================== ")
		// console.log ("")
		// console.log("CUADRUPLOS ")
		// console.log(codigo.cuadruplos.cuads)
		// console.log ("")
		// console.log("=============================== ")
		// console.log("Funciones ")
		// console.log ("")
		// console.log(funcTable.funcTable)
		// console.log ("")
		// console.log("=============================== ")
		// console.log("Variables ")
		// console.log ("")
		// for(const table in funcTable.funcTable){
		// 	let tableItem = funcTable.getFunc(table);
		// 	console.log(table, tableItem.varTable.varsTable)
		// }
	}
	| program id ';' PROG_OPT_VARS gotoMain FUNCTION MAIN EOF {
		funcTable.insertFunc({type: "program", name:$2, varTable: globalVarTable})
		console.log("=============================== ")
		console.log ("")
		console.log("CUADRUPLOS ")
		console.log(codigo.cuadruplos.cuads)
		// console.log ("")
		// console.log("=============================== ")
		// console.log("Funciones ")
		// console.log ("")
		// console.log(funcTable.funcTable)
		// console.log ("")
		// console.log("=============================== ")
		// console.log("Variables ")
		// console.log ("")
		// for(const table in funcTable.funcTable){
		// 	let tableItem = funcTable.getFunc(table);
		// 	console.log(table, tableItem.varTable.varsTable)
		// }

		console.log(codigo.pOper)
		console.log(codigo.pilaO)
		console.log(codigo.pTipos)
	}
;

gotoMain
	: {
		codigo.gotoMain();
	};

currentCuadCounter
	:{
		cuadCounter = codigo.cuadruplos.counter;
	}
;

addDataToFunc
	:{
		cuadCounter = codigo.cuadruplos.counter;
		funcTable.addToFunc($-3, {type: $-6, name:$-5, varTable: varT, varCounter: funcVarCounter, paramCounter: funcParamCounter, firstCuad: cuadCounter})
	}
;

FUNCTION 
	: function FUNC_TYPE id insertFunc '(' OPT_PARAMS ')' '{' FUNC_OPT_VARS addDataToFunc ESTATUTOS '}' {
		varT = new tablaVariables();
		funcVarCounter = 0;
		funcParamCounter = 0;
		codigo.endFunc();
	}
	| FUNCTION function FUNC_TYPE id insertFunc '(' OPT_PARAMS ')' '{' FUNC_OPT_VARS addDataToFunc ESTATUTOS '}' {
		varT = new tablaVariables();
		funcVarCounter = 0;
		funcParamCounter = 0;
		codigo.endFunc();
	}
;

//puedo usar 0 para ir mas atras, que lastima que apenas me doy cuenta :v
insertFunc
	:{
		funcTable.insertFunc({type: $0, name:$1, varTable: varT, varCounter: funcVarCounter, paramCounter: funcParamCounter, firstCuad: cuadCounter})
	}
;

MAIN 
	: function void main fillMain'('  ')' '{' FUNC_OPT_VARS ESTATUTOS '}' {
		funcTable.insertFunc({type: $2, name:$3, varTable: varT, varCounter: funcVarCounter, paramCounter: funcParamCounter, firstCuad: cuadCounter, varUpperLimit: pointerLocal})
		varT = new tablaVariables();
		funcVarCounter = 0;
		funcParamCounter = 0;
		codigo.endFunc();
	}
;

fillMain
	:{
		codigo.fillMain();
	}
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
	: '{' ESTATUTOS '}'
;

PROG_OPT_VARS
	: vars PROG_VARS
	|
;


FUNC_OPT_VARS
	: vars FUNC_VARS
	|
;

PROG_VARS
	: PROG_VARS TYPE ':' id ';'{
		pointerGlobal = mm.getCurrentGlobalPointer($2);
		mm.inserGlobal($2, $4, '');
		globalVarTable.insertVar($4, {tipo: $2, dir: pointerGlobal})
	}
	| TYPE ':' id ';'{
		pointerGlobal = mm.getCurrentGlobalPointer($1);
		mm.inserGlobal($1, $3, '');
		globalVarTable.insertVar($3, {tipo: $1, dir: pointerGlobal})
	}
;


FUNC_VARS 
	: FUNC_VARS TYPE ':' id ';'{
		pointerLocal = mm.getCurrentLocalPointer($2);
		mm.inserLocal($2, $4, '')
		varT.insertVar($4, {tipo: $2, dir: pointerLocal})
		funcVarCounter += 1;
	}
	| TYPE ':' id ';'{
		pointerLocal = mm.getCurrentLocalPointer($1);
		mm.inserLocal($1, $3, '')
		varT.insertVar($3, {tipo: $1, dir: pointerLocal})
		funcVarCounter += 1;
	}
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
	: TYPE getParamType ':' id insertParamAsVar MULT_PARAMS
;

getParamType
	:{
		tipoParam = $1;
		pointerLocal = mm.getCurrentLocalPointer($1);
		//console.log("got pointer",pointerLocal)
	}
;

insertParamAsVar
	:{
		// console.log("inser", pointerLocal, $1, '')
		mm.inserLocal(pointerLocal, $1, '')
		varT.insertVar($1, {tipo: tipoParam, dir: pointerLocal})
		funcParamCounter+=1;
	}
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
	| LLAMADA ';'
	| RETURN
	| READ
	| WRITE
	| CONDITION
	| WHILE
	| FOR
;

ASIGNACION
	: id '=' EXPRESSION ';'{

		readLocal = varT.getVar($1);
		readGlobal = globalVarTable.getVar($1)
		// let readType;
		// let readMemoria;
		if(readLocal != undefined){
			// readMemoria = mm.getMapaLocal(readLocal.tipo)
			// // mm.updateLocal(readLocal.tipo, readLocal.dir,input )
			codigo.addOperando($1, readLocal.tipo)
		}else if(readGlobal != undefined){
			codigo.addOperando($1, readGlobal.tipo)
		}
		codigo.addOperador($2)
		codigo.asignStmt()
	}
	| id '=' LLAMADA
;

LLAMADA
	: id genERA '(' CALL_PARAMS ')'{
		codigo.goSub($1);
	}
;

genERA
	:{
		funcCalled = funcTable.getFunc($1)
		codigo.genEra($1)
		funcParamCounter = funcCalled.paramCounter;
		callParamCounter = 1;

		console.log("funcion", funcCalled.name, "con par", funcParamCounter)
	}
;

CALL_PARAMS
	: generatePARAM MULT_EXPRESSION
	| validateNoMoreParams
;

RETURN
	: return '(' EXP ')' ';' returnStmt
;

returnStmt
	:{
		codigo.returnStmt()
	}
;

READ
	: read '(' id assignReadVal ')' ';'
;

//ni idea
assignReadVal
	:{
		readLocal = varT.getVar($1);
		readGlobal = globalVarTable.getVar($1)
		// let readType;
		// let readMemoria;
		if(readLocal != undefined){
			// readMemoria = mm.getMapaLocal(readLocal.tipo)
			// // mm.updateLocal(readLocal.tipo, readLocal.dir,input )
			codigo.addOperando($1, readLocal.tipo)
		}else if(readGlobal != undefined){
			codigo.addOperando($1, readGlobal.tipo)
		}
		codigo.readStmt()
	}
;

WRITE
	: write '(' WRITE_TYPE ')' ';' 
;

WRITE_TYPE
	: EXP addWriteCuad MULT_WRITE
	| CTE_S stringWriteStmt MULT_WRITE
;

stringWriteStmt
	:{
		codigo.addOperando($1, "string");
		codigo.writeStmt()
	}
;

addWriteCuad
	:{
		codigo.writeStmt()
	}
;

MULT_WRITE
	: ',' WRITE_TYPE
	|
;

CONDITION
	: CONDITION_IF
	| CONDITION_IF_ELSE
;

fill	
	:{
		codigo.fill_ifStmt()
	}
;

addIf
	:{
		codigo.ifStmt()
	}
;

addElse
	:{
		codigo.elseStmt()
	}
;

CONDITION_IF
	: if '(' EXPRESSION ')' addIf BLOQUE fill
;

CONDITION_IF_ELSE
	: if '(' EXPRESSION ')' addIf BLOQUE else addElse BLOQUE fill
;

WHILE
	: while whileStmtMarkStart "(" EXPRESSION ')' whileStmt BLOQUE endWhileStmt
;

whileStmtMarkStart
	:{codigo.whileStmtMarkStart()}
;

whileStmt
	:{codigo.whileStmt()}
;

endWhileStmt
	:{codigo.endWhileStmt()}
;

FOR
	: for id '=' EXP to EXP do  BLOQUE
;

EXPRESSION
	: EXPRESSION_COND EXPRESSION_CONJ EXPRESSION validarCond
	| EXPRESSION_COND 
	| EXP 
;

EXPRESSION_COND
	:EXP EXPRESSION_TYPE EXP validarCond
;

validarCond
	:{
		codigo.validarCond()
	}
;

EXPRESSION_TYPE
	: '<=' addCondOper
	| '>=' addCondOper
	| '<' addCondOper
	| '>' addCondOper
	| '==' addCondOper
	| '!=' addCondOper
;

addCondOper
	:{
		codigo.addOperador($1)
	}
;

EXPRESSION_CONJ
	: '&' addCondOper
	| '|' addCondOper
;

MULT_EXPRESSION
	: ',' generatePARAM MULT_EXPRESSION
	| validateNoMoreParams
;

validateNoMoreParams
	:{
		if(callParamCounter != funcParamCounter+1){
			throw new Error(`Error, llamada a funcion ${funcCalled.name} no cuenta con el numero de parametros correctos`)
		}
	}
;

generatePARAM
	: EXP {
		codigo.generateParam(`p${callParamCounter}`)
		console.log(callParamCounter)
		callParamCounter+=1;
	}
;

EXP
	: TERM semanticCreateCuadSumRes EXP_TYPE EXP
	| TERM semanticCreateCuadSumRes
;

semanticCreateCuadSumRes
	:{
		let res = codigo.validarSumaResta()
	}
;

EXP_TYPE
	: '+' addOper
	| '-' addOper
;

TERM
	: FACTOR semanticCreateCuadMultDiv TERM_TYPE TERM
	| FACTOR semanticCreateCuadMultDiv
;

semanticCreateCuadMultDiv
	:{
		codigo.validarMultDiv()
	}
;

TERM_TYPE
	: '*' addOper
	| '/' addOper
;

addOper
	:{
		codigo.addOperador($1);
	}
;

FACTOR	
	: EXP_TYPE VAR_CTE
	| VAR_CTE
	| LLAMADA
	| '(' beginParenthesis EXP popPar ')'
;

beginParenthesis
	: {codigo.addOperador($1)}
;

popPar 
	: {codigo.consumeOperador()}
;

VAR_CTE
	: id{
		let tipoLocal = varT.getVarType($1);
		let tipoGlobal = globalVarTable.getVarType($1);
		let temp;
		if(tipoLocal != undefined){
			temp = tipoLocal;
			codigo.addOperando($1, tipoLocal);

		}
		else if(tipoGlobal != undefined){
			temp = tipoGlobal;
			codigo.addOperando($1, tipoGlobal);
		}
		else{
			throw new Error (`var no declarada ${$1}`)
		}

		
	}
	| CTE_I{
		codigo.addOperando($1, "int");
	}
	| CTE_F{
		codigo.addOperando($1, "float");
	}
	| CTE_C{
		codigo.addOperando($1, "char");
	}
;
%%

const codigoInt = require('./codigoInt')
const cuboSemantico = require('./cuboSemantico')
const cuadruplos = require("./cuadruplos");
const mapaMemoria = require('./mapaMemoria');
const manejadorMemoria = require('./manejadorMemoria');
const directorioProcedimientos = require('./directorioProcedimientos'); 
const tablaVariables = require('./tablaVariables'); 

	
//variables usadas en jison lexer
let codigo = new codigoInt();
let cuadruplo = new cuadruplos();
let mm = new manejadorMemoria();
let funcTable = new directorioProcedimientos();
let funcVarTable = new tablaVariables();
let varT = new tablaVariables();
let globalVarTable = new tablaVariables();





let pointerGlobal;
let pointerLocal;

let tipoParam;

let funcVarCounter = 0;
let funcParamCounter = 0;
let cuadCounter = 0;
let callParamCounter = 1;


let funcCalled;


let readLocal;
let readGlobal;

