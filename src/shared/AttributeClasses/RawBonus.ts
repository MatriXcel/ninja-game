// local class = require(game:GetService("ReplicatedStorage").Class)
// local BaseAttribute = require(script.Parent.BaseAttribute)

import { BaseAttribute } from "./BaseAttribute";


export class RawBonus extends BaseAttribute
{
    constructor(value: number, multiplier: number)
    {
        super(value, multiplier);
    }
}
