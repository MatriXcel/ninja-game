import { RunService } from "@rbxts/services"

export class Timer
{
    private time: number;
    private isActive: boolean;
    private startTime: number;
    private timerEvent: RBXScriptConnection;
    private events: Array<{t: number, f: (t: number) => void}>;

    constructor(startTime: number)
    {

        this.isActive = false;
        this.startTime = startTime;
        this.time = startTime;
        this.events = [];

        this.timerEvent = RunService.RenderStepped.Connect((dt) => {
            if(this.isActive)
            {
                this.time = this.time + dt;

                for(let i = this.events.size(); i >= 0; i--)
                {
                    if(this.time >= this.events[i].t)
                    {
                        this.events[i].f(this.time);
                        this.events.remove(i);
                    }
                }
            }
        });
    }
    

    IsActive() : boolean {
        return this.isActive;
    }

    SetActive(isActive: boolean) {
        this.isActive = isActive;
    }

    FireOnTimeReached(t: number, f: (t: number) => void)
    {
        this.events.push({t, f});
    }

    Destroy()
    {
        this.timerEvent.Disconnect();
    }
}
