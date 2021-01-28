import Roact, { Element, ElementFragment } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { ClientSlotData } from "shared/ClientSlotData";



interface SlotComponentProps
{
    slotDisplayData: ClientSlotData;
}


function SlotComponent(props: SlotComponentProps) : Element
{
    let slotDisplayData = props.slotDisplayData;

    return (<frame Size={new UDim2(1, 0, 1, 0 )}>
        <uiaspectratioconstraint AspectRatio = {1} AspectType = {Enum.AspectType.ScaleWithParentSize}></uiaspectratioconstraint>
        <imagelabel Size={new UDim2(1, 0, 1, 0 )} Position={new UDim2(0, 0, 0, 0)} Image={slotDisplayData.iconID}></imagelabel>
        <textlabel Position={new UDim2(1, 0, 1, 0)} Size={new UDim2(0.4, 0, 0.4, 0)} Text = {tostring(slotDisplayData.numStacks)}></textlabel>
    </frame>);
}


interface SlotsComponentProps
{
    slotDisplayDatas: ClientSlotData[];
}


function SlotsComponent(props: SlotsComponentProps): Element
{
    let slotItems = new Array<Roact.Element>();

    for(const [index, slotData] of pairs(props.slotDisplayDatas))
    {
        slotItems.push(<SlotComponent slotDisplayData = {slotData} />);
    }
    
    return <Roact.Fragment>{...slotItems}</Roact.Fragment>   
}

export interface InventoryComponentProps
{
    slotDisplayDatas: ClientSlotData[];
}

export function InventoryComponent(props: InventoryComponentProps): Element
{
    let slotDisplayDatas = props.slotDisplayDatas;

    return <frame Key="InventoryFrame" AnchorPoint={new Vector2(1, 1)} 
           Position={new UDim2(0.8, 0, 0.8, 0)}
           Size={new UDim2(0.15, 0, 0.15, 0)}>
        <uiaspectratioconstraint></uiaspectratioconstraint>
        
        <frame Key="InnerFrame"
               Position={new UDim2(0, 0, 0, 0)}>
            <uigridlayout></uigridlayout>
            <SlotsComponent slotDisplayDatas={slotDisplayDatas}></SlotsComponent>
        </frame>
    </frame>
}
