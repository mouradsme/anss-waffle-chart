type Orders = 'asc' | 'desc'
export interface ChartOptions {
    OrderBy       : any;
    OrderDirection  : Orders;
    BackgroundColor: any;
    fontSize: number;
    textColor: any;
    gradientColor1: any;
    gradientColor2: any;
    autoColoring: boolean;
    height: number;
    scale: number;
    rowsNumber: number;
}
