import { IEffect } from "server/Effects/IEffect";
import { ItemSpec } from "./ItemSpec";

export class ConsumableSpec extends ItemSpec
{
    private effects: IEffect[];

    constructor(itemName: string, itemDesc: string, maximumStacks: number, effects: IEffect[], iconID?: string)
    {
        super(itemName, itemDesc, maximumStacks, iconID);
        this.effects = effects;
    }

    Use()
    {

    }
}