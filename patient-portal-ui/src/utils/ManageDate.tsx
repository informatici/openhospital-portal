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
    let hh = res.getHours();
    let mm = res.getMinutes();

    let ret: string = ("0" + hh).slice(-2) + ':' + ("0" + mm).slice(-2);
    return ret;
}
export function isIsoDate(str: any) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString() === str; // valid date 
}
export function toIsoDate(str: any) {
    let date_rec = str;
    if (isIsoDate(str) == false) {
        date_rec = str.toISOString()
    }
    return date_rec; // valid date 
}
export function stringToDate(str: string) {
    let newDate = new Date(str);
    return newDate;
}
export function dateIsoToString(str: any) {
    let date_rec = str;
    date_rec = date_rec.replace("T", " ");
    date_rec = date_rec.replace("Z", "");
    date_rec = date_rec.substr(0, 19)
    return date_rec; // valid date 
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

export function getDayName(dateStr: string | number | Date, locale: any) {
    let date = new Date(dateStr);
    let date_e = date.toLocaleDateString(locale, { weekday: 'long' });
    return date_e;
}
export function capitalizeOnlyFirstLetter(dateStr: string) {
    let capitalized = "";
    if (dateStr) {
        dateStr = dateStr.toLocaleLowerCase();
        capitalized =
            dateStr.charAt(0).toUpperCase()
            + dateStr.slice(1);
    }
    return capitalized;
}
export function filterRecordTypesByValue(object: any, value: any) {
    const results = object.filter((obj: { code: any; }) => {
        return obj.code === value;
    });

    let res = results[0];
    let max = res.maxValue;
    let min = res.minValue;
    let arr = [];

    for (let i = min; i <= max; i++) {

        let obj = {
            label: i,
            value: i
        };
        arr.push(obj)
    }
    return arr;
}
export function filterRecordTypesByValueRet(object: any, value: any) {
    const results = object.filter((obj: { code: any; }) => {
        return obj.code === value;
    });
    return results[0];
}
export function arrOfOption(object: any, value: any) {
    let res = object;
    let max = res.maxValue;
    let min = res.minValue;
    let arr = [];

    for (let i = min; i <= max; i++) {

        let obj = {
            label: i,
            value: i
        };
        arr.push(obj)
    }
    return arr;
}
export function filterRecordTypesByValueDef(object: any, value: any) {
    const results = object.filter((obj: { code: any; }) => {
        return obj.code === value;
    });
    let res = results[0];
    let selected = res.defaultValue1;
    let measurementType = res.measurementType;
    let uom = res.uom;
    let max = res.maxValue;
    let min = res.minValue;
    return [selected, measurementType, uom];
}

