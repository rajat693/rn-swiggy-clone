export interface Navigations{
    navigate: (routeName:string, param?:Object) => void;
    navigates: (routeName:string, param?:Object) => void;
    // goBack: Function; //both are right
    goBack: () => void;
}

export interface Variable{
    nameVal:String  //its necessary to use nameVal variable
    setname?:Function  //now its not mandatory to use it
}

export interface Props {
    item:any,
    index:any,
  }