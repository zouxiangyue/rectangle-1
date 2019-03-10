module.exports = {
  'env': {
        'browser': true,
            'jquery': true,
                "node":true
                    
  },
    'extends': 'eslint:recommended',
    'globals': {
          'Atomics': 'readonly',
              'SharedArrayBuffer': 'readonly'
                  
    },
    'parserOptions': {
          'ecmaVersion': 2018
              
    },
    'rules': {
      'indent': [
              'error',
            2,
            {
                      "SwitchCase": 1,
                              "VariableDeclarator": {"var": 2, "let": 2, "const": 3}            
                            
            }

          
        ],
          'linebreak-style': [
                  'error',
                'unix'
                      
            ],
            'quotes': [
                    'error',
                  'single'
                        
              ],
              'semi': [
                      'error',
                    'always'
                          
                ]
                  
    }

};
