/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var lexer = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,11],$V2=[1,12],$V3=[5,35],$V4=[1,21],$V5=[2,8],$V6=[14,28,29,30],$V7=[2,28],$V8=[5,23,58,60,62,73,76,80],$V9=[2,20],$Va=[1,50],$Vb=[1,64],$Vc=[2,35],$Vd=[1,65],$Ve=[1,66],$Vf=[1,67],$Vg=[1,72],$Vh=[1,70],$Vi=[1,71],$Vj=[2,47],$Vk=[2,5],$Vl=[19,37],$Vm=[1,97],$Vn=[1,101],$Vo=[1,102],$Vp=[1,103],$Vq=[1,104],$Vr=[1,105],$Vs=[1,106],$Vt=[1,113],$Vu=[2,104],$Vv=[6,19,37,81,82,87,89,90,91,92,93,94,95,99,101],$Vw=[6,19,37,81,82,87,89,90,91,92,93,94,95,99,101,105,106],$Vx=[2,108],$Vy=[5,17,99,101,110,111,112],$Vz=[2,101],$VA=[2,89],$VB=[6,19,37,81,82,87,89,90,91,92,93,94,95],$VC=[1,167],$VD=[2,60],$VE=[1,173],$VF=[2,84],$VG=[5,23,28,29,30,58,60,62,73,76,80],$VH=[1,201],$VI=[2,77],$VJ=[19,94,95],$VK=[2,63];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"PROGRAMA":3,"program":4,"id":5,";":6,"PROG_OPT_VARS":7,"gotoMain":8,"MAIN":9,"EOF":10,"FUNCTION":11,"currentCuadCounter":12,"addDataToFunc":13,"function":14,"FUNC_TYPE":15,"insertFunc":16,"(":17,"OPT_PARAMS":18,")":19,"{":20,"FUNC_OPT_VARS":21,"ESTATUTOS":22,"}":23,"void":24,"main":25,"fillMain":26,"TYPE":27,"int":28,"float":29,"char":30,"BLOQUE":31,"vars":32,"PROG_VARS":33,"FUNC_VARS":34,":":35,"LISTAS_IDS":36,",":37,"PARAMS":38,"getParamType":39,"insertParamAsVar":40,"MULT_PARAMS":41,"ESTATUTO":42,"ASIGNACION":43,"LLAMADA":44,"RETURN":45,"READ":46,"WRITE":47,"CONDITION":48,"WHILE":49,"FOR":50,"=":51,"EXP":52,"genERA":53,"CALL_PARAMS":54,"generatePARAM":55,"MULT_EXPRESSION":56,"validateNoMoreParams":57,"return":58,"returnStmt":59,"read":60,"assignReadVal":61,"write":62,"WRITE_TYPE":63,"addWriteCuad":64,"MULT_WRITE":65,"CTE_S":66,"stringWriteStmt":67,"CONDITION_IF":68,"CONDITION_IF_ELSE":69,"fill":70,"addIf":71,"addElse":72,"if":73,"EXPRESSION":74,"else":75,"while":76,"whileStmtMarkStart":77,"whileStmt":78,"endWhileStmt":79,"for":80,"to":81,"do":82,"EXPRESSION_COND":83,"EXPRESSION_CONJ":84,"validarCond":85,"EXPRESSION_TYPE":86,"<=":87,"addCondOper":88,">=":89,"<":90,">":91,"==":92,"!=":93,"&":94,"|":95,"TERM":96,"semanticCreateCuadSumRes":97,"EXP_TYPE":98,"+":99,"addOper":100,"-":101,"FACTOR":102,"semanticCreateCuadMultDiv":103,"TERM_TYPE":104,"*":105,"/":106,"VAR_CTE":107,"beginParenthesis":108,"popPar":109,"CTE_I":110,"CTE_F":111,"CTE_C":112,"$accept":0,"$end":1},
terminals_: {2:"error",4:"program",5:"id",6:";",10:"EOF",14:"function",17:"(",19:")",20:"{",23:"}",24:"void",25:"main",28:"int",29:"float",30:"char",32:"vars",35:":",37:",",51:"=",58:"return",60:"read",62:"write",66:"CTE_S",73:"if",75:"else",76:"while",80:"for",81:"to",82:"do",87:"<=",89:">=",90:"<",91:">",92:"==",93:"!=",94:"&",95:"|",99:"+",101:"-",105:"*",106:"/",110:"CTE_I",111:"CTE_F",112:"CTE_C"},
productions_: [0,[3,7],[3,8],[8,0],[12,0],[13,0],[11,12],[11,13],[16,0],[9,10],[26,0],[15,1],[15,1],[27,1],[27,1],[27,1],[31,3],[7,2],[7,0],[21,2],[21,0],[33,5],[33,4],[34,5],[34,4],[36,3],[36,0],[18,1],[18,0],[38,6],[39,0],[40,0],[41,2],[41,0],[22,2],[22,0],[42,1],[42,2],[42,1],[42,1],[42,1],[42,1],[42,1],[42,1],[43,4],[43,3],[44,5],[53,0],[54,2],[54,1],[45,6],[59,0],[46,6],[61,0],[47,5],[63,3],[63,3],[67,0],[64,0],[65,2],[65,0],[48,1],[48,1],[70,0],[71,0],[72,0],[68,7],[69,10],[49,8],[77,0],[78,0],[79,0],[50,8],[74,4],[74,1],[74,1],[83,4],[85,0],[86,2],[86,2],[86,2],[86,2],[86,2],[86,2],[88,0],[84,2],[84,2],[56,3],[56,1],[57,0],[55,1],[52,4],[52,2],[97,0],[98,2],[98,2],[96,4],[96,2],[103,0],[104,2],[104,2],[100,0],[102,2],[102,1],[102,1],[102,5],[108,0],[109,0],[107,1],[107,1],[107,1],[107,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

		funcTable.insertFunc({type: "program", name:$$[$0-5], varTable: globalVarTable})
		codigo.endProc();
		return {
			cuadruplos: codigo.cuadruplos.getCuads(),
			funcTable: funcTable.funcTable,
			globalVarTable: globalVarTable.varsTable,
			manejadorMemoria: mm
		}
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
	
break;
case 2:

		funcTable.insertFunc({type: "program", name:$$[$0-6], varTable: globalVarTable})
		// codigo.endProc();
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
		// console.log("+++++++++++++")
		// console.log(mm)
		// console.log(codigo.pOper)
		// console.log(codigo.pilaO)
		// console.log(codigo.pTipos)

		return {
			cuadruplos: codigo.cuadruplos.getCuads(),
			funcTable: funcTable.funcTable,
			globalVarTable: globalVarTable.varsTable,
			constantes: mm.mapaCTE,
			local: mm.mapaLocal,
			global: mm.mapaGlobal,
			temp: mm.mapaTemp
		}
	
break;
case 3:

		codigo.gotoMain();
	
break;
case 4:

		cuadCounter = codigo.cuadruplos.counter;
	
break;
case 5:

		cuadCounter = codigo.cuadruplos.counter;
		funcTable.addToFunc($$[$0-4], {type: $$[$0-7], name:$$[$0-6], varTable: varT, varCounter: funcVarCounter, paramCounter: funcParamCounter, firstCuad: cuadCounter})
	
break;
case 6: case 7:

		varT = new tablaVariables();
		funcVarCounter = 0;
		funcParamCounter = 0;
		codigo.endFunc();
	
break;
case 8:

		funcTable.insertFunc({type: $$[$0-1], name:$$[$0], varTable: varT, varCounter: funcVarCounter, paramCounter: funcParamCounter, firstCuad: cuadCounter})
	
break;
case 9:

		funcTable.insertFunc({type: $$[$0-8], name:$$[$0-7], varTable: varT, varCounter: funcVarCounter, paramCounter: funcParamCounter, firstCuad: cuadCounter, varUpperLimit: pointerLocal})
		varT = new tablaVariables();
		funcVarCounter = 0;
		funcParamCounter = 0;
		codigo.endFunc();
	
break;
case 10:

		codigo.fillMain();
	
break;
case 21: case 22:

		pointerGlobal = mm.getCurrentGlobalPointer($$[$0-3]);
		mm.inserGlobal(pointerGlobal, $$[$0-3], $$[$0-1], '');
		globalVarTable.insertVar($$[$0-1], {tipo: $$[$0-3], dir: pointerGlobal})
	
break;
case 23: case 24:

		pointerLocal = mm.getCurrentLocalPointer($$[$0-3]);
		mm.inserLocal(pointerLocal, $$[$0-3], $$[$0-1], '')
		varT.insertVar($$[$0-1], {tipo: $$[$0-3], dir: pointerLocal})
		funcVarCounter += 1;
	
break;
case 30:


		tipoParam = $$[$0];
		pointerLocal = mm.getCurrentLocalPointer($$[$0]);
		//console.log("got pointer",pointerLocal)
	
break;
case 31:

		// console.log("inser", pointerLocal, $$[$0], '')
		mm.inserLocal(pointerLocal, $$[$0-3], $$[$0], '')
		varT.insertVar($$[$0], {tipo: tipoParam, dir: pointerLocal})
		// console.log("varT", varT.varsTable)
		funcParamCounter+=1;
	
break;
case 44:


		readLocal = varT.getVar($$[$0-3]);
		readGlobal = globalVarTable.getVar($$[$0-3])
		let readType;
		let readMemoria;
		if(readLocal != undefined){
			// console.log("metiendo a memoria local")
			mm.updateLocal(readLocal.tipo, readLocal.dir, $$[$0-1])
			readMemoria = mm.getMapaLocal(readLocal.tipo)
			// console.log(readMemoria)
			codigo.addOperando(readLocal.dir, readLocal.tipo)
		}else if(readGlobal != undefined){
			mm.updateGlobal(readGlobal.tipo, readGlobal.dir, $$[$0-1])
			readMemoria = mm.getMapaGlobal(readGlobal.tipo)
			// console.log(readMemoria)
			codigo.addOperando(readGlobal.dir, readGlobal.tipo)
		}
		codigo.addOperador($$[$0-2])
		codigo.asignStmt()
	
break;
case 46:

		codigo.goSub(funcCalled.name, funcCalled.type);
	
break;
case 47:

		funcCalled = funcTable.getFunc($$[$0])
		codigo.genEra($$[$0])
		funcParamCounter = funcCalled.paramCounter;
		callParamCounter = 1;

		//console.log("funcion", funcCalled.name, "con par", funcParamCounter)
	
break;
case 51:

		codigo.returnStmt()
	
break;
case 53:

		readLocal = varT.getVar($$[$0]);
		readGlobal = globalVarTable.getVar($$[$0])
		// let readType;
		// let readMemoria;
		if(readLocal != undefined){
			// readMemoria = mm.getMapaLocal(readLocal.tipo)
			// // mm.updateLocal(readLocal.tipo, readLocal.dir,input )
			codigo.addOperando(readLocal.dir, readLocal.tipo)
		}else if(readGlobal != undefined){
			codigo.addOperando(readGlobal.dir, readGlobal.tipo)
		}
		codigo.readStmt()
	
break;
case 57:

		pointerConst = mm.getCurrentCTEPointer('string')
		mm.inserConst(pointerConst, 'string', '', $$[$0])
		codigo.addOperando(pointerConst, 'string');
		codigo.writeStmt()
	
break;
case 58:

		codigo.writeStmt()
	
break;
case 63:

		codigo.fill_ifStmt()
	
break;
case 64:

		codigo.ifStmt()
	
break;
case 65:

		codigo.elseStmt()
	
break;
case 69:
codigo.whileStmtMarkStart()
break;
case 70:
codigo.whileStmt()
break;
case 71:
codigo.endWhileStmt()
break;
case 77:

		codigo.validarCond(mm.mapaTemp)
		//console.log(mm.mapaTemp)
	
break;
case 84:

		codigo.addOperador($$[$0])
	
break;
case 89:

		if(callParamCounter != funcParamCounter+1){
			throw new Error(`Error, llamada a funcion ${funcCalled.name} no cuenta con el numero de parametros correctos`)
		}
	
break;
case 90:

		codigo.generateParam(mm.mapaTemp)
		// console.log(callParamCounter)
		callParamCounter+=1;
	
break;
case 93:

		let res = codigo.validarSumaResta(mm.mapaTemp)
	
break;
case 98:

		codigo.validarMultDiv(mm.mapaTemp)
	
break;
case 101:

		codigo.addOperador($$[$0]);
	
break;
case 106:
codigo.addOperador($$[$0])
break;
case 107:
codigo.consumeOperador()
break;
case 108:

		readLocal = varT.getVar($$[$0]);
		// console.log(readLocal)
		readGlobal = globalVarTable.getVar($$[$0]);
		// console.log(readGlobal)
		let temp;
		if(readLocal != undefined){
			temp = readLocal.tipo;
			codigo.addOperando(readLocal.dir, readLocal.tipo);
		}
		else if(readGlobal != undefined){
			temp = readGlobal.tipo;
			codigo.addOperando(readGlobal.dir, readGlobal.tipo);
		}
		else{
			throw new Error (`var no declarada ${$$[$0]}`)
		}

		
	
break;
case 109:

		pointerConst = mm.getCurrentCTEPointer('int')
		mm.inserConst(pointerConst, 'int', '', $$[$0])
		codigo.addOperando(pointerConst, 'int');

	
break;
case 110:

		pointerConst = mm.getCurrentCTEPointer('float')
		mm.inserConst(pointerConst, 'float', '', $$[$0])
		codigo.addOperando(pointerConst, 'float');
	
break;
case 111:

		pointerConst = mm.getCurrentCTEPointer('char')
		mm.inserConst(pointerConst, 'char', '', $$[$0])
		codigo.addOperando(pointerConst, 'char');
	
break;
}
},
table: [{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:[1,4]},{7:5,14:[2,18],32:[1,6]},{8:7,14:[2,3]},{27:9,28:$V0,29:$V1,30:$V2,33:8},{9:13,11:14,14:[1,15]},{14:[2,17],27:16,28:$V0,29:$V1,30:$V2},{35:[1,17]},o($V3,[2,13]),o($V3,[2,14]),o($V3,[2,15]),{10:[1,18]},{9:19,14:[1,20]},{15:22,24:$V4,27:23,28:$V0,29:$V1,30:$V2},{35:[1,24]},{5:[1,25]},{1:[2,1]},{10:[1,26]},{15:27,24:$V4,27:23,28:$V0,29:$V1,30:$V2},{5:[2,11],25:[1,28]},{5:[1,29]},{5:[2,12]},{5:[1,30]},{6:[1,31]},{1:[2,2]},{5:[1,32]},{17:[2,10],26:33},{16:34,17:$V5},{6:[1,35]},o($V6,[2,22]),{16:36,17:$V5},{17:[1,37]},{17:[1,38]},o($V6,[2,21]),{17:[1,39]},{19:[1,40]},{18:41,19:$V7,27:43,28:$V0,29:$V1,30:$V2,38:42},{18:44,19:$V7,27:43,28:$V0,29:$V1,30:$V2,38:42},{20:[1,45]},{19:[1,46]},{19:[2,27]},{35:[2,30],39:47},{19:[1,48]},o($V8,$V9,{21:49,32:$Va}),{20:[1,51]},{35:[1,52]},{20:[1,53]},{5:$Vb,22:54,23:$Vc,42:55,43:56,44:57,45:58,46:59,47:60,48:61,49:62,50:63,58:$Vd,60:$Ve,62:$Vf,68:68,69:69,73:$Vg,76:$Vh,80:$Vi},{27:74,28:$V0,29:$V1,30:$V2,34:73},o($V8,$V9,{21:75,32:$Va}),{5:[1,76]},o($V8,$V9,{21:77,32:$Va}),{23:[1,78]},{5:$Vb,22:79,23:$Vc,42:55,43:56,44:57,45:58,46:59,47:60,48:61,49:62,50:63,58:$Vd,60:$Ve,62:$Vf,68:68,69:69,73:$Vg,76:$Vh,80:$Vi},o($V8,[2,36]),{6:[1,80]},o($V8,[2,38]),o($V8,[2,39]),o($V8,[2,40]),o($V8,[2,41]),o($V8,[2,42]),o($V8,[2,43]),{17:$Vj,51:[1,81],53:82},{17:[1,83]},{17:[1,84]},{17:[1,85]},o($V8,[2,61]),o($V8,[2,62]),{17:[2,69],77:86},{5:[1,87]},{17:[1,88]},o($V8,[2,19],{27:89,28:$V0,29:$V1,30:$V2}),{35:[1,90]},o($V8,$Vk,{13:91}),o($Vl,[2,31],{40:92}),o($V8,$Vk,{13:93}),{10:[2,9]},{23:[2,34]},o($V8,[2,37]),{5:$Vm,17:$Vn,44:95,52:94,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{17:[1,107]},{5:$Vm,17:$Vn,44:109,52:108,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{5:[1,110]},{5:$Vm,17:$Vn,44:109,52:112,63:111,66:$Vt,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{17:[1,114]},{51:[1,115]},{5:$Vm,17:$Vn,44:109,52:118,74:116,83:117,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{35:[1,119]},{5:[1,120]},{5:$Vb,22:121,23:$Vc,42:55,43:56,44:57,45:58,46:59,47:60,48:61,49:62,50:63,58:$Vd,60:$Ve,62:$Vf,68:68,69:69,73:$Vg,76:$Vh,80:$Vi},{19:[2,33],37:[1,123],41:122},{5:$Vb,22:124,23:$Vc,42:55,43:56,44:57,45:58,46:59,47:60,48:61,49:62,50:63,58:$Vd,60:$Ve,62:$Vf,68:68,69:69,73:$Vg,76:$Vh,80:$Vi},{6:[1,125]},o($V8,[2,45],{6:$Vu,99:$Vu,101:$Vu,105:$Vu,106:$Vu}),o($Vv,[2,93],{97:126}),o($Vw,$Vx,{53:82,17:$Vj}),o($Vw,[2,98],{103:127}),{5:[1,129],107:128,110:$Vq,111:$Vr,112:$Vs},o($Vw,[2,103]),o($Vy,[2,106],{108:130}),o($Vy,$Vz,{100:131}),o($Vy,$Vz,{100:132}),o($Vw,[2,109]),o($Vw,[2,110]),o($Vw,[2,111]),{5:$Vm,17:$Vn,19:$VA,44:109,52:136,54:133,55:134,57:135,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{19:[1,137]},o($Vw,$Vu),{19:[2,53],61:138},{19:[1,139]},o($Vl,[2,58],{64:140}),o($Vl,[2,57],{67:141}),{5:$Vm,17:$Vn,44:109,52:118,74:142,83:117,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{5:$Vm,17:$Vn,44:109,52:143,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{19:[1,144]},{19:[2,74],84:145,94:[1,146],95:[1,147]},{19:[2,75],86:148,87:[1,149],89:[1,150],90:[1,151],91:[1,152],92:[1,153],93:[1,154]},{5:[1,155]},{6:[1,156]},{23:[1,157]},{19:[2,29]},{27:43,28:$V0,29:$V1,30:$V2,38:158},{23:[1,159]},o($V8,[2,44]),o($VB,[2,92],{98:160,99:$Vo,101:$Vp}),o($Vv,[2,97],{104:161,105:[1,162],106:[1,163]}),o($Vw,[2,102]),o($Vw,$Vx),{5:$Vm,17:$Vn,44:109,52:164,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},o($Vy,[2,94]),o($Vy,[2,95]),{19:[1,165]},{19:$VA,37:$VC,56:166,57:168},{19:[2,49]},o($Vl,[2,90]),{6:[1,169]},{19:[1,170]},{6:[1,171]},{19:$VD,37:$VE,65:172},{19:$VD,37:$VE,65:174},{19:[1,175]},{81:[1,176]},{20:[2,64],71:177},{5:$Vm,17:$Vn,44:109,52:118,74:178,83:117,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},o($Vy,$VF,{88:179}),o($Vy,$VF,{88:180}),{5:$Vm,17:$Vn,44:109,52:181,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},o($Vy,$VF,{88:182}),o($Vy,$VF,{88:183}),o($Vy,$VF,{88:184}),o($Vy,$VF,{88:185}),o($Vy,$VF,{88:186}),o($Vy,$VF,{88:187}),{6:[1,188]},o($VG,[2,24]),{14:[2,6]},{19:[2,32]},{14:[2,7]},{5:$Vm,17:$Vn,44:109,52:189,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{5:$Vm,17:$Vn,44:109,96:190,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},o($Vy,$Vz,{100:191}),o($Vy,$Vz,{100:192}),{19:[2,107],109:193},o([5,6,19,23,37,58,60,62,73,76,80,81,82,87,89,90,91,92,93,94,95,99,101,105,106],[2,46]),{19:[2,48]},{5:$Vm,17:$Vn,44:109,52:136,55:194,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{19:[2,88]},o($V8,[2,51],{59:195}),{6:[1,196]},o($V8,[2,54]),{19:[2,55]},{5:$Vm,17:$Vn,44:109,52:112,63:197,66:$Vt,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{19:[2,56]},{20:[2,70],78:198},{5:$Vm,17:$Vn,44:109,52:199,96:96,98:99,99:$Vo,101:$Vp,102:98,107:100,110:$Vq,111:$Vr,112:$Vs},{20:$VH,31:200},{19:$VI,85:202},o($Vy,[2,85]),o($Vy,[2,86]),o($VJ,$VI,{85:203}),o($Vy,[2,78]),o($Vy,[2,79]),o($Vy,[2,80]),o($Vy,[2,81]),o($Vy,[2,82]),o($Vy,[2,83]),o($VG,[2,23]),o($VB,[2,91]),o($Vv,[2,96]),o($Vy,[2,99]),o($Vy,[2,100]),{19:[1,204]},{19:$VA,37:$VC,56:205,57:168},o($V8,[2,50]),o($V8,[2,52]),{19:[2,59]},{20:$VH,31:206},{82:[1,207]},o($V8,$VK,{70:208,75:[1,209]}),{5:$Vb,22:210,23:$Vc,42:55,43:56,44:57,45:58,46:59,47:60,48:61,49:62,50:63,58:$Vd,60:$Ve,62:$Vf,68:68,69:69,73:$Vg,76:$Vh,80:$Vi},{19:[2,73]},o($VJ,[2,76]),o($Vw,[2,105]),{19:[2,87]},o($V8,[2,71],{79:211}),{20:$VH,31:212},o($V8,[2,66]),{20:[2,65],72:213},{23:[1,214]},o($V8,[2,68]),o($V8,[2,72]),{20:$VH,31:215},o([5,23,58,60,62,73,75,76,80],[2,16]),o($V8,$VK,{70:216}),o($V8,[2,67])],
defaultActions: {18:[2,1],23:[2,12],26:[2,2],42:[2,27],78:[2,9],79:[2,34],122:[2,29],135:[2,49],157:[2,6],158:[2,32],159:[2,7],166:[2,48],168:[2,88],172:[2,55],174:[2,56],197:[2,59],202:[2,73],205:[2,87]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


const codigoInt = require('./codigoInt')
const cuadruplos = require("./cuadruplos");
const manejadorMemoria = require('./manejadorMemoria');
const directorioProcedimientos = require('./directorioProcedimientos'); 
const tablaVariables = require('./tablaVariables'); 
const mapaMemoria = require('./tablaVariables'); 

	
//variables usadas en jison lexer
let codigo = new codigoInt();
let mm = new manejadorMemoria();
let funcTable = new directorioProcedimientos();
let varT = new tablaVariables();
let globalVarTable = new tablaVariables();

let pointerGlobal;
let pointerLocal;
let pointerConst;
let tipoParam;
let funcVarCounter = 0;
let funcParamCounter = 0;
let cuadCounter = 0;
let callParamCounter = 1;
let funcCalled;
let readLocal;
let readGlobal;




/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 6;
break;
case 1:return 35;
break;
case 2:return 37;
break;
case 3:return 17;
break;
case 4:return 19;
break;
case 5:return 20;
break;
case 6:return 23;
break;
case 7:return 99;
break;
case 8:return 101;
break;
case 9:return 105;
break;
case 10:return 106;
break;
case 11:return 89;
break;
case 12:return 87;
break;
case 13:return 91;
break;
case 14:return 90;
break;
case 15:return 93;
break;
case 16:return 92;
break;
case 17:return 51;
break;
case 18:return 94;
break;
case 19:return 95;
break;
case 20:
break;
case 21:
break;
case 22:return "vars"
break;
case 23:return "program"
break;
case 24:return "read"
break;
case 25:return "write"
break;
case 26:return "function"
break;
case 27:return "return"
break;
case 28:return "int"
break;
case 29:return "float"
break;
case 30:return "char"
break;
case 31:return "void"
break;
case 32:return "print"
break;
case 33:return "if"
break;
case 34:return "else"
break;
case 35:return "for"
break;
case 36:return "to"
break;
case 37:return "do"
break;
case 38:return "while"
break;
case 39:return "main"
break;
case 40:return 5 
break;
case 41:return 111;
break;
case 42:return 110;
break;
case 43:return 112;
break;
case 44:return 66;
break;
case 45:return 10;
break;
case 46: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:;)/,/^(?::)/,/^(?:,)/,/^(?:\()/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:>=)/,/^(?:<=)/,/^(?:>)/,/^(?:<)/,/^(?:!=)/,/^(?:==)/,/^(?:=)/,/^(?:&)/,/^(?:\|)/,/^(?:[ \r\t]+)/,/^(?:\n)/,/^(?:vars\b)/,/^(?:program\b)/,/^(?:read\b)/,/^(?:write\b)/,/^(?:function\b)/,/^(?:return\b)/,/^(?:int\b)/,/^(?:float\b)/,/^(?:char\b)/,/^(?:void\b)/,/^(?:print\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:for\b)/,/^(?:to\b)/,/^(?:do\b)/,/^(?:while\b)/,/^(?:main\b)/,/^(?:[a-zA-Z][a-zA-Z_0-9]*\b)/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:'[a-zA-Z]')/,/^(?:"(\\.|[^\"])*")/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = lexer;
exports.Parser = lexer.Parser;
exports.parse = function () { return lexer.parse.apply(lexer, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}