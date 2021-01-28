import { ReplicatedStorage as RS } from "@rbxts/services";

export class TooltipUI {
    tooltipInstance: Tooltip;

    constructor(tooltipInstance: Tooltip, pos: UDim2, itemName: string, desc: string, effects?: string[]) {

        this.tooltipInstance = tooltipInstance;
        this.tooltipInstance.Visible = true;
        this.tooltipInstance.Position = pos;

        this.tooltipInstance.HeaderFrame.NameText.Text = itemName;

        if (effects !== undefined) {
            for (const [index, effect] of pairs(effects)) {
                let effectFrameClone = RS.EffectFrame.Clone();
                effectFrameClone.EffectLabel.Text = effect;
            }
        }

        this.tooltipInstance.DescLabel.Text = desc;
    }

    Show() {
        this.tooltipInstance.Visible = true;
    }

    Hide() {
        this.tooltipInstance.Visible = false;
    }
}