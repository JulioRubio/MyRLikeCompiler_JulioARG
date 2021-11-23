# MyRLikeCompiler_JulioARG
Compilador basado en lenguaje MyRLike utilizando js

Autor: 
    Julio Alexis Rubio Gzz
    A00819054

Avance #1. Se diseño la gramática en base a archivo MyRLike.pdf con su respectivos diagramas. Utilizando jison un analizador lexico como bison para javascript se crea el analizar léxico y sintactico.

Avance #2 Se modificó la gramático del archivo jison, se creo el directorio de procedimientos utilizando un diccionario con las funciones para agregar una función (validar que esta no este previamente declarada), regresar una función y regresar el directorio de funciones y el cubo semántico con un objeto de tipo JSON el cual incluye la lógica del resultado de una operación de un entero, flotante, char, string y bool contra cada uno. 

Avance #3 se agrego tabla de variables.

Avance #4 se trabajo en la generacion de codigo intermedio mediante la creacion de cuadruplos.

Avance#5 se termino generacion de codigo intermedio para expresiones aritmeticas y estatutos condicionales y ciclo de while. Se modifico lexer pues por razones de errores pasados no compilaba programa minimo y se arreglo para un problema mas desarrollado como el que se puede observar en input.txt. Se modifico lógica de generación de cuadruplos pues el diseño anterior no me permitia modificar un cuadruplo para resolver los GOTOs.

Avance#6 se creo el mapeo de la memoria, se agrego un manejador de esta memoria global, local, temporal y constantes para dar de alta variables locales y globales que pueden ser entero, flotante o char. Se modifico la gramatica para poder agregar en memoria las direcciones de variables y se comenzo a diseñar la logica de la maquina virtual que leera e interpretara los cuadruplos.

Avance#7 Se creo la maquina virtual y se codificaron los switch cases para las operaciones aritmeticas basicas de suma, resta, mult, div e igualacion, se completo el write y las llamadas a funciones con o sin parametros incluyendo funciones que retornan valor asignando el valor requesada al lado izquierdo de la asignacion. Se modifico la gramatica, el parser, el codigo intermedio y el manejador de memoria para incluir toda la funcionalidad de los puntos neuralgicos para llamadas, condiciones, ciclos, y cambios pequeños a tabla de variables y directorio de funciones.