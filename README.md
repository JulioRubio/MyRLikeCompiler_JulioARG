# MyRLikeCompiler_JulioARG
Compilador basado en lenguaje MyRLike utilizando js

Autor: 
    Julio Alexis Rubio Gzz
    A00819054

Avance #1. Se diseño la gramática en base a archivo MyRLike.pdf con su respectivos diagramas. Utilizando jison un analizador lexico como bison para javascript se crea el analizar léxico y sintactico.

Avance #2 Se modificó la gramático del archivo jison, se creo el directorio de procedimientos utilizando un diccionario con las funciones para agregar una función (validar que esta no este previamente declarada), regresar una función y regresar el directorio de funciones y el cubo semántico con un objeto de tipo JSON el cual incluye la lógica del resultado de una operación de un entero, flotante, char, string y bool contra cada uno. 

Avance #3 se agrego tabla de variables.

Avance #4 se trabajo en la generacion de codigo intermedio mediante la creacion de cuadruplos.