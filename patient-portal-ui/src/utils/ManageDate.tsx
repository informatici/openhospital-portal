// const getTimeLab = (date_to_c: string | number | Date) => {
//     let res: Date = new Date(date_to_c);
//     let ret: string = res.getHours() + ':' + res.getMinutes();
//     return ret;
// };
// const getDateLab = (date_to_c: string | number | Date) => {
//     const t = new Date(date_to_c);
//     let y: number = t.getFullYear();
//     let m: any = t.getMonth() + 1; // Months start at 0!
//     let d: any = t.getDate();
//     if (d < 10) d = '0' + d;
//     if (m < 10) m = '0' + m;
//     let res = d + '/' + m + '/' + y;

//     return res;
// };

export function getTimeLab(date_to_c: string | number | Date) {
    let res: Date = new Date(date_to_c);
    let ret: string = res.getHours() + ':' + res.getMinutes();
    return ret;
}
export function getDateLab(date_to_c: string | number | Date) {
    const t = new Date(date_to_c);
    let y: number = t.getFullYear();
    let m: any = t.getMonth() + 1; // Months start at 0!
    let d: any = t.getDate();
    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;
    let res = d + '/' + m + '/' + y;

    return res;
};
export function compare(a: string | number | Date, b: string | number | Date) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
};