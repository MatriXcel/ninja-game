import { BaseAttribute } from "./BaseAttribute";
import { FinalBonus } from "./FinalBonus";
import { RawBonus } from "./RawBonus";


export class Attribute extends BaseAttribute
{
    rawBonuses: RawBonus[];
    finalBonuses: FinalBonus[];
    finalValue: number;

    constructor(startingValue: number)
    {
        super(startingValue, 0);

        this.rawBonuses = this.finalBonuses = [];
        this.finalValue = startingValue;
    }

    AddRawBonus(rawBonus: RawBonus)
    {
        this.rawBonuses.push(rawBonus);
    }

    AddFinalBonus(finalBonus: FinalBonus)
    {
        this.finalBonuses.push(finalBonus);
    }

    RemoveRawBonus(_rawBonus: RawBonus)
    {
        this.rawBonuses.forEach((rawBonus, index) => {
            if(rawBonus === _rawBonus)
                this.rawBonuses.remove(index);
        });
    }

    RemoveFinalBonus(_finalBonus: FinalBonus)
    {
        this.finalBonuses.forEach((finalBonus, index) => {
            if(finalBonus === _finalBonus)
                this.finalBonuses.remove(index);
        });
    }

    ApplyRawBonuses()
    {
        let rawBonusValue = 0;
        let rawBonusMultiplier = 0;

        this.rawBonuses.forEach((rawBonus) => {
            rawBonusValue += rawBonus.GetValue();
            rawBonusMultiplier += rawBonus.GetMultiplier();
        });

        this.finalValue += rawBonusValue;
        this.finalValue *= (1 + rawBonusMultiplier);
    }

    ApplyFinalBonuses()
    {
        let finalBonusValue = 0;
        let finalBonusMultiplier = 0;

        this.finalBonuses.forEach((finalBonus) => {
            finalBonusValue += finalBonus.GetValue();
            finalBonusMultiplier += finalBonus.GetMultiplier();
        });

        this.finalValue += finalBonusValue;
        this.finalValue *= (1 + finalBonusMultiplier);
    }

    CalculateValue(): number
    {
        this.finalValue = this.baseValue;
        
        this.ApplyRawBonuses();
        this.ApplyFinalBonuses();

        return this.finalValue;
    }

    GetFinalValue()
    {
        return this.finalValue;
    }
}