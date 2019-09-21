export class mathInput {
  render: string;
  mathValue?: string;
  actionValue?: string;
}

export const buttonList: mathInput[] = [
  { render: "+", mathValue: "+" },
  { render: "-", mathValue: "-" },
  { render: "&times;", mathValue: "\\times" },
  { render: "&div;", mathValue: "\\div" },
  { render: "1", mathValue: "1" },
  { render: "2", mathValue: "2" },
  { render: "3", mathValue: "3" },
  { render: "4", mathValue: "4" },
  { render: "5", mathValue: "5" },
  { render: "6", mathValue: "6" },
  { render: "7", mathValue: "7" },
  { render: "8", mathValue: "8" },
  { render: "9", mathValue: "9" },
  { render: "0", mathValue: "0" },
  { render: "=", actionValue: "this.mathField.latex(this.parse(this.mathField.latex()))" },
  {render: "C", actionValue: "this.mathField.latex('')"}
];
