export class BaseAttribute
{
    protected baseMultiplier: number;
    protected baseValue: number;

    constructor(value: number, multiplier: number)
    {
        this.baseValue = value;
        this.baseMultiplier = multiplier;
    }

    GetValue()
    {
        return this.baseValue;
    }

    GetMultiplier()
    {
        return this.baseMultiplier;
    }
}
