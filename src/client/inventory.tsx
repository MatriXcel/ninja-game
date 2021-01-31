import Roact, { Element, ElementFragment } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { ClientSlotData } from "shared/ClientSlotData";
import { ReplicatedStorage as RS } from "@rbxts/services";


interface SlotComponentProps
{
    slotDisplayData: ClientSlotData;
}


function SlotComponent(props: SlotComponentProps) : Element
{
    let slotDisplayData = props.slotDisplayData;
    
    print(slotDisplayData.iconID as string);

    return (<frame Size={new UDim2(1, 0, 1, 0 )} BorderColor3={new Color3(1, 1, 1)}>
        <uiaspectratioconstraint AspectRatio = {1} AspectType = {Enum.AspectType.ScaleWithParentSize}></uiaspectratioconstraint>

        <imagelabel Size={new UDim2(1, 0, 1, 0 )} 
                    Position={new UDim2(0, 0, 0, 0)} 
                    Image={((RS.FindFirstChild("Icons")?.FindFirstChild((slotDisplayData.iconID) as string)) as StringValue).Value}
                    BackgroundColor3={new Color3(1, 1, 1)}
        ></imagelabel>

        <textlabel BackgroundColor3={new Color3(1, 1, 1)}
                  AnchorPoint={new Vector2(1, 1)} 
                  Position={new UDim2(1, 0, 1, 0)} 
                  Size={new UDim2(0.4, 0, 0.4, 0)} 
                  Text = {tostring(slotDisplayData.numStacks)}
                  TextXAlignment={Enum.TextXAlignment.Center}
                  TextYAlignment ={Enum.TextYAlignment.Center}></textlabel>
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

export function hello(): string
{
    return "hello";
}

export function InventoryComponent(props: InventoryComponentProps): Element
{ 
    let slotDisplayDatas = props.slotDisplayDatas;

    print("from inv component");
    print(slotDisplayDatas);
    
    return <frame Key="InventoryFrame" AnchorPoint={new Vector2(1, 1)} 
           Position={new UDim2(0.8, 0, 0.8, 0)}
           BackgroundColor3={new Color3(1, 1, 1)}
           Size={new UDim2(0.15, 0, 0.15, 0)}>
        <uiaspectratioconstraint AspectRatio={1} AspectType={Enum.AspectType.ScaleWithParentSize}></uiaspectratioconstraint>
        
        <frame Key="InnerFrame"
               BackgroundColor3={new Color3(1, 1, 1)}
               Size={new UDim2(1, 0, 1, 0)}
               Position={new UDim2(0, 0, 0, 0)}>

            <uigridlayout CellSize={new UDim2(0.25, 0, 0.25, 0)} 
                          CellPadding={new UDim2(0.05, 0, 0.05, 0)}
                          FillDirection={Enum.FillDirection.Horizontal}
                          FillDirectionMaxCells={3}
                          HorizontalAlignment={Enum.HorizontalAlignment.Center}
                          SortOrder={Enum.SortOrder.LayoutOrder}
                          VerticalAlignment={Enum.VerticalAlignment.Center}></uigridlayout>

            <SlotsComponent slotDisplayDatas={slotDisplayDatas}></SlotsComponent>
        </frame>
    </frame>
}
