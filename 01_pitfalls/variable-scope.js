const variableScopeExample = () => {
    if (true) {
      var functionScoped = 'I am function scoped';
      let blockScoped = 'I am block scoped';
      const blockScopedConst = 'I am also block scoped';
    }
    console.log(functionScoped); // OK
    // console.log(blockScoped); // ReferenceError
    // console.log(blockScopedConst); // ReferenceError
  };
  
  variableScopeExample();
  