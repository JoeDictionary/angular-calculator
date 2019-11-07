import { Parser, Grammar } from 'nearley';
import * as grammar from './grammar';
// declare var MathQuill: any;

function parse(value: string): any {
  const parser = new Parser(Grammar.fromCompiled(grammar));
  try {
    parser.feed(value);
    return parser.results;
  } catch (e) {
    return 'Syntax Error';
  }
}

export interface MathInput {
  selector: string;
  render: string;
  mathValue?: string;
  actionValue?: string;
  executeCode(arg: any): any;
}

export const buttonList: any = {
  bottom: [
    { selector: 'plus', render: '+', mathValue: '+' },
    { selector: 'minus', render: '-', mathValue: '-' },
    { selector: 'times', render: '&times;', mathValue: '\\times' },
    { selector: 'divide', render: '&div;', mathValue: '\\div' },

    { selector: 'one', render: '1', mathValue: '1' },
    { selector: 'two', render: '2', mathValue: '2' },
    { selector: 'three', render: '3', mathValue: '3' },
    { selector: 'four', render: '4', mathValue: '4' },
    { selector: 'five', render: '5', mathValue: '5' },
    { selector: 'six', render: '6', mathValue: '6' },
    { selector: 'seven', render: '7', mathValue: '7' },
    { selector: 'eight', render: '8', mathValue: '8' },
    { selector: 'nine', render: '9', mathValue: '9' },
    { selector: 'zero', render: '0', mathValue: '0' },
    {
      selector: 'equals',
      render: '=',
      actionValue: 'this.mathField.latex(this.parse(this.mathField.latex()))',
      executeCode(arg: any) {
        arg.latex(parse(arg.latex()));
      }
    },
    {
      selector: 'c',
      render: 'C',
      actionValue: "this.mathField.latex('')",
      executeCode(arg: any) {
        arg.latex('');
      }
    }
  ],

  top: [
    {
      selector: 'fraction',
      render: '&frac12;',
      mathValue: '\\frac{}{}',
      executeCode(arg: any) {
        arg.keystroke('Left Left');
      }
    },
    {
      selector: 'sqrt',
      render: '&radic;',
      mathValue: '\\sqrt[]{}',
      executeCode(arg: any) {
        arg.keystroke('Left');
      }
    },
    {
      selector: 'log',
      render: 'log',
      mathValue: '\\log_{}\\left(\\right)',
      executeCode(arg: any) {
        arg.keystroke('Left Left');
      }
    },
    {
      selector: 'sin',
      render: 'sin',
      mathValue: '\\sin\\left(\\right)',
      executeCode(arg: any) {
        arg.keystroke('Left');
      }
    },
    {
      selector: 'cos',
      render: 'cos',
      mathValue: '\\cos\\left(\\right)',
      executeCode(arg: any) {
        arg.keystroke('Left');
      }
    },
    {
      selector: 'tan',
      render: 'tan',
      mathValue: '\\tan\\left(\\right)',
      executeCode(arg: any) {
        arg.keystroke('Left');
      }
    },
    {
      selector: 'rightPar',
      render: '(  )',
      mathValue: '\\left(\\right)',
      executeCode(arg: any) {
        arg.keystroke('Left');
      }
    },
    {
      selector: 'power2',
      render: 'x^2',
      mathValue: '^{2}'
    },
    {
      selector: 'powerN',
      render: 'x^',
      mathValue: '^{}',
      executeCode(arg: any) {
        arg.keystroke('Left');
      }
    },
    {
      selector: 'powerNeg1',
      render: 'x^-1',
      mathValue: '^{-1}'
    },
    {
      selector: 'sum',
      render: 'Sigma',
      mathValue : '\\sum_{n=}^{ }\\left(\\right)'
    }
  ]
};

// buttonList.operator = [
//   { render: "+", mathValue: "+" },
//   { render: "-", mathValue: "-" },
//   { render: "&times;", mathValue: "\\times" },
//   { render: "&div;", mathValue: "\\div" }
// ]
