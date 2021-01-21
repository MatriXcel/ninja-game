import { Timer } from "server/Utility/Timer";
import { Attribute } from "./Attribute";
import { BaseAttribute } from "./BaseAttribute";


export class FinalBonus extends BaseAttribute
{
    private timer: Timer;
    private parent?: Attribute;

    constructor(value: number, multiplier: number, timeLength: number)
    {
        super(value, multiplier);
        this.timer = new Timer(0);
        
        this.timer.FireOnTimeReached(timeLength, (t) => this.onTimerEnd(t));
    }

    startTimer(parent: Attribute){
        this.parent = parent;
        this.timer.SetActive(true);
    }

    onTimerEnd(t: number){
        this.timer.Destroy();
        this.parent?.RemoveFinalBonus(this);
    }
}