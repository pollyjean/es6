{
  console.log("var 호이스팅");
  console.log(var_hoisting); //undefined var변수는 초기화까지 되었음
  var var_hoisting; //undefined
}

{
  // console.log("let 호이스팅");
  // console.log(let_hoisting); // ReferenceError let변수는 주소만 있는 상태 Temporal Dead Zone(TDZ)
  // let let_hoisting; //undefined
}

{
  console.log("var 재선언");
  var variables = 5;
  var variables = "a";
  variables = true;
  console.log(variables);
}

{
  // console.log("let 재선언");
  // let letvar = 5;
  // let letvar = "a"; //SyntaxError
}

{
  console.log("let 재할당");
  let letvar2 = true;
  letvar2 = { 1: 2 };
  console.log(letvar2);
}
{
  // console.log("const 재선언");
  // const PI = 3.14;
  // const PI = 3; //SyntaxError
}

{
  // console.log("const 재할당");
  // const ROOT_TWO = 1.414;
  // ROOT_TWO = 1; //TypeError
}

{
  console.log("var 함수 레벨 범위");
  var function_level_scope = 1;
  if (true) {
    var function_level_scope = 20;
  }
  console.log(function_level_scope);
}

{
  console.log("let 함수 레벨 범위");
  let block_level_scope = 1;
  if (true) {
    let block_level_scope = 20;
  }
  console.log(block_level_scope);
}

{
  var global_var = 1;
  let global_let = 2;
  implicit_global = 3;

  {
    console.log("var let 그냥선언 어느것이 글로벌 == window의 프로퍼티 (window. 을 생략)");
    console.log(window.global_var);
    console.log(window.global_let);
    console.log(window.implicit_global);
  }
}

{
  console.log("lexical(정의한 곳이 범위) scope is static scope ");
  var lexical_var = 10;

  function foo() {
    var lexical_var = 20;
    bar();
  }

  function bar() {
    console.log(lexical_var);
  }

  foo();
  bar();
}

{
  console.log("const는 데이터 값 변경만 안되는거임 딴건 됨");
  const CONST_PROP = { A: 3.14 };
  console.log(CONST_PROP.A);
  CONST_PROP.B = CONST_PROP.A;
  CONST_PROP.B = 3;
  delete CONST_PROP.A;
  console.log(CONST_PROP.B);
}
