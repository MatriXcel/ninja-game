import Roact, { Component, Element, ElementFragment } from "@rbxts/roact";
import { Players } from "@rbxts/services";
import { ClientSlotData } from "shared/ClientSlotData";
import { ReplicatedStorage as RS } from "@rbxts/services";
import { IItemSpec } from "shared/ItemSpecClasses/ItemSpec";
import { ItemSpecOracle } from "shared/ItemSpecOracle";


export class SlotUI extends Component<ClientSlotData>
{
    private itemSpec?: IItemSpec;

    public init(): void
    {
        if(this.props.itemID !== undefined)
        {
            print("the sent ID is " + this.props.itemID);
            this.itemSpec = ItemSpecOracle.GetInstance().GetSpecByID(this.props.itemID as number) as IItemSpec;
            print(this.itemSpec);
        }
    }

    public render(): Roact.Element | undefined {
        return (
        <frame Size={new UDim2(1, 0, 1, 0 )} BorderColor3={new Color3(1, 1, 1)}>
            <uiaspectratioconstraint AspectRatio = {1} AspectType = {Enum.AspectType.ScaleWithParentSize}></uiaspectratioconstraint>

            <imagelabel Size={new UDim2(1, 0, 1, 0 )} 
                        Position={new UDim2(0, 0, 0, 0)} 
                        Image={((RS.FindFirstChild("Icons")?.FindFirstChild((this.itemSpec) ? this.itemSpec.GetIconID() : "DefaultIcon")) as StringValue).Value}
                        BackgroundColor3={new Color3(1, 1, 1)}
            ></imagelabel>

            <textlabel BackgroundColor3={new Color3(1, 1, 1)}
                  AnchorPoint={new Vector2(1, 1)} 
                  Position={new UDim2(1, 0, 1, 0)} 
                  Size={new UDim2(0.4, 0, 0.4, 0)} 
                  Text = {tostring(this.props.numStacks)}
                  TextXAlignment={Enum.TextXAlignment.Center}
                  TextYAlignment ={Enum.TextYAlignment.Center}>
            </textlabel>

        </frame>
        );
    }
}


export interface InventoryComponentProps
{
    slotDisplayDatas: ClientSlotData[];
}

export class InventoryUI extends Component<InventoryComponentProps>
{

    renderSlots()
    {
        let slotItems = new Array<Roact.Element>();

        for(const [index, slotData] of pairs(this.props.slotDisplayDatas))
        {
            slotItems.push(<SlotUI {...slotData}/>);
        }
        
       return slotItems;
    }

    render(): Roact.Element | undefined {
        return (
        <frame Key="InventoryFrame" AnchorPoint={new Vector2(1, 1)} 
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

            <Roact.Fragment>{this.renderSlots()}</Roact.Fragment>
        </frame>
    </frame>);
    }
}



