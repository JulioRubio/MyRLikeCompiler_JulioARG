//cubo semantico, utilizado por el codigo int para validar que los tipos de dos datos a los cuales se les realizará una operación no regresen un valor nulo.
let cuboSemantico = {
    int:{
        int:{
            '+': 'int',
            '-': 'int',
            '*': 'int',
            '/': 'int',
            '<': 'bool',
            '>': 'bool',
            '=': 'int',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        float:{
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '=': 'int',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        char:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        }  
    },
    float:{
      int:{
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '=': 'float',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        float:{
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '=': 'float',
            '<=': 'bool',
            '>=': 'bool',
            '==': 'bool',
            '!=':'bool',
        },
        char:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        }  
    },
    char:{
        int:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        float:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        char:{
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': 'bool',
            '!=':'bool',
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        }  
    },
    bool:{
        int:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        float:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        char:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        string:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '=': null,
            '<=': null,
            '>=': null,
            '==': null,
            '!=':null,
        },
        bool:{
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '<=': null,
            '>=': null,
            '==': 'bool',
            '!=':'bool',
            '|': 'bool',
            '&':'bool',
        }  
    } 
}

module.exports = cuboSemantico;