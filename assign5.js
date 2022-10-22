class cylinder{
    constructor(r,h)
    {
        this.r =r
        this.h = h
    }
    getVolume(){
        let v1 = 3.14*this.r*this.r*this.h
        return v1.toFixed(4)
    }
}

vol1 = new cylinder(6,5)
let value1 = vol1.getVolume()
console.log(value1)


class sphere{
    constructor(r)
    {
        this.r =r
    }
    getVolume(){
        let v2 = 3.14*this.r*this.r*this.r*(4/3)
        return v2.toFixed(4)
    }
}

vol2 = new sphere(6)
let value2 = vol2.getVolume()
console.log(value2)


class Cone{
    constructor(r,h)
    {
        this.r =r
        this.h = h
    }
    getVolume(){
        let v3 = (3.14*this.r*this.r)*(this.h/3)
        return v3.toFixed(4)
    }
}

vol3 = new Cone(8,5)
let value3 = vol3.getVolume()
console.log(value3)