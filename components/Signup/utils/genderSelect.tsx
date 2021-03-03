export const genderSelect: any = (gender: string) => {    
    let select = {};
    let data = [
        {
            name: "ชาย",
            value: "Male"
        },
        {
            name: "หญิง",
            value: "Female"
        },
        {
            name: "อื่นๆ",
            value: "LGBT"
        }
    ]
    data.find(items => {
        if (gender === items.value) {
            select = items
        } else if (gender === '' || gender === undefined) {
            select = { name: data[0].name, value: data[0].value }
        } else {
            select = { name: data[0].name, value: data[0].value }
        }
    })
    if (select !== "" && select === undefined) {
        return select
    }else{
        return select
    }
}