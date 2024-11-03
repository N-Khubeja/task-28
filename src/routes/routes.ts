export interface Iroute {
    path:string,
    label:string
}

export const routes:Iroute[] = [
    {path:'/',label:'home'},
    {path:'/about',label:'about'},
    {path:'/contact',label:'contact'}
]